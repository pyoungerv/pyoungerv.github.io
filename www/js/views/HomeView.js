
// dependencies
define([], function () {

    //view
    var View = Parse.View.extend({

        //attributes of div element
        attributes: {
            "id": "homeview",
            "data-role": "page"
        },

        //templates
        viewTpl: Parse._.template($("#tpl-home").html()),
        tileTemplate: Parse._.template($("#tpl-tile").html()),

        //events
        events: {
            //"click #startBtn": "testParse",
        },

        //auto render
        initialize: function () { this.render(); },

        //render
        render: function () {
            var self = this;

            //home-template
            self.$el.html(self.viewTpl());
            var $list = self.$el.find('ul');

            //load tiles
            //for (var i = 0; i < 10; i++) {
            self.collection.each(function (post) {

                //create tile view
                var $itemview = $(self.tileTemplate({
                    d: {
                        leftimage: post.get('tile_image'),
                        leftimagecss: post.get('tile_image_css'),
                        supertitle: post.get('tile_supertitle'),
                        headline: post.get('tile_headline'),
                        text: post.get('tile_text'),
                    }
                }));

                //set click
                $itemview.click(function () {
                    window.app.tileClick( $itemview, post );
                });

                //append
                $list.append($itemview);
            })
            //}
            return self;
        }

    });

    //return the view
    return View;

});

