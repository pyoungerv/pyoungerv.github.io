
// dependencies
define([], function () {

    //
    var View = Parse.View.extend({

        //attributes of div element
        attributes: {
            "id": "videoview",
            "data-role": "page"
        },

        //templates
        viewTpl: Parse._.template($("#tpl-page-video").html()),

        //events
        events: {},

        //auto render
        initialize: function () { this.render(); },

        //render
        render: function () {
            var self = this;

            //render template
            self.$el.html(self.viewTpl({
                url: self.options.url,
            }));

            //return self
            return self;
        }

    });

    //return the view
    return View;

});

