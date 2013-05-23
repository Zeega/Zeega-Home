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
            // var lazyResize = _.debounce(function() {
            //     this.lazyResize();
            // }.bind( this ), 300);

            // $( window ).resize( lazyResize );
            // this.themes = new MainCollection({ id: this.id });
            // this.themes.on("reset", this.onReset, this );
            // 92990

            collectionData = jQuery.parseJSON( window.collections );
            this.themes = new Theme.Collection(collectionData.items);
            

            this.themes.parseTags();
            
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
