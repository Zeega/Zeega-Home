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
                    "title": "The Making Of... Journeys",
                    "description": "",
                    "tags": "journeys",
                    "format": "small",
                    "order": 1
                },

                
                {
                    "id": 2,
                    "title": "The Making Of... The City",
                    "description": "",
                    "tags": "city",
                    "format": "small",
                    "order": 2
                },

                {
                    "id": 3,
                    "title": "The Making Of... Poetry",
                    "description": "",
                    "tags": "poetry",
                    "format": "small",
                    "order": 3
                },
                {
                    "id": 4,
                    "title": "The Making Of... Rhythm",
                    "description": "",
                    "tags": "rhythm",
                    "format": "large",
                    "order": 4
                },

                {
                    "id": 5,
                    "title": "The Making Of... The Pizza Wars",
                    "description": "",
                    "tags": "pizza",
                    "format": "small",
                    "order": 5
                }
                
                  {
                    "id": 6,
                    "title": "The Making Of... Cats",
                    "description": "",
                    "tags": "cats",
                    "format": "small",
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
