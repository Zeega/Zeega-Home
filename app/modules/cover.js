define([
    "app",
    "backbone"
],

function( app ) {

    var User = Backbone.Model.extend({

        url: function(){
            return app.metadata.api + "users/" + this.id;
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

            "change input": "onChangeInput"
        },

        onKeydown: function( e ) {
            if ( e.which == 13 ) {
                this.$(".display-name, .bio").blur();

                return false;
            }
        },

        editBio: function() {
            this.$(".display-name, .bio")
                .addClass("editing")
                .prop("contenteditable", "true");
            this.$(".profile-image-inputs").slideDown();

            this.$(".edit-bio").hide();
            this.$(".save-bio").show();

            return false;
        },

        // onChangeBackgroundImage: function( event ) {
            
        //     this.uploadImage( event );


        // },

        // onChangeProfileImage: function() {
        //     console.log('prof img updated')
        // },

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
            });

            return false;
        },

        onChangeInput: function( event ) {
            var fileInput = event.target,
                imageData,
                sizes;

            imageData = new FormData();
            imageData.append( "file", fileInput.files[0] );

            var updateProgress = function( e ){
                

            };

            if ( $(event.target).hasClass("profile-image") ) {
                sizes ="4";
            } else {
                sizes = "7";
            }

            $.ajax({
                url: app.metadata.mediaServer + "image?sizes="+sizes,
                type: "POST",
                data: imageData,
                dataType: "json",
                processData: false,
                contentType: false,
                fileElementId: "imagefile",
                
                xhr: function() {  // custom xhr
                    myXhr = $.ajaxSettings.xhr();
                    if(myXhr.upload){ // check if upload property exists
                        myXhr.upload.addEventListener('progress', updateProgress, false); // for handling the progress of the upload
                    }
                    return myXhr;
                },
                
                success: function( data ) {
                    var attr = {};

                    if ( $(event.target).hasClass("profile-image") ) {
                        attr.thumb_url = data.image_url_4;
                        this.$(".profile-token-large").css("background-image", "url(" + data.image_url_4 + ")");
                    } else {
                        attr.background_image_url = data.fullsize_url;
                        this.$(".cover").css("background-image", "url(" + data.fullsize_url + ")");
                    }

                    this.model.save( attr );
                }.bind(this)
            });

        }

    });

    return Cover;


});
