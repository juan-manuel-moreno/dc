templates.homeView = "app/views/HomeView.html";

window.HomeView = Backbone.View.extend({

    title: "Home",
    destructionPolicy:'never',

    initialize: function(options) {
        this.render();
        this.view = this.$el;
    },  
    
    events:{
        "click .back1":"loadAttractions"
    },
    
    render:function (eventName) {
        var template = _.template(templates.homeView);
        var model = {isTablet:NativeUtil.isTablet()};
        this.$el.html(template(model));


        return this;
    },

    loadAttractions:function () {
    	var view = new LoadItemsView({type:ModelManager.type.attraction.code});
    	window.viewNavigator.pushView( view );
    }
});