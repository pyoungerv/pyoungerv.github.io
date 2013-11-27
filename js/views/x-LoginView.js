/// <reference path="libs/parse-1.2.8.js" />
/// <reference path="libs/jquerymobile.js" />
//
// Login View
//
// dependencies
define(["parse", "jquerymobile"], function (parse, jqm) {

    //login view
    var LoginView = Parse.View.extend({

        attributes: {
            "id": "loginview",
            "data-role":"page",
            "data-title":"Log In"
        },

        events: {
            "submit form.login-form": "logIn"
        },

        initialize: function () {
        },

        render: function () {
            this.$el.html(Parse._.template($("#login-template").html()));
            this.$el.on("pagehide", function (event, ui) {
                //remove page on hide
                console.log('page removed: ' + $(this).data('title'));
                $(this).remove();
            });
            return this;
        },

        logIn: function (e) {
            //log in
            var email = this.$("#login-email").val();
            var password = this.$("#login-password").val();

            //nav tester
            window.app.router.tester();

            return false;
        },

    });

    //return the view
    return LoginView;

});

