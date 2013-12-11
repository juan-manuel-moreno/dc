

window.LoadManager = {

	type:{
			hotel:{code:"hotel",url:"/getHotels"}, 
			restaurant:{code:"restaurant",url:"/getRestaurants"}
		},
	
	//urlBase:"http://www.diproach.com/api/dc",
	urlBase:"http://localhost:8888/api/dc",
	
    loadLocal:function (type, successCallback, errorCallback) {
    	var result;
    	if(type == this.type.restaurant.code){
        	result = {
                    items: [	
                             {"name":"rest 1","id":"1"}
                    		,{"name":"rest 2","id":"2"}
                    		,{"name":"rest 3","id":"3"}
                    		,{"name":"rest 4","id":"4"}
                    		,{"name":"rest 5","id":"5"}
                    		,{"name":"rest 6","id":"6"}
                    		,{"name":"rest 7","id":"7"}
                    		,{"name":"rest 8","id":"8"}
                    		,{"name":"rest 9","id":"9"}
                    		,{"name":"rest 10","id":"10"}
                    		,{"name":"rest 11","id":"11"}
                    		,{"name":"rest 12","id":"12"}
                    	   ],
                    labelPlural: "Restaurantes",
                    labelSingular: "Restaurante",
                    type: type
                };
    	} else {
        	result = {
                    items: [	
                             {"name":"hotel 1","id":"1"}
                    		,{"name":"hotel 2","id":"2"}
                    		,{"name":"hotel 3","id":"3"}
                    		,{"name":"hotel 4","id":"4"}
                    		,{"name":"hotel 5","id":"5"}
                    		,{"name":"hotel 6","id":"6"}
                    		,{"name":"hotel 7","id":"7"}
                    		,{"name":"hotel 8","id":"8"}
                    		,{"name":"hotel 9","id":"9"}
                    	   ],
                    labelPlural: "Hoteles",
                    labelSingular: "Hotel",
                    type: type
                };
    	}
        
        successCallback( JSON.stringify(result) );
    },

    load:function (type, successCallback, errorCallback) {

    	var loadUrl = this.urlBase ;

    	var definition = App.getDefinition(type);

    	loadUrl += definition.url;
    	
    	
    	/*
        $.ajax({
            timeout:20000,
            url:loadUrl,
            success:function(result){
                if ( successCallback ) {
                    successCallback( result.data );
                }
            },
            error:function(error){
                if ( errorCallback ){
                    errorCallback( error );
                }
            }
        });
    	
        */
  /*      
        
		$.ajax({
            timeout:20000,
            url:loadUrl,
			crossDomain: true,
			type : 'GET',
			cache : false,
			dataType : 'json'
		}).done(function(result) {

            if ( successCallback ) {
                successCallback( result.data );
            }
			

		}).fail(function(a, b, c, d) {
            if ( errorCallback ){
                errorCallback( a );
            }
		});
*/
        
        
		$.getJSON(loadUrl, function(result) {

            if ( successCallback ) {
            	var jsonString = JSON.stringify(result.data);
            	JSonUtil.save("hotels.json", jsonString, function() {alert("OK");} , function() {alert("NOK");} );
                successCallback( jsonString );
            }
			
		  }).error(function(result) {
	            if ( errorCallback ){
	                errorCallback( result );
	            }
		  });

		
        
        
        
    },

    loadById:function (id, collection) {
        for (var x=0; x<collection.length; x++) {
            var item = collection[x];
            if (item.id == id){
                return item;
            }
        }
        return null;
    }
};
