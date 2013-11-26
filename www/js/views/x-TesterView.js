/// <reference path="libs/parse-1.2.8.js" />
/// <reference path="libs/jquerymobile.js" />
//
// Login View
//
// dependencies
define(["parse", "jquerymobile"], function (parse, jqm) {

    //login view
    var View = Parse.View.extend({

        attributes: {
            "id": "testerview",
            "data-role":"page",
            "data-title":"Tester"
        },

        events: {
            "click #testParseBtn": "testParse",
            "click #testContactsBtn": "testContacts",
            "click #startBtn": "start",
        },

        initialize: function () {
        },

        render: function () {
            this.$el.html(Parse._.template($("#tester-template").html()));
            return this;
        },

        start: function (e) {

            //start watching for hashchange events
            Parse.history.start();

            //
            window.app.router.navigate('#home', {
                trigger: true
            });

        },

        testParse: function (e) {

            //Parse demo
            console.log('testing parse...');
            var TestObject = Parse.Object.extend("TestObject");
            var testObject = new TestObject();
            testObject.save({
                foo: "P",
                py: { h: 'ynot', o: 'bcuz'}
            },
                {
                success: function (object) {
                    window.app.popup('parse obj worked');
                },
                error: function (model, error) {
                    window.app.popup('parse obj failed:' + error.message);
                }
            });

            return false;
        },

        testContacts: function () {

            // find all contacts 
            var options = new ContactFindOptions();
            options.filter = "Paul";
            options.multiple = true;
            var fields = ["name"];
            navigator.contacts.find(fields, function (contacts) {
                for (var i = 0; i < contacts.length; i++) {
                    alert("Display Name = " + contacts[i].displayName);
                }
            }, function onError(contactError) {
                alert('onError!' + contactError);
            },
            options);

        },

    });

    //return the view
    return View;

});

