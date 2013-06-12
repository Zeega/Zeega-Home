define([
    "app",
    "backbone"
],

function( app ) {


    return Backbone.Layout.extend({

        template: "zeega-viewer",
        className: "zeega-viewer",
        
        events:{
            "click":"onClick",
            "keypress": "onKeypress"
        },

        initialize: function(){
            $(window).keydown($.proxy(function( e ){this.onKeydown( e );}, this) );
        },

        onClick: function() {

            this.$el.remove();
            $(window).unbind("keypress");
        },

        onKeydown: function(e){
            if (e.keyCode == 27){
                this.onClick();
            }
        },
        
        serialize: function() {
            return {
                path: "http:" + app.metadata.hostname + app.metadata.directory + this.model.id
            };
        }
    });


});
