templates.list = "app/views/ListView.html";

window.ListView = Backbone.View.extend({

    destructionPolicy:'never',
    title: "List",
    backLabel: "Volver",
    
    initialize: function(options) {

        this.model = options.model;

        this.title = this.model.labelPlural;
        
        this.render();
        this.view = this.$el;
    },  
    
    events:{
        "click li":"listItemClick"
    },
    
    render:function (eventName) {
        var template = _.template(templates.list);
        this.$el.css("background", "white");
        this.$el.html(template( {labelPlural:this.model.labelPlural, items:this.model.items} ));        
        var $list = this.$el.find("#list");

        _.each(this.model.items, function (item) {
            $list.append(new ListItemView({model:item}).render().el);
        }, this);
        
        return this;
    },
    
    listItemClick: function( event ) {
        //console.log(event);
        
        this.$el.find( "li" ).removeClass( "listSelected" );
        var target = $( event.target );
        while (target.get(0).nodeName.toUpperCase() != "LI") {
            target=target.parent();
        }
        
        target.addClass( "listSelected" );
        var id = target.attr( "id" );
        var item = ModelManager.getById( id, this.model.items );
        //console.log( poi );
        
        var itemView = new ItemView({model:item, labelSingular:this.model.labelSingular});
        window.ViewNavigatorUtil.pushView( itemView );
        
    }
});