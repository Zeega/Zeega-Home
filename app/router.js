define([
    // Application.
    "app",

    // Modules.
    "modules/initializer"
],

function(app, Initializer) {

    // Defining the application router, you can attach sub routers here.
    var Router = Backbone.Router.extend({
        routes: {
            "": "index",
            "@:username": "profile",
            "tag/:tag": "tag"
        },

        index: function() {
            initialize();
        },

        profile: function( username ){
            console.log("profile ", username);
            initialize();
        },

        tag: function( username ){
            console.log("tag ", tag);
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
