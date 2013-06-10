define([
    "app",
    // Modules
    "modules/layout-main",
    "backbone"
],

function( app, MainLayout) {

    return Backbone.Model.extend({
        
        initialize: function() {
            console.log("initializing");
            this.insertLayout();
        },

        insertLayout: function() {
            app.layout = new MainLayout();
            app.layout.render();
        }

    });

});
