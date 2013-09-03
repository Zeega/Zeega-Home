define([
    "app",
    "modules/media-items/item.collection"
],

function( app, MediaCollection ) {

    return Backbone.View.extend({
        template: "cover-home",
        className: "home-cover",

        mediaCollection: null,

        initialize: function() {
            if ( window.mediaJSON ) {
                this.mediaCollection = new MediaCollection( $.parseJSON( window.mediaJSON ).items );
            }
        },

        afterRender: function() {
            if ( this.mediaCollection ) {
                this.mediaCollection.each(function( item ) {
                    this.$(".media-grid").append( item.view.el );
                    item.view.preloadRender();
                });
            }
        }

    });
});