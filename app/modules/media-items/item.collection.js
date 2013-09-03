define([
    "app",
    "modules/media-items/item.model"
],

function( app, ItemModel ) {

    return Backbone.Collection.extend({

        model: ItemModel,

        getRandomUnseen: function() {
            var mediaItems = this.filter(function( item ) {
                return item.get("_status") == "waiting";
            });

            return mediaItems.length ? mediaItems[ Math.floor( Math.random() * mediaItems.length )] : false;
        },

        getRandom: function() {
            var unseen, notVisible;

            unseen = this.getRandomUnseen();
            notVisible = this.filter(function( item ) {
                return item.get("_visible") === false;
            });

            return unseen ? unseen :
                    notVisible.length ? notVisible[ Math.floor( Math.random() * notVisible.length )] :
                    this.at( Math.floor( Math.random() * this.length ));
        },

        parse: function( res ) {
            return res.items;
        }

    });
});