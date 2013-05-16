define([
    "app",
    "modules/item",
    "backbone"
],

function( app, Item ) {


    Theme = {};
    
    Theme.Model = Backbone.Model.extend({

    });

    Theme.Collection = Backbone.Collection.extend({
        model: Theme.Model,
        comparator: function(theme){
            return theme.get("order");
        }


    });

    Theme.View ={};

    Theme.View.Large = Backbone.View.extend({

        template: "theme",
        className: "theme",
        serialize: function() {
            return this.model.toJSON();
        },
        initialize: function() {

            this.items = new Item.Collection({ id: this.model.id, tags: this.model.get("tags") });
            this.items.on("reset", this.onReset, this );

        },

        beforeRender: function() {
            this.items.fetch();
        },

        onReset: function() {
            var itemView,
                count = 0;
                _this = this;


            this.items.each(function( item ){
                
                if( count < 3 ){
                    itemView = new Item.View.Large( { model : item });
                    itemView.render();
                    _this.$(".items").append( itemView.$el );
                }
                count++;
            });
        }
    });

    Theme.View.Mini = Theme.View.Large.extend({
        template: "theme",
        className: "theme mini",
        onReset: function() {
            var itemView,
                count = 0;
                _this = this;


            this.items.each(function( item ){
                if( count < 6 ){
                    itemView = new Item.View.Mini( { model : item });
                    itemView.render();
                    _this.$(".items").append( itemView.$el );
                }
                count++;
            });
        }
    });

    // Required, return the module for AMD compliance
    return Theme;

});
