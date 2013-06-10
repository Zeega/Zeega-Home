define([
    "app",
    "modules/zeega",
    "backbone"
],

function( app, Zeega ) {


    FeedView = Backbone.View.extend({

        template: "feed",
        className: "ZEEGA-feed",

        initialize: function(){

            
            
            this.collection.on( "add", function( model, b, c){
               
                var zeegaView = new Zeega.View({ model: model }) ;
                this.$el.append( zeegaView.render().view.el);
            }, this );
            
        },

        afterRender:function(){
            this.collection.fetch();
            var onScroll = $.proxy( function(e){ this.onScroll(e); }, this );
            $(window).scroll( onScroll );
        },

        onScroll: function(e){

            var a = $(window).scrollTop() + $(window).innerHeight();
            var b = $(".content")[0].scrollHeight;


            if( b !== 0 && a >= b && this.collection.more ){
                
                this.collection.more = false;
                this.collection.page ++;
                this.collection.fetch();
            }
        }


    });

    return FeedView;

});
