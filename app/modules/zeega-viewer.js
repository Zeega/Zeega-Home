define([
    "app",
    "backbone"
],

function( app ) {


    return Backbone.Layout.extend({

        template: "zeega-viewer",
        className: "zeega-viewer",
        
        events:{
            "click":"close",
            "keypress": "onKeypress"
        },

        initialize: function(){
            $(window).keydown($.proxy(function( e ){this.onKeydown( e );}, this) );
        },

        close: function() {
            window.history.pushState("", "Zeega", app.metadata.root );
            this.$el.remove();
            $(window).unbind("keypress");
        },

        onKeydown: function(e){
            if (e.keyCode == 27){
                this.close();
            }
        },
        
        serialize: function() {
            return {
                path: "http:" + app.metadata.hostname + app.metadata.directory + this.model.id
            };
        }
    });


});
