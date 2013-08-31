define([
    "app",
    "modules/zeega-viewer",
    "backbone"
],

function( app, ZeegaViewer ) {

    return Backbone.Layout.extend({

        tagName: "article",
        template: "zeega-card",
        className: "zeega-card",

        
        serialize: function() {
            return _.extend({
                    path: app.getWebRoot(),
                    twitterShare: this.getTwitterShareLink(),
                    facebookShare: this.getFacebookShareLink(),
                    tumblrShare: this.getTumblrShareLink()
                },
                this.model.toJSON()
            );
        },

        events:{
            "click .cover-image": "onPlay",
            "click .delete-zeega": "deleteZeega"
        },

        onPlay: function( e ) {
            var zeegaViewer = new ZeegaViewer({ model: this.model });

            $("body").append(zeegaViewer.render().view.el);
            //window.history.pushState("", this.model.get("title"), "/" + app.metadata.directory + this.model.id );
            return false;

        },

        getTwitterShareLink: function() {
            return "https://twitter.com/intent/tweet?original_referer=" + encodeURIComponent( app.getWebRoot() ) + this.model.id +
                "&text=" + encodeURIComponent( this.model.get("title")  + " made w/ @zeega") +
                "&url=" + encodeURIComponent( app.getWebRoot() ) + this.model.id;
        },

        getFacebookShareLink: function() {
            return "http://www.facebook.com/sharer.php?u=" + encodeURIComponent( app.getWebRoot() ) + this.model.id;
        },

        getTumblrShareLink: function() {
            var html = "<p>" + this.model.get("title") + "</p>" +
                "<p><a href='" + app.getWebRoot() + this.model.id + "'>" +
                "<strong>►&nbsp;Play&nbsp;Zeega&nbsp;►</strong></a>" +
                "</p><p>by&nbsp;<a href='" + app.getWebRoot() + "profile/" + this.model.id + "'>" + this.model.get("authors") + "</a></p>";

            return "http://www.tumblr.com/share/photo?source=" + encodeURIComponent( this.model.get("cover_image") ) +
                "&caption=" + encodeURIComponent( html ) +
                "&click_thru="+ encodeURIComponent( app.getWebRoot() ) + this.model.id;
        },

        deleteZeega: function() {
            if (confirm("Delete your Zeega?")) {
                app.emit("delete-zeega");
                this.$el.slideUp(function() {
                    this.remove();
                    this.model.destroy();
                }.bind(this));
            }

            return false;
        }
    });

});
