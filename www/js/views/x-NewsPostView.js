//
// dependencies
define(["parse", "jquerymobile"], function (parse, jqm) {

    //login view
    var View = Parse.View.extend({

        className: "post",

        attributes: {
            "id": "newspostview",
            "data-role":"page",
            "data-title":"News"
        },

        viewTpl: Parse._.template($("#newspost-template").html()),

        events: {
            //"click #startBtn": "testParse",
            'swiperight': 'exit',
        },

        initialize: function () {
        },

        render: function () {
            var self = this;

            //view template
            self.$el.html(self.viewTpl({
                title: 'News',
                imageurl: self.model.get('imageurl'),
                text: self.model.get('text'),
            }));
            return self;

        },

        exit: function () {
            //exit page
            window.app.router.exitPage();
        }

    });

    //return the view
    return View;

});

