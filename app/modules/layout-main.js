 define([
    "app",
    "modules/theme",
    "backbone"
],

function( app, Theme ) {

    var MainCollection = Backbone.Collection.extend();
    



    var MainLayout = Backbone.Layout.extend({

        el: "#main",
        template: "layout-main",

        initialize: function() {
            
            var collectionData;
            
            this.themes = new Theme.Collection([
                {
                    "id": 1,
                    "title": "#Fresh",
                    "description": "The latest to emerge from the Zeegaverse.",
                    "tags": "fresh",
                    "format": "small",
                    "order": 1
                },

                {
                    "id": 2,
                    "title": "#Featured",
                    "description": "Recent Zeegas that are blowing our minds.",
                    "tags": "featured",
                    "format": "large",
                    "order": 2
                },
                {
                    "id": 3,
                    "title": "#Personal",
                    "description": "Personal stories that speak to us all.",
                    "tags": "personal",
                    "format": "small",
                    "order": 3
                },

                {
                    "id": 4,
                    "title": "#World",
                    "description": "Zeegas about what’s goin’ on in this world of ours.",
                    "tags": "world",
                    "format": "large",
                    "order": 4
                },
                {
                    "id": 5,
                    "title": "#Music",
                    "description": "Zeegas that make us wanna dance, showcase new tunes/upcoming albums, or explore specific genres/individual works.",
                    "tags": "audiogif",
                    "format": "small",
                    "order": 5
                },

                {
                    "id": 6,
                    "title": "#TheClassics",
                    "description": "The heavy hitters. The big kahunas. A selection of the most awesome Zeegas of all time. Oh baby!",
                    "tags": "theclassics",
                    "format": "large",
                    "order": 6
                }
            ]);
            
        },

        beforeRender: function() {

            var _this = this;
            
            _this.themes.each(function( theme ) {
                if( theme.get("format") == "large"){
                    _this.insertView( "#content", new Theme.View.Large({ model: theme }) );
                } else {
                    _this.insertView( "#content", new Theme.View.Mini({ model: theme }) );
                }
            });
           
        },

        afterRender: function() {

             
        },

        lazyResize: function() {
            app.trigger("window-resize");
        }
    });

    return MainLayout;

});
