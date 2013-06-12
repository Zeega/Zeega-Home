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

        onChangeBackgroundImage: function( event ) {
            
            var fileInput = event.target,
                imageData,
                _this = this;

            imageData = new FormData();
            imageData.append( "file", fileInput.files[0] );

            var updateProgress = function( e ){
                var w = e.loaded * 141 / e.total;
                _this.$('.upload-progress').clearQueue().animate ({ "width": w + "px"}, 1000);
                if(  w == 141 ) {
                    _this.$('.upload-progress').clearQueue().animate ({ "width": "283px"}, 10000);
                }

            };


            $.ajax({
                url: app.metadata.mediaServer + "image",
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
                    
                    this.model.save({
                        background_image_url: data.fullsize_url
                    });
                    this.$(".cover").css("background-image", data.fullsize_url);
                }.bind(this)
            });



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
