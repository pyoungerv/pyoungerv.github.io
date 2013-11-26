//dependencies
define([], function () {

    //class: App
    var App = {
        
        //**********************************
        // page management
        //**********************************

        //load page - takes a view instance
        pages: [],
        loadPage: function (view) {

            //set id
            var id = view.$el.attr('id');
            if (!id) { id = "page" + app.pages.length + 1; view.$el.attr('id', id); }

            //insert footer
            view.$el.append('<div data-role="footer" data-position="fixed">' + $('#main-footer-tpl').html() + '</div>');

            //append view to dom
            $.mobile.pageContainer.prepend(view.$el);
            view.$el.page();

            //push
            app.pages.push(view);

            //show back button
            if (app.pages.length > 1) $('#back-btn').show();

            //handle page hide
            view.$el.on('pagehide', function (event, ui) {
                //remove page from DOM
                if ($(this).data('flagged-for-removal')) $(this).remove();
            });

            //show page
            $.mobile.changePage('#' + id, {
                transition: 'slide',
            });

        },
        
        //back button click
        backButtonClick: function () {

            if (app.pages.length == 0) return;

            //push next page view
            var oldView = app.pages[app.pages.length - 1];
            app.pages = app.pages.splice(0, app.pages.length - 1);
            var curView = app.pages[app.pages.length - 1];

            //flag for removal
            oldView.$el.data('flagged-for-removal', true);

            //show previous page
            $.mobile.changePage('#' + curView.$el.attr('id'), {
                transition: 'slide',
                reverse: true,
            });

            //hide back button
            if (app.pages.length == 1) $('#back-btn').hide();

        },

        //menu button click
        menuButtonClick: function () {

            //load menu page view
            require(['models/Post', 'views/MenuView'], function (Post, MenuView) {

                //instantiate view
                var view = new MenuView({
                    collection: app.data.menuPosts
                });

                //show page
                window.app.loadPage(view)

            });
        },

        //tile click
        tileClick: function (view, model) {

            //load home page view
            require(['views/PostView'], function (PostView) {

                //instantiate view
                var view = new PostView({
                    model: model
                });

                //show page
                window.app.loadPage(view)

            });
        },

        //content button click
        contentButtonClick: function (view, model) {

            //determine button behavior
            if (model.behavior == 'playvideo') {
                window.location.href = model.url;
            } else if (model.behavior == 'loadpage') {

                //load view
                require(['views/' + model.tolib], function (ViewLib) {

                    //instantiate view
                    var view = new ViewLib[model.topageview]({
                        options: { data: model }
                    });

                    //show page
                    window.app.loadPage(view)
                    
                });

            }

        },

        //home page
        loadHomePage: function () {
            //load home view
            require(['views/HomeView'], function (HomeView) {
                //instantiate view
                var view = new HomeView({
                    collection: app.data.posts
                });
                //show page
                window.app.loadPage(view)
            });
        },

        //get template
        getTpl: function (name) {
            return Parse._.template($('#' + name).html());
        },

        //**********************************
        // load all + dummy data
        //**********************************
        loadPostData: function () {

            //init data
            window.app.data = {}; 
            
            //create promise
            var promise = new Parse.Promise();
            
            //load Data library
            require(['PostData'], function (PostData) {

                //get posts
                window.app.data.posts = PostData.posts;
                window.app.data.menuPosts = PostData.menuPosts;
                window.app.data.events = PostData.events;

                //resolve
                promise.resolve();
            })

            //return promise
            return promise;
        },

    };

    // return model
    return App;

});

////**********************************
//// dummy data
////**********************************
//getPosts: function () {

//    var promise = new Parse.Promise();
//    require(['parse', 'models/Post'], function (parse, Post) {

//        //posts
//        var Posts = Parse.Collection.extend({ model: Post });
//        var posts = new Posts();

//        //project post
//        var post = new Post({
//            type: 'news',
//            headline: "Film:  Sideways",
//            image: 'http://adweek.blogs.com/photos/uncategorized/sideways.jpg',
//            text: "Two men reaching middle age with not much to show but disappointment, embark on a week long road trip through California's wine country, just as one is about to take a trip down the aisle.",
//        });
//        posts.add(post);

//        //invite post
//        var post = new Post({
//            type: 'event-invite',
//            headline: "You're Invited:  Spiderman Returns Premiere",
//            image: 'https://lh6.googleusercontent.com/-CATOZC876_Q/Sd-DtKHeRrI/AAAAAAAAGt0/YQcVhGstPQM/s512/Movie%252520-%252520Spiderman%252520-%252520Wallpaper%2525205.jpg',
//            text: "Please join us for the world premiere of Spiderman Returns.<br><br>"
//                + "Please join us for the world premiere of Spiderman Returns.<br><br>"
//                + "Please join us for the world premiere of Spiderman Returns.<br><br>"
//                + "Please join us for the world premiere of Spiderman Returns.<br><br>"
//                + "Please join us for the world premiere of Spiderman Returns.<br><br>"
//                + "Please join us for the world premiere of Spiderman Returns.<br><br>"
//                + "Please join us for the world premiere of Spiderman Returns.<br><br>"
//                + "Please join us for the world premiere of Spiderman Returns.<br><br>"
//                + "Please join us for the world premiere of Spiderman Returns.<br><br>"
//                + "Please join us for the world premiere of Spiderman Returns.<br><br>"
//                + "Please join us for the world premiere of Spiderman Returns.<br><br>"
//                + "SPIDEY!!!.<br><br>"
//                + "Please join us for the world premiere of Spiderman Returns.<br><br>"
//                + "Please join us for the world premiere of Spiderman Returns.<br><br>"
//                + "SPIDEY!!!.<br><br>"
//                + "Please join us for the world premiere of Spiderman Returns.<br><br>"
//                + "Please join us for the world premiere of Spiderman Returns.<br><br>"
//                + "SPIDEY!!!.<br><br>"
//                + "SPIDEY!!!.<br><br>"
//                + "SPIDEY!!!.<br><br>"
//                + "SPIDEY!!!.<br><br>"
//                + "SPIDEY!!!.<br><br>"
//                + "SPIDEY!!!.<br><br>"
//                + "SPIDEY!!!.<br><br>"
//                + "SPIDEY!!!.<br><br>"
//                + "SPIDEY!!!.<br><br>"
//            ,
//            settings: [{
//            }],
//            events: [{
//                text: 'Chicago',
//            }, {
//                text: 'New York',
//            }, {
//                text: 'Los Angeles',
//            }],
//        });
//        posts.add(post);

//        //resolve
//        promise.resolve(posts);
//    })
//    return promise;
//},

////**********************************
////init
////**********************************
//menuBtnIsEnabled: true,
//    backBtnIsEnabled: false,
//init: function () {
//    var self = this;

//    //set up hover buttons
//    this.$backBtn = $('#backbtn');
//    this.$menuBtn = $('#menubtn');
//    $('body').on('vmousedown', function (event) {
//        if (self.backBtnIsEnabled) self.$backBtn.removeClass('faded').addClass('fadeout');
//        if (self.menuBtnIsEnabled) self.$menuBtn.removeClass('faded').addClass('fadeout');
//    }).on('vmouseup', function (event) {
//        if (self.backBtnIsEnabled) self.$backBtn.removeClass('fadeout').addClass('faded');
//        if (self.menuBtnIsEnabled) self.$menuBtn.removeClass('fadeout').addClass('faded');
//    });

//    //back
//    this.$backBtn.on('click', function () {
//        self.router.exitPage();
//    });

//    //set up form buttons - NOTE: could be performance problem?
//    $('body').on('mousedown', '.form-button', function () {
//        $(this).addClass('hideshadow');
//    }).on('mouseup', '.form-button', function () {
//        $(this).removeClass('hideshadow');
//    });

//    //auto-expand page contents
//    $(document).on('pagebeforeshow', function (event, ui) {
//        var $div = $(this).find('.auto-expand');
//        if (!$div.length) return;
//        var containerHeight = parseInt($div.css('height'));
//        var windowHeight = parseInt(window.innerHeight);
//        if (containerHeight + 118 < windowHeight) {
//            var newHeight = windowHeight - 118;
//            $div.css('min-height', newHeight + 'px');
//        }
//        else {
//            $div.css('min-height', windowHeight + 'px');
//        }
//    });

//},

////**********************************
////hover buttons
////**********************************
//backBtn: function (method) {
//    var self = this;
//    if (method == 'enable') {
//        self.backBtnIsEnabled = true;
//        self.$backBtn.show();
//    }
//    if (method == 'disable') {
//        self.backBtnIsEnabled = false;
//        self.$backBtn.hide();
//    }
//},

////**********************************
//// debug
////**********************************

////popup
//popup : function (msg) {
//    var popup = $('#popup');
//    if (popup.length == 0) {
//        var activePage = $.mobile.activePage;
//        activePage.append('<div data-role="popup" id="popup"><p>' + msg + '</p></div>').trigger('pagecreate');
//        popup = activePage.find('#popup');
//        popup.popup('open');
//    } else {
//        popup.append('<p>' + msg + '</p>');
//    }
//},

////diag
//diag : function (msg) {
//    var diag = $('#diag');
//    diag.prepend('<div>' + msg + '</div>');
//},
