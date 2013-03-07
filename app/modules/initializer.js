define([
    "app",
    // Modules
    "modules/layout-main",
    "backbone"
],

function( app, MainLayout) {

    return Backbone.Model.extend({
        
        initialize: function() {
            var meta = $("meta[name=zeega]");
            app.root = meta.data("root");
            this.insertLayout();
        },

        insertLayout: function() {
            app.layout = new MainLayout();
            app.layout.render();
        }

    });

});
