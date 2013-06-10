define([
    "app",
    "backbone"
],

function( app ) {


    Zeega = {};
    

    Zeega.Collection = Backbone.Collection.extend({

        page: 1,
        tags: null,
        user: null,

        initialize: function( options ){
            _.extend( this, options );
        },
        
        url: function() {
            var url =  app.metadata.api + "projects/search?limit=20&page=" + this.page;
 
            if( this.tags !== "" ){
                url += "&tags=" + this.tags;
            }

            if( this.profileId !== "" ){
                url += "&user=" + this.profileId;
            }

            return url;
        },

        parse: function( response ) {
            if( response.projects.length == 20 ){
                this.more = true;
            } else {
                this.more = false;
            }
            return response.projects;
        }

    });

    Zeega.View = Backbone.Layout.extend({

        template: "zeega",
        className: "zeega-card",
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
