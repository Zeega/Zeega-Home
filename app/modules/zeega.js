define([
    "app",
    "modules/zeega-viewer",
    "backbone"
],

function( app, ZeegaViewer ) {


    Zeega = {};
    

    Zeega.Collection = Backbone.Collection.extend({

        page: 1,
        tags: null,
        user: null,
        limit: 10,

        initialize: function( options ){
            _.extend( this, options );
        },
        
        url: function() {
            var url =  app.metadata.api + "projects/search?limit=" + this.limit + "&page=" + this.page;
 
            if( this.tags !== "" ){
                url += "&tags=" + this.tags;
            }

            if( this.profileId !== "" ){
                url += "&user=" + this.profileId;
            }

            return url;
        },

        parse: function( response ) {
            if( response.projects.length == this.limit ){
                this.more = true;
            } else {
                this.more = false;
                $(".footer").show();
            }
            return response.projects;
        }

    });

    Zeega.View = Backbone.Layout.extend({

        template: "zeega",
        className: "zeega-card",
        events:{
            "click":"onPlay"
        },
        onPlay: function( e ){
            if( e.target.className != "profile-link" && e.target.className != "profile-token"){
                console.log(e.target.className);
                var zeegaViewer = new ZeegaViewer({model: this.model});
                $("body").append(zeegaViewer.render().view.el);
                return false;
            }
        },
        serialize: function() {
            return _.extend({
                    path: "http:" + app.metadata.hostname + app.metadata.directory
                },
                this.model.toJSON()
            );
        }
    });


    // Required, return the module for AMD compliance
    return Zeega;

});
