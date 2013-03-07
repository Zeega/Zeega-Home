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
        parseTags: function() {
            var tag, index, key, value;
            for(var i = 0; i < this.length; i++){
                for( var j = 0; j< this.at( i ).get("tags").length; j++){
                    tag = this.at( i ).get("tags")[ j ];
                    index = tag.indexOf("-");
                    if( index > -1 ){
                        key = tag.substr( 0, index );
                        value = tag.substr( index + 1 );
                        this.at(i).set(key, value);
                    }
                }
            }
            this.sort();
        },

        comparator: function(theme){
            return theme.get("order");
        }


    });

    Theme.View = Backbone.View.extend({

        template: "theme",
        className: "theme",
        serialize: function() {
            return this.model.toJSON();
        },
        initialize: function() {

            this.items = new Item.Collection({ id: this.model.id });
            this.items.on("reset", this.onReset, this );
            
            
        },

        beforeRender: function() {
            var boxShadow;
            
            this.items.fetch();
            if( !_.isUndefined( this.model.get("backgroundColor"))){
                boxShadow = "0px 0px 0px red";
                this.$el.css({
                    "background-color": this.model.get("backgroundColor"),
                    "box-shadow": boxShadow
                });

            }
        },

        onReset: function() {
            var itemView,
                mini = false;
                _this = this;

            if( !_.isUndefined( this.model.get("mini"))){
                mini = true;
            }

            this.items.each(function( item ){
                if( mini ){
                    itemView = new Item.View.Mini( { model : item });
                } else {
                    itemView = new Item.View.Standard( { model : item });
                }
                itemView.render();
                _this.$(".items").append( itemView.$el );
            });
        }
    });

    // Required, return the module for AMD compliance
    return Theme;

});
