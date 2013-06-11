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
        },

        events: {
            "click .edit-bio": "editBio",
            "click .save-bio": "saveBio",

            "keydown .display-name": "onKeydown",
            "keydown .bio": "onKeydown",

            "change input.profile-image": "onChangeProfileImage",
            "change input.background-image": "onChangeBackgroundImage"
        },

        onKeydown: function( e ) {
            if ( e.which == 13 ) {
                this.$(".display-name, .bio").blur();

                return false;
            }
        },

        editBio: function() {
            console.log(" edit bio")
            this.$(".display-name, .bio")
                .addClass("editing")
                .prop("contenteditable", "true");
            this.$(".profile-image-inputs").slideDown();

            this.$(".edit-bio").hide();
            this.$(".save-bio").show();

            return false;
        },

        onChangeBackgroundImage: function() {
            console.log('bg image updated')
        },

        onChangeProfileImage: function() {
            console.log('prof img updated')
        },

        saveBio: function() {
            this.$(".display-name, .bio")
                .removeClass("editing")
                .prop("contenteditable", "false");
            this.$(".profile-image-inputs").slideUp();

            this.$(".save-bio").hide();
            this.$(".edit-bio").show();

            this.model.save({
                "display-name": this.$(".display-name").text(),
                bio: this.$(".bio").text()
            })

            return false;
        }

    });

    return Cover;


});
