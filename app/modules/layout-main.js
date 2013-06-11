 define([
    "app",
    "modules/sidebar",
    "modules/feed",

    "modules/footer",
        "modules/zeega",
    "backbone"
],

function( app, SidebarView, FeedView, FooterView, Zeega ) {

    
    return Backbone.Layout.extend({

        el: "#main",
        template: "layout-main",

        beforeRender: function(){
            
            zeegas = new Zeega.Collection( app.metadata );
            this.insertView( ".sidebar-wrapper", new SidebarView() );
            this.insertView( ".content", new FeedView({ collection: zeegas }) );
            this.insertView( ".content", new FooterView() );
        }
    });

});
