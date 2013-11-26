
// dependencies
define([], function () {

    //lib
    var lib = {};

    //event list page view
    lib.EventListPageView = Parse.View.extend({

        //attributes of div element
        attributes: {
            "data-role": "page"
        },

        //auto render
        initialize: function () { this.render(); },

        //render
        render: function () {
            var self = this;

            //page-template
            self.$el.html(window.app.getTpl('tpl-standard-page')({
                d: {
                    page_title: 'Events'
                }
            }));
            var $content = self.$el.find('.page-content');

            //load header???


            //load events
            var events = window.app.data.events;
            events.each(function (event) {

                //create view
                var $itemview = $(app.getTpl('tpl-event-listitem')({
                    d: {
                        image_left: event.get('image'),
                        name: event.get('name'),
                        address: event.get('address'),
                        date: event.get('date'),
                        time: event.get('time'),
                    }
                }));

                //set click
                $itemview.click(function () {
                    window.app.tileClick( $itemview, event );
                });

                //append
                $content.append($itemview);
            })
            //}
            return self;
        }

    });

    //return the view
    return lib;

});

