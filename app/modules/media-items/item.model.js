define([
    "app"
],

function( app ) {

    return Backbone.Model.extend({

        view: null,

        defaults: {
            _status: "waiting",
            _visible: false
        }

    });
});