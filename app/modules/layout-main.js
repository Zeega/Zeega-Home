 define([
    "app",

    "modules/navbar",
    "modules/theme",
    "backbone"
],

function( app, Navbar, Theme ) {

    var MainCollection = Backbone.Collection.extend({

        initialize: function( options ){
            _.extend( this, options );

        },

        url: function() {
            
            var url = app.api + "items/" + this.id + "/items?fields=media_geo_latitude,media_geo_longitude,media_creator_username,media_creator_realname,id,attribution_uri,thumbnail_url,uri,title,description,date_created,media_type,tags,layer_type,display_name,eidtable,published";
            return url;
        },

        parse: function( response ) {
            return response.items;
        }

    });
    



    var MainLayout = Backbone.Layout.extend({

        el: "#main",
        template: "layout-main",

        initialize: function() {
            
            var collectionData;
            // var lazyResize = _.debounce(function() {
            //     this.lazyResize();
            // }.bind( this ), 300);

            // $( window ).resize( lazyResize );
            // this.themes = new MainCollection({ id: this.id });
            // this.themes.on("reset", this.onReset, this );
            // 92990

            if ( window.collections ) {
                collectionData = jQuery.parseJSON( window.collections );
                this.themes = new Theme.Collection(collectionData.items);
                console.log(this.themes);
            } else {
                this.themes = new Theme.Collection([
                    {
                        "id": 92989,
                        "user_id": null,
                        "username": "",
                        "display_name": "James Burns",
                        "title": "Worst of Zeegas",
                        "description": "Poop",
                        "tags": [
                            "order-1","backgroundColor-rgba(0, 0, 255, 0.13)","mini-true"
                        ]
                    },
                    {
                        "id": 92569,
                        "user_id": null,
                        "username": "",
                        "display_name": "James Burns",
                        "title": "Best of Zeegas",
                        "description": "These Zeegas are my favorite :)",
                        "tags": [
                            "backgroundColor-rgba(255, 0, 0, 0.13)","order-0"
                        ]
                    }
                ]);
            }
            this.themes.parseTags();
            
            
        },

        beforeRender: function() {

            var _this = this;
            
            this.insertView( ".nav", new Navbar({ model: app }) );
            
            _this.themes.each(function( theme ) {
                _this.insertView( "#content", new Theme.View({ model: theme }) );
            });
           
        },

        afterRender: function() {

             
        },

        lazyResize: function() {
            // var height, width;

            // width = window.innerWidth - $(".left-column").width();
            // height = window.innerHeight - $(".project-navs").height();
            // console.log("lazy resize", this, width, height)
            app.trigger("window-resize");
        }
    });

    return MainLayout;

});
