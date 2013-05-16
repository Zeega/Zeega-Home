define([
    "app",
    // Modules
    "modules/layout-main",
    "backbone"
],

function( app, MainLayout) {

    return Backbone.Model.extend({
        
        initialize: function() {
            this.addHeaderUX();
            this.insertLayout();
        },

        insertLayout: function() {
            app.layout = new MainLayout();
            app.layout.render();
        },

        addHeaderUX: function() {
            $(".drop-down").click( function(){
                var that = $(this);

                if( $(this).hasClass("open") ) {
                    $(this).removeClass("open");
                } else {
                    $(this).addClass("open");
                    $("body").bind("click",function(){
                        that.removeClass("open");
                        $(this).unbind();
                    });
                    return false;
                }
            });
        }

    });

});
