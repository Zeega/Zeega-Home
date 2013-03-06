define([
    "app",
    "backbone"
],

function( app, Backbone ) {


    Item = {};
    
    Item.Model = Backbone.Model.extend({

    });

    Item.Collection = Backbone.Collection.extend({
        model: Item.Model,

        initialize: function( options ){
            console.log("ok");
            _.extend( this, options );

        },

        url: function() {
            
            var url = app.api + "items/" + this.id + "/items";
            return url;
        },

        parse: function( response ) {
            return response.items;
        }

    });

    Item.View = {};

    Item.View.Standard = Backbone.View.extend({

        template: "item",
        className: "item",
        tagName: "a",

        serialize: function() {
            return this.model.toJSON();
        },
        
        initialize: function() {
   
        },

        beforeRender: function() {
            this.$el.css({"background-image": "url('" + this.model.get("text").cover_image + "')"});
            this.$el.attr({"href": "http://zeega.com/" + this.model.get("id")});
        },

        onReset: function() {

        }
    });

    Item.View.Mini = Item.View.Standard.extend({

        template: "item-mini",
        className: "item-mini"

    });


    // Required, return the module for AMD compliance
    return Item;

});
