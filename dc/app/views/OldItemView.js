templates.itemView = "app/views/ItemView.html";

window.ItemView = Backbone.View.extend({

    template:undefined,
    backLabel: "Volver",
    title:"",
    
    initialize: function(options) {

//        this.model = options.model;
        this.model = options;

        this.title = options.labelSingular;

        this.template = _.template( templates.itemView ),
        this.render();
        this.view = this.$el;
    },  
    
    events:{
    },
    
    render:function (eventName) {
        var model = this.model;
        this.$el.html( this.template( model ));
        this.$el.css("background", "white");

        return this;
    }
});