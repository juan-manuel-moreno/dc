
window.SearchManager = {

    apiUrl:"http://localhost:3000/restaurants-api?",
    
    search:function (searchString, successCallback, errorCallback) {
  /*
    	var searchURL = this.apiUrl + "q=" + encodeURIComponent(searchString) + "&ll=" + window.GeoWatcher.position.latitude + "," + window.GeoWatcher.position.longitude + "&d=" + new Date().getTime();

        var output = [];
        var target = [];
        target[ "travel_time_seconds"] = 60000;
        target[ "travel_time_formatted"] = "1 min";
        target[ "distance"] = 5;
        output.push(target);
        output = output.sort(function(a,b){return a.travel_time_seconds - b.travel_time_seconds});
        var result = {
                points: output,
                polygons: []
            };
*/
        
        var result = {
                points: [{"travel_time_seconds":60000,"travel_time_formatted" : "1 min", "distance":5, "address":"Duarte Quiros 1696, Cordoba, Argentina"}],
                polygons: []
            };
        
        successCallback( JSON.stringify(result) );

        /*
        $.ajax({
            timeout:20000,
            url:searchURL,
            success:function(result){
                if ( successCallback ) {
                    successCallback( result );
                }
            },
            error:function(error){
                if ( errorCallback ){
                    errorCallback( error );
                }
            }
        });
         */
    },

    findPointById:function (id, collection) {
        for (var x=0; x<collection.length; x++) {
            var poi = collection[x];
            if (poi.factual_id == id){
                return poi;
            }
        }
        return null;
    }
}
