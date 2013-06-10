 define([
    "app",
    "modules/sidebar",
    "modules/feed",
    "modules/zeega",
    "backbone"
],

function( app, SidebarView, FeedView, Zeega ) {

    var MainCollection = Backbone.Collection.extend();
    



    var MainLayout = Backbone.Layout.extend({

        el: "#main",
        template: "layout-main",

        beforeRender: function(){
            
            zeegas = new Zeega.Collection( app.metadata );
            this.insertView( ".sidebar-wrapper", new SidebarView() );
            this.insertView( ".content", new FeedView({ collection: zeegas }) );
        }
    });

    return MainLayout;

});
