
// dependencies
define([], function () {

    //view
    var View = Parse.View.extend({

        //attributes of div element
        attributes: {
            "id": "menupage",
            "data-role": "page"
        },

        //templates
        tileListPageTpl: Parse._.template($("#tpl-tilelist-page").html()),
        tileTemplate: Parse._.template($("#tpl-tile").html()),

        //events
        events: {},

        //auto render
        initialize: function () { this.render(); },

        //render
        render: function () {
            var self = this;

            //page template
            self.$el.html(self.tileListPageTpl({ page_title: 'Menu' }));
            var $list = self.$el.find('ul');

            //load tiles
            self.collection.each(function (post) {

                //create tile view
                var $itemview = $(self.tileTemplate({
                    d: {
                        leftimage: post.get('tile_image'),
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

            //return self
            return self;
        }

    });

    //return the view
    return View;

});

