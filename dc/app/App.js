

window.App = {

	type:{
			hotel:{code:"hotel",url:"/getHotels"}, 
			restaurant:{code:"restaurant",url:"/getRestaurants"}
		}
	,
    getDefinition:function (type) {

    	if(type == this.type.restaurant.code){
    		return this.type.restaurant;
    	} else {
    		return this.type.hotel;
    	}
    	
    	return;
    }
};
