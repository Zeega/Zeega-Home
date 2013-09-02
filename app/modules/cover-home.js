define([
    "app",
    "modules/media-items/item.collection"
],

function( app, MediaCollection ) {

    return Backbone.View.extend({
        template: "home-cover",
        className: "home-cover",

        mediaCollection: null,

        initialize: function() {
            if ( window.mediaJSON ) {
                this.mediaCollection = new MediaCollection( $.parseJSON( window.mediaJSON ).items )
            }
        }

    });
});