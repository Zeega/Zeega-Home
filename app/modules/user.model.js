define([
    "app"
],

function( app ) {

    return Backbone.Model.extend({

        url: function() {
            var https = app.metadata.api.replace("https","http").replace("http","https");

            return https + "users/" + this.id;
        }

    });

});