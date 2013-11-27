define(['models/Post', 'models/Event'], function (Post, Event) {

    //**************************************
    //posts
    //**************************************

    //define post collection
    var PostCollection = Parse.Collection.extend({ model: Post });
    var post, posts = new PostCollection();

    //invite post:  Terminator 5
    post = new Post({
        type: 'post.type.invite',
        tile_supertitle: "YOU'RE INVITED",
        tile_headline: "Screening:<br>Terminator 5",
        tile_image: 'images/content/t5.jpg',
        tile_text: "Join us for a special pre-screening.",
        content: [{
            type: 'post.content.image',
            url: 'images/content/t5.jpg',
            image_css: 'bg-top',
        }, {
            type: 'post.content.headline',
            text: "See a special screening of Terminator 5"
        }, {
            type: 'post.content.text',
            text: "We are screening the exciting new release from Paramount and director James Cameron:  Terminator 5."
        }, {
            type: 'post.content.button',
            text: "Find a Screening Near You",
            behavior: 'loadpage',
            tolib: 'EventView',
            topageview: 'EventListPageView',
        }]
    });
    posts.add(post);

    //news post:  anchorman 2  
    post = new Post({
        type: 'post.type.news',
        tile_supertitle: "COMING SOON",
        tile_headline: "Anchorman 2",
        tile_image: 'images/content/anchorman1.jpg',
        tile_text: "The Legend Continues",
        content: [{
            type: 'post.content.image',
            url: 'images/content/anchorman2.jpg',
        }, {
            type: 'post.content.headline',
            text: "The Legend Continues"
        }, {
            type: 'post.content.text',
            text: "With the 70s behind him, San Diego's top rated newsman, Ron Burgundy, returns to take New York's first 24-hour news channel by storm.  With the 70s behind him, San Diego's top rated newsman, Ron Burgundy, returns to take New York's first 24-hour news channel by storm.  With the 70s behind him, San Diego's top rated newsman, Ron Burgundy, returns to take New York's first 24-hour news channel by storm. With the 70s behind him, San Diego's top rated newsman, Ron Burgundy, returns to take New York's first 24-hour news channel by storm. With the 70s behind him, San Diego's top rated newsman, Ron Burgundy, returns to take New York's first 24-hour news channel by storm. With the 70s behind him, San Diego's top rated newsman, Ron Burgundy, returns to take New York's first 24-hour news channel by storm."
        }, {
            type: 'post.content.text',
            text: "With the 70s behind him, San Diego's top rated newsman, Ron Burgundy, returns to take New York's first 24-hour news channel by storm"
        }, {
            type: 'post.content.button',
            text: "The Trailer",
            behavior: 'playvideo',
            url: 'http://www.youtube.com/embed/Elczv0ghqw0',
        }, {
            type: 'post.content.button',
            text: "The Cast"
        }]
    });
    posts.add(post);

    //questionaire
    post = new Post({
        type: 'post.type.form',
        tile_supertitle: "ABOUT YOU",
        tile_headline: "Customize Your Profile",
        tile_image: 'images/Favorites.png',
        tile_text: "Tell us what you want from us.",
        content: [{
            type: 'post.content.image',
            url: 'images/favorites.png',
            image_css: 'bg-contain',
        }, {
            type: 'post.content.headline',
            text: "My Favorite Genres"
        }, {
            type: 'post.form.text',
            name: "drama",
            label: "Drama",
            input_type: 'checkbox',
        }, {
            type: 'post.form.text',
            name: "comedy",
            label: "Comedy",
            input_type: 'checkbox',
        }, {
            type: 'post.form.text',
            name: "romantic",
            label: "Romantic",
            input_type: 'checkbox',
        }, {
            type: 'post.form.text',
            name: "horror",
            label: "Horror",
            input_type: 'checkbox',
        }, {
            type: 'post.form.text',
            name: "action",
            label: "Action",
            input_type: 'checkbox',
        }, {
            type: 'post.form.text',
            name: "children",
            label: "Childen",
            input_type: 'checkbox',
        }, {
            type: 'post.content.headline',
            text: "Movies"
        }, {
            type: 'post.form.text',
            name: "loved",
            label: "What is the last movie you loved?",
            input_type: 'text',
        }]
    });
    posts.add(post);

    //news post: Jack Ryan
    post = new Post({
        type: 'post.type.news',
        tile_supertitle: "COMING SOON",
        tile_headline: "Jack Ryan: Shadow Recruit",
        tile_image: 'images/content/shadowrecruit1.jpg',
        tile_image_css: 'bg-top',
        tile_text: "Jack Ryan is back.",
        content: [{
            type: 'post.content.image',
            url: 'images/content/shadowrecuit2.jpg',
            image_css: 'bg-top',
        }, {
            type: 'post.content.headline',
            text: "Shadow Recruit"
        }, {
            type: 'post.content.text',
            text: "Jack Ryan, as a young covert CIA analyst, uncovers a Russian plot to crash the U.S. economy with a terrorist attack."
        }, {
            type: 'post.content.image',
            url: 'images/content/shadowrecuit3.jpg',
            image_css: 'bg-top',
        }, {
            type: 'post.content.button',
            text: "The Trailer",
            behavior: 'playvideo',
            url: 'http://www.youtube.com/embed/S8EaxDvZt4w',
        }, {
            type: 'post.content.button',
            text: "The Cast"
        }]
    });
    posts.add(post);


    //now playing:  the wolf of wall street
    post = new Post({
        type: 'post.type.news',
        tile_supertitle: "NOW PLAYING",
        tile_headline: "The Wolf of Wall Street",
        tile_image: 'images/content/wolf0.jpg',
        //tile_image_css: 'bg-top',
        tile_text: "How Money Destroyed A Wall Street SuperMan",
        content: [{
            type: 'post.content.image',
            url: 'images/content/wolf1.jpg',
        }, {
            type: 'post.content.headline',
            text: "The Wolf of Wall Streen"
        }, {
            type: 'post.content.text',
            text: "Based on the true story of Jordan Belfort, from his rise to a wealthy stockbroker living the high life to his fall involving crime, corruption and the federal government."
        }, {
            type: 'post.content.image',
            url: 'images/content/wolf2.jpg',
        }, {
            type: 'post.content.button',
            text: "Buy Tickets",
            behavior: '',
            tolib: 'EventView',
            topageview: 'EventListPageView',
        }]//
    });
    posts.add(post);


    //twitter
    post = new Post({
        type: 'post.type.twitter',
        tile_supertitle: "TWITTER",
        tile_headline: "The Latest:",
        tile_image: 'images/content/paramount0.jpeg',
        //tile_image_css: 'bg-top',
        tile_text: "Announcing the Nebraska Photo Project on Flipboard. Exclusive images from and inspired by the movie. Explore it now: http://flip.it/NebraskaMovie",
        content: [{
            type: 'post.content.image',
            url: 'images/content/paramount0.jpeg',
        }, {
            type: 'post.content.text',
            text: "Announcing the Nebraska Photo Project on Flipboard. Exclusive images from and inspired by the movie. Explore it now: http://flip.it/NebraskaMovie."
        }]
    });
    posts.add(post);

    //in-app purchace
    post = new Post({
        type: 'post.type.purchase',
        tile_supertitle: "",
        tile_headline: "Google Wallet",
        tile_image: 'images/google-wallet-logo.png',
        tile_image_css: 'bg-contain',
        tile_text: "Use Google Wallet to make one-click purchases.",
        content: [{
            type: 'post.content.image',
            url: 'http://blog.the41st.com/wp-content/uploads/2013/05/Google_Wallet_Logo.png',
        }, {
            type: 'post.content.text',
            text: "Using Google Wallet you can make fast and secure purchased directly through the app."
        }, {
            type: 'post.content.button',
            text: "Buy Now",
            behavior: '',
            tolib: 'EventView',
            topageview: 'EventListPageView',
        }]
    });
    posts.add(post);


    //discussion
    post = new Post({
        type: 'post.type.discussion',
        tile_supertitle: "",
        tile_headline: "What they are saying...",
        tile_image: 'http://siliconangle.com/files/2011/07/blue-chat-bubble.png',
        tile_image_css: 'bg-contain',
        tile_text: "See what the trend setters think",
        content: []
    });
    posts.add(post);



    //**************************************
    //menu posts
    //**************************************

    //menu post collection
    var menuPosts = window.app.data.menuPosts = new PostCollection();

    //profile
    post = new Post({
        type: 'post.type.profile',
        tile_headline: "Profile",
        tile_image: 'http://myyearwithoutclothesshopping.com/wp/wp-content/uploads/2011/02/icon-idea1-profile1.jpg',
        tile_text: "",
        content: [{
            type: 'post.content.image',
            url: 'http://myyearwithoutclothesshopping.com/wp/wp-content/uploads/2011/02/icon-idea1-profile1.jpg',
        }, {
            type: 'post.form.text',
            name: "first_name",
            label: "First Name",
        }, {
            type: 'post.form.text',
            name: "last_name",
            label: "Last Name",
        }, {
            type: 'post.form.text',
            name: "email",
            label: "Email",
            input_type: "email",
        }, {
            type: 'post.form.text',
            name: "mobile",
            label: "Mobile Number",
            input_type: "tel",
        }, {
            type: 'post.form.text',
            name: "address",
            label: "Address",
        }, {
            type: 'post.form.text',
            name: "state",
            label: "State",
        }, {
            type: 'post.form.text',
            name: "zip_code",
            label: "Zip Code",
            input_type: "number",
        }],
    });
    menuPosts.add(post);

    //memberships
    var post = new Post({
        type: 'post.type.news',
        tile_headline: "Memberships",
        tile_image: 'http://arividam.files.wordpress.com/2012/06/logo.jpg',
        tile_text: "",
        content: [{
            type: 'post.content.image',
            url: 'http://www.oscars.org/awards/academyawards/images/84/84_winners.jpg',
        }, {
            type: 'post.content.image',
            url: 'http://www.hollywoodreporter.com/sites/default/files/2012/03/sag_aftra_one_union_logo_a_l.jpg',
        }, {
            type: 'post.content.image',
            url: 'http://www.theyoungfolks.com/wp-content/uploads/2013/01/directors-guild-of-america-logo-blue.jpg',
        }, {
            type: 'post.content.image',
            url: 'http://getinmedia.com/sites/default/files/images/pga-logo1.jpg',
        }, {
            type: 'post.content.image',
            url: 'http://4.bp.blogspot.com/_WanSRrOG8JY/TGxZR6eMo3I/AAAAAAAAqM0/sor9HfVLmgY/s1600/WGAE_New_Logo_-_Color1.jpg',
        }, {
            type: 'post.content.image',
            url: 'http://www-deadline-com.vimg.net/wp-content/uploads/2012/09/wgaw__120921221246-200x124.jpg',
        }]


    });
    menuPosts.add(post);

    //Preferences
    post = new Post({
        type: 'post.type.profile',
        tile_headline: "Preferences",
        tile_image: 'http://icons.iconarchive.com/icons/iconleak/stainless/256/preferences-icon.png',
        tile_text: "",
        content: [{
            type: 'post.content.image',
            url: 'http://icons.iconarchive.com/icons/iconleak/stainless/256/preferences-icon.png',
        }, {
            type: 'post.form.text',
            name: "first_name",
            label: "Send me screening invites",
            input_type: 'checkbox',
        }],
    });
    menuPosts.add(post);

    //paramount
    var post = new Post({
        type: 'post.type.news',
        tile_headline: "Paramount",
        tile_image: 'http://images.wikia.com/logopedia/images/a/a1/Paramount_Pictures_logo_with_new_Viacom_byline.jpg',
        tile_text: "",
    });
    menuPosts.add(post);


    //**************************************
    //events
    //**************************************

    //define event collection
    var EventCollection = Parse.Collection.extend({ model: Event });
    var event, events = window.app.data.posts = new EventCollection();

    //Ziegfeld
    event = new Event({
        type: 'event.type.screening',
        name: "Clearview Cinemas Ziegfeld",
        address: "141 W 54th St, New York, NY 10019",
        date: "12/15/2013",
        time: "7:00PM",
        image: 'http://www.nycgo.com/images/uploadedimages/devnycvisitcom/venue/ziegfeld_v7_460x285.jpg',
        tile: [{
        }],
        content: [{
        }]
    });
    events.add(event);
    event = new Event({
        type: 'event.type.screening',
        name: "Clearview Cinemas Ziegfeld",
        address: "141 W 54th St, New York, NY 10019",
        date: "12/16/2013",
        time: "7:00PM",
        image: 'http://www.nycgo.com/images/uploadedimages/devnycvisitcom/venue/ziegfeld_v7_460x285.jpg',
        tile: [{
        }],
        content: [{
        }]
    });
    events.add(event);
    event = new Event({
        type: 'event.type.screening',
        name: "Clearview Cinemas Ziegfeld",
        address: "141 W 54th St, New York, NY 10019",
        date: "12/18/2013",
        time: "7:00PM",
        image: 'http://www.nycgo.com/images/uploadedimages/devnycvisitcom/venue/ziegfeld_v7_460x285.jpg',
        tile: [{
        }],
        content: [{
        }]
    });
    events.add(event);

    //Angelika
    event = new Event({
        type: 'event.type.screening',
        name: "Angelika Film Center & Café",
        address: "18 W Houston St, New York, NY 10012",
        image: 'http://farm5.staticflickr.com/4042/4218371688_91ea910442_z.jpg',
        date: "12/10/2013",
        time: "7:00PM",
        tile: [{
        }],
        content: [{
        }]
    });
    events.add(event);
    event = new Event({
        type: 'event.type.screening',
        name: "Angelika Film Center & Café",
        address: "18 W Houston St, New York, NY 10012",
        image: 'http://farm5.staticflickr.com/4042/4218371688_91ea910442_z.jpg',
        date: "12/16/2013",
        time: "7:00PM",
        tile: [{
        }],
        content: [{
        }]
    });
    events.add(event);


    //return lib
    return {
        posts: posts,
        menuPosts: menuPosts,
        events: events,
    }

});