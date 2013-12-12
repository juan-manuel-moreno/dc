

window.ModelManager = {

	type:{
		hotel:{code:"hotel",url:"/getHotels",fileName:"hotel.json"}, 
		restaurant:{code:"restaurant",url:"/getRestaurants",fileName:"restaurant.json"}
	},

	setup:{
		hotel:{
	            items: [	
	                     {"name":"hotel 1","id":"1"}
		           		,{"name":"hotel 2","id":"2"}
		           		,{"name":"hotel 3","id":"3"}
		           		,{"name":"hotel 4","id":"4"}
	           	   ],
	           labelPlural: "Hoteles",
	           labelSingular: "Hotel",
	           type: "hotel"
		}, 
		restaurant:{
	            items: [	
	                     {"name":"rest 1","id":"1"}
		           		,{"name":"rest 2","id":"2"}
		           		,{"name":"rest 3","id":"3"}
		           		,{"name":"rest 4","id":"4"}
	           	   ],
	           labelPlural: "Restaurantes",
	           labelSingular: "Restaurante",
	           type: "restaurant"
		}
	},
    
	getDefinition:function (type) {

    	if(type == this.type.restaurant.code){
    		return this.type.restaurant;
    	} else {
    		return this.type.hotel;
    	}
    	
    	return;
    },

	getSetup:function (type) {

		if(type == this.type.restaurant.code){
    		return this.setup.restaurant;
    	} else {
    		return this.setup.hotel;
    	}
    	
    	return;
    },

	urlBase:"http://www.diproach.com/api/dc",
	//urlBase:"http://localhost:8888/api/dc",
	
    getAll:function (type, successCallback, errorCallback) {

		var definition = this.getDefinition(type);

    	if(App.isEnvironmentWeb()){
    		var setup = this.getSetup(type);
    		successCallback(JSON.stringify(setup));
    	} else {
    		JSonUtil.read(definition.fileName, successCallback, errorCallback);
    	} 
    	
    },

    
    getById:function (id, collection) {
		
		for (var x=0; x < collection.length; x++) {
            var item = collection[x];
            if (item.id == id){
                return item;
            }
        }
        return null;
    },
    
    updateAll:function(){
    	if(App.isEnvironmentWeb()) return;
    	
    	_.each(this.type, function (item) {
        	this.update(item);
        }, this);    	
    },
    
    update:function(item){

    	var setup = this.getSetup(item.code);
    	
    	JSonUtil.exists(item.fileName, 
			function(){
    			// If exists update from server
				ModelManager.updateFromServer(item);
			}, 
			function(){

				// If not exist create file with setup values 
				JSonUtil.save(item.fileName, setup,	
					function(){


						// If file was created we must try update from server
						ModelManager.updateFromServer(item);
						
					}, 
					function(){}
				);
			}, 
			function(){} 
		);
    },
    
    updateFromServer:function(definition){

		var loadUrl = this.urlBase + definition.url;
        
		$.getJSON(loadUrl, function(result) {


			var jsonString = JSON.stringify(result.data);
        	JSonUtil.save(definition.fileName, jsonString, function(){}, function(){} );
			
		  }).error(function(result) {
		  });

    }
    
    
};
