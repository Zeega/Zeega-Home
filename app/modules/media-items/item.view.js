define([
    "app",
    "imagesLoaded"
],

function( app ) {

    return Backbone.View.extend({
        template: "media-item",
        tagName: "li",
        className: "media-item invisible",

        serialize: function() {
            return _.extend({ root: app.getWebRoot() }, this.model.toJSON() );
        },

        preloadRender: function() {

            if ( this.model.get("media_type") == "Image" ) {
                var $img = $("<img class='media-preload'>").attr("src", this.model.get("thumbnail_url"));

                $img.imagesLoaded()
                    .always(function() {
                        $img.remove();
                    })
                    .done(function() {
                        this.onDone();
                    }.bind( this ))
                    .fail(function() {
                        this.onFail();
                    }.bind( this ));

                $("body").append( $img );
            } else {
                this.remove();
            }
        },

        onDone: function() {
            this.$el.css({
                backgroundImage: "url(" + this.model.get("thumbnail_url") +")",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }).removeClass("invisible");
            this.render();
        },

        onFail: function( el ) {
            this.remove();
        }

    });
});