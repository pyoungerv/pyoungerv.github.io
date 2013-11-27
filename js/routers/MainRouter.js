// Router
// =============

// Includes file dependencies
define(['jquery', 'parse',
    'views/LoginView',
    'views/TesterView',
    'views/HomeView',
    'views/NewsPostView',
    'views/Post_InviteView'],
    function ($, parse,
        LoginView,
        TesterView,
        HomeView,
        NewsPostView,
        PostInviteView) {

        // extend router
        var Router = Parse.Router.extend({

            // constructor
            initialize: function () {
                //router must be loaded after jqm is ready
                $.mobile.pageContainer.on('pagechange', function (event, ui) {
                    //check prev page to see if we need to go back
                    var prevPage = ui.toPage.data('prevpage');
                    if (prevPage == null || ui.options.reverse) {
                        //remove page
                        ui.options.fromPage.remove();
                    }
                })
            },

            // routes
            routes: {
                'home': 'home',
                'post?:type&:id': 'post'
            },

            // login
            login: function () {
                this.loadPage((new LoginView()).render());
            },

            // tester
            tester: function () {
                this.loadPage(new TesterView().render());
            },

            // home
            home: function () {

                var self = this;
                $.mobile.loading("show");
                window.app.getPosts().then(function (posts) {

                    window.app.posts = posts;

                    var view = new HomeView({
                        collection: posts,
                    }).render();
                    self.loadPage(view, false);
                    //enable menu button
                    window.app.$menuBtn.show();

                });

            },

            //post
            post: function (type, id) {

                //get post
                var post = window.app.posts.find(function (post) { return post.cid == id });

                //create view
                var view;
                if (type == 'news') {
                    view = new NewsPostView({ model: post }).render();
                    this.loadPage(view, true);
                } else if (type == 'event-invite') {
                    view = new PostInviteView.MainView({ model: post });
                    view.render();
                    this.loadPage(view, true);
                }

            },

            //load page
            loadPage: function (view, navigate) {

                //record prev page, if navigate, so we can step back
                if (!navigate) {
                    view.$el.data('prevpage', $.mobile.activePage);
                    window.app.backBtn('enable');
                    Parse.history.navigate('#' + view.attributes.id);//update history
                }

                //append view
                $.mobile.pageContainer.prepend(view.$el);
                view.$el.page();

                $.mobile.changePage('#' + view.attributes.id, {
                    transition: 'slide',
                });

            },

            //exit page
            exitPage: function () {

                //get prev page
                var prevPage = $.mobile.activePage.data('prevpage');
                if (prevPage) {
                    //remove page reference
                    $.mobile.activePage.removeData('prevpage');
                    //chec prev prev
                    var prevPrevPage = prevPage.data('prevpage');
                    if (!prevPrevPage) window.app.backBtn('disable');

                    //show prev page
                    $.mobile.changePage(prevPage, {
                        transition: 'slide',
                        reverse: true,
                    });
                }
            },

        });

        // return
        return Router;

    });


