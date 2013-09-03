define([
    "app",
    "imagesLoaded"
],

function( app ) {

    return Backbone.View.extend({
        template: "media-item",
        tagName: "li",
        className: "media-item invisible",

        timer: null,
        TIME_MIN: 10000,
        TIME_MAX: 30000,

        serialize: function() {
            return _.extend({ root: app.getWebRoot() }, this.model.toJSON() );
        },

        preloadRender: function() {
            var $img = $("<img class='media-preload'>").attr("src", this.model.get("thumbnail_url"));

            this.model.set("_status", "loading");

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
        },

        preloadSwitch: function() {
            var $img = $("<img class='media-preload'>").attr("src", this.model.get("thumbnail_url"));

            this.model.set("_status", "loading");

            $img.imagesLoaded()
                .always(function() {
                    $img.remove();
                })
                .done(function() {
                    this.$el.addClass("invisible");
                    _.delay(function() {
                        this.onDone();
                    }.bind( this ), 2000 );
                }.bind( this ))
                .fail(function() {
                    this.onFail();
                }.bind( this ));

            $("body").append( $img );
        },

        onDone: function() {
            this.$el.css({
                backgroundImage: "url(" + this.model.get("thumbnail_url") +")",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }).removeClass("invisible");
            this.render();
            this.model.set("_status", "ready");

            this.setTimer();
        },

        onFail: function( el ) {
            this.remove();
            this.model.set("_status", "failed");
            this.model.collection.remove( this.model );
            this.goRandom();
        },

        setTimer: function() {
            this.timer = setTimeout(function() {
                this.goRandom();
            }.bind( this ), Math.random() * (this.TIME_MAX - this.TIME_MIN) + this.TIME_MIN );
        },

        goRandom: function() {
                var oldModel = this.model;

                this.model = this.collection.getRandom();
                this.model.set("_visible", true );
                if ( oldModel ) oldModel.set("_visible", false );
                this.preloadSwitch();
        }

    });
});