define([
    "app",
    "backbone"
],

function( app ) {


    FooterView = Backbone.View.extend({

        template: "footer",
        className: "footer",
        serialize: function() {
            return  _.extend( app.metadata,
                {
                    path: "http:" + app.metadata.hostname + app.metadata.directory
                }
            );
        }

    });

    // Required, return the module for AMD compliance
    return FooterView;

});
