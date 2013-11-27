//
// dependencies
define(["parse",
    "views/BasePageView",
    'libs/text!views/Post_InviteView.html'
], function (parse,
    BasePageView,
    tplHmtl) {

    //load html
    var $tplHmtl = $(tplHmtl);
    
    //api
    var api = {
        
        //main view
        MainView: BasePageView.extend({

            attributes: {
                "id": "post_invite_main",
                "data-title":"Invite"
            },

            events: {
                'swiperight': 'exit',
                'click .button1': 'button1',
            },

            render: function () {
                var self = this;

                //render page
                var tpl = Parse._.template($tplHmtl.filter("#main").html())
                self.$el.html(tpl({
                    title: 'Invite',
                    imageurl: self.model.get('image'),
                    text: self.model.get('text'),
                }));

                //render footer
                var $footer = self.newFooter('See Listings');
                self.$el.append($footer);

                //return
                return self;
            },

            button1: function (event) {
                var self = this;

                //goto Listings
                var view = new api.ListingsView({
                    collection: self.model.get('events')
                });
                view.render();
                window.app.router.loadPage(view);

            },

        }),

        //listings view
        ListingsView: BasePageView.extend({

            attributes: {
                "id": "post_invite_listings",
                "data-title": "Listings"
            },

            events: {
            },

            render: function () {
                var self = this;

                //render page
                var tpl = Parse._.template($tplHmtl.filter("#listings").html())
                self.$el.html(tpl({
                    title: 'Listings',
                }));

                //render list
                var tiletpl = Parse._.template($('#tile-text-template').html());
                var $list = self.$el.find('.form-list');
                Parse._each(self.collection, function (event) {
                    //create tile
                    var $tile = $(tiletpl({
                        text: event.text,
                    }));
                    $list.append($tile);
                });

                //render footer
                var $footer = self.newFooter('Cancel', '');
                self.$el.append($footer);

                //return
                return self;
            },

            button1: function (event) {
                this.exit();
            },

        })

    };

    //return api
    return api;

});

