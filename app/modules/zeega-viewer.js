define([
    "app",
    "backbone"
],

function( app ) {


    

    ZeegaViewer = Backbone.Layout.extend({

        template: "zeega-viewer",
        className: "zeega-viewer",
        events:{
            "click":"onClick"
        },
        onClick: function() {
            this.$el.remove();
        },
        
        serialize: function() {
            return {
                path: "http:" + app.metadata.hostname + app.metadata.directory + this.model.id
            };
        }    });


    // Required, return the module for AMD compliance
    return ZeegaViewer;

});
