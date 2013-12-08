
window.LoadManager = {

    
    load:function (successCallback, errorCallback) {
        var result = {
                items: [{"name":"rest 1","id":"1"},{"name":"rest 2","id":"2"}]
            };
        
        successCallback( JSON.stringify(result) );
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
