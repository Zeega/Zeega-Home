define([
    "app",
    "backbone"
],

function( app ) {


    return Backbone.Layout.extend({

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
        }
    });


});
