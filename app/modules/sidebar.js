define([
    "app",
    "backbone"
],

function( app ) {


    SidebarView = Backbone.View.extend({

        template: "sidebar",
        className: "sidebar",
        serialize: function() {
            return _.extend({
                    path: "http:" + metadata.hostname + metadata.directory
                },
                this.model.toJSON()
            );
        }

    });

    // Required, return the module for AMD compliance
    return SidebarView;

});
