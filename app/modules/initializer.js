define([
    "app",
    "backbone",
    // Modules
    "modules/layout-main"

 
],

function( app, Backbone, MainLayout) {

    return Backbone.Model.extend({
        
        initialize: function() {
            this.insertLayout();
        },

        insertLayout: function() {
            app.layout = new MainLayout();
            app.layout.render();
        }

    });

});
