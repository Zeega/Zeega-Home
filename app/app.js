define([
    "common/_app.common",
    "backbone.layoutmanager"
], function( _App ) {

    var app = {};

    // Localize or create a new JavaScript Template object.
    var JST = window.JST = window.JST || {};

    // Curry the |set| method with a { silent: true } version
    // to avoid repetitious boilerplate code throughout project
    Backbone.Model.prototype.put = function() {
        var args = [].slice.call( arguments ).concat([ { silent: true } ]);
        return this.set.apply( this, args );
    };
        
    Backbone.LayoutManager.configure({
        manage: true,
        prefix: "app/templates/",

        fetch: function(path) {
            path = path + ".html";

            if (JST[path]) {
                return JST[path];
            }

            var done = this.async();

            $.get( app.getWebRoot() + path, function(contents) {
                done(JST[path] = _.template(contents));
            });
        }
    });

    return _.extend(app, _App, {
        Backbone: Backbone,
        $: jQuery,
    }, Backbone.Events);

});
