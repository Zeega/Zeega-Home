define([
    "app",
    "backbone"
],

function( app ) {


    SidebarView = Backbone.View.extend({

        template: "sidebar",
        className: "sidebar",
        serialize: function() {
            return {
                    path: "http:" + app.metadata.hostname + app.metadata.directory
                };
        }

    });

    // Required, return the module for AMD compliance
    return SidebarView;

});
