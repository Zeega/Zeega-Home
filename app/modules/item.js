define([
    "app",
    "backbone"
],

function( app ) {


    Item = {};
    
    Item.Model = Backbone.Model.extend({

    });

    Item.Collection = Backbone.Collection.extend({
        model: Item.Model,

        initialize: function( options ){
            _.extend( this, options );

        },

        url: function() {
            
            var url = app.metadata.api + "projects/search?tags=" + this.tags;
            return url;
        },

        parse: function( response ) {
            return response.projects;
        }

    });

    Item.View = {};

    Item.View.Large = Backbone.View.extend({

        template: "item",
        className: "collection-item standard",
        tagName: "a",

        serialize: function() {
            return _.extend({
                "path": "http:" + app.metadata.hostname + app.metadata.directory
            },this.model.toJSON());
        },
        
        initialize: function() {
   
        },

        beforeRender: function() {
            this.$el.css({"background-image": "url('" + this.model.get("cover_image") + "')"});
            this.$el.attr({"href": "http:" + app.metadata.hostname + app.metadata.directory + this.model.get("id")});
        },

        onReset: function() {

        }
    });

    Item.View.Mini = Item.View.Large.extend({

        template: "item-mini",
        className: "collection-item mini"

    });


    // Required, return the module for AMD compliance
    return Item;

});
