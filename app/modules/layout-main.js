 define([
    "app",
    "modules/sidebar",
    "modules/feed",
    "modules/cover-home",
    "modules/cover-profile",
    "modules/footer",
    "modules/zeega-projects.collection",
    "backbone"
],

function( app, SidebarView, FeedView, CoverHome, CoverProfile, FooterView, ZeegaCollection ) {

    
    return Backbone.Layout.extend({

        el: "#main",
        template: "layout-main",

        beforeRender: function(){
            
            zeegas = new ZeegaCollection( app.metadata );
            
            if( _.isUndefined( window.profileData )){
                this.insertView( ".cover-wrapper", new CoverHome() );
            } else {
                this.insertView( ".cover-wrapper", new CoverProfile() );
            }
            
            this.insertView( ".content", new FeedView({ collection: zeegas }) );
            this.insertView( ".content", new SidebarView() );
            this.insertView( ".content", new FooterView() );
        }
    });

});
