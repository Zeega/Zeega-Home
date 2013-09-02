define([
    "app",
    "modules/media-items/item.model"
],

function( app, ItemModel ) {

    return Backbone.Collection.extend({

        model: ItemModel,

        initialize: function() {
            console.log("init media collection", this)
        },

        parse: function( res ) {
            return res.items;
        }

    });
});