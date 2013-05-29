define([
    // Application.
    "app",

    // Modules.
    "modules/initializer"
],

function(app, Initializer) {

    console.log("laoding router");
    // Defining the application router, you can attach sub routers here.
    var Router = Backbone.Router.extend({
        routes: {
            "": "index"
        },

        index: function() {
            console.log("initializing index");
            initialize();
        }

    });

    /* create init fxn that can only run once per load */
    var init = function() {
        new Initializer();
    };
    var initialize = _.once( init );

    return Router;

});
