define([
    "app",
    "modules/media-items/item.collection",
    "modules/media-items/item.view"
],

function( app, MediaCollection, ItemView ) {

    return Backbone.View.extend({
        template: "cover-home",
        className: "home-cover",

        mediaCollection: null,
        itemViews: [],

        initialize: function() {
            if ( window.mediaJSON ) {
                var imageItems = _.filter( $.parseJSON( window.mediaJSON ).items, function( item ) {
                    return item.media_type == "Image";
                });

                this.mediaCollection = new MediaCollection( imageItems );

                for ( var i = 0; i < Math.min( this.mediaCollection.length || 10 ); i++ ) {
                    this.itemViews.push( new ItemView({ collection: this.mediaCollection }));
                }
            }
        },

        afterRender: function() {
            if ( this.mediaCollection ) {
                _.each( this.itemViews, function( itemView, i ) {
                    var item = this.mediaCollection.at( i );

                    item.set("_visible", true );
                    this.$(".media-grid").append( itemView.el );
                    itemView.model = item;
                    itemView.preloadRender();
                }, this );
            }
        }

    });
});