define([
    "app",
    "modules/media-items/item.view"
],

function( app, ItemView ) {

    return Backbone.Model.extend({

        view: null,

        initialize: function() {
            this.view = new ItemView({ model: this });
        }

    });
});