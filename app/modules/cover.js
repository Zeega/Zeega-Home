define([
    "app",
    "backbone"
],

function( app ) {

    var User = Backbone.Model.extend({

        url: function(){
            return app.metadata.dataApi + "users/" + this.id;
        }

    });

    var Cover = {};


    Cover.HomeView = Backbone.View.extend({
        
        template: "home-cover",
        className: "home-cover"

    });

    Cover.ProfileView = Backbone.View.extend({
        
        template: "profile-cover",
        className: "profile-cover",
        initialize: function() {
            this.model = new User( $.parseJSON(window.profileData) );
        },
        serialize: function() {
            return this.model.toJSON();
        }

    });

    return Cover;


});
