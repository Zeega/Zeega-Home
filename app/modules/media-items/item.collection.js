define([
    "app",
    "modules/media-items/item.model"
],

function( app, ItemModel ) {

    return Backbone.Collection.extend({

        model: ItemModel,

        parse: function( res ) {
            return res.items;
        }

    });
});