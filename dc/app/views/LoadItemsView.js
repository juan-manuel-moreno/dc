templates.loadItemsView = "app/views/LoadItemsView.html";

window.LoadItemsView = Backbone.View.extend({

    title: "Cargando...",

    initialize: function(options) {

        this.render();
        this.view = this.$el;

        var self = this;

        this.onLoadItemsResult = function(result){
            self.loadItemsResult(result);
        };
        
        this.onLoadItemsError = function(error){
            self.loadItemsError(error);
        };

        //delay long enough for transition to complete
        setTimeout(function(){ModelManager.getAll( options.type , self.onLoadItemsResult, self.onLoadItemsError );}, 401 );
    },

    events:{
    },

    render:function (eventName) {
        this.$el.html(templates.loadItemsView);

        this.$el.css("height", "100%");
        return this;
    },

    loadItemsResult: function(result) {
        console.log(result);

        try {
            var jsonResult = JSON.parse(result);
            var view = new ListView({ model:jsonResult });
            //window.viewNavigator.pushView( view );
            //window.viewNavigator.replaceView( view );
            window.ViewNavigatorUtil.replaceView( view );
        }
        catch(e){
            alert(e.toString());
        }
    },

    loadItemsError: function(error) {
        console.log(error);

        //wait for transition to finish, then cleanup once removed from view
        setTimeout(function(){

            var view = new ListView({ model:{} });
            //window.viewNavigator.pushView( view );
            window.ViewNavigatorUtil.replaceView( view );
        }, 550 );
    }



});