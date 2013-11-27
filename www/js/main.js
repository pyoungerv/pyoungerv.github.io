/// <reference path="libs/jquerymobile.js" />

//*******************************************************************
// setup require (happens here because require loads after bootstrap)
//*******************************************************************
require.config({
    baseUrl: 'js',
});

//all ready
window.main = function () {
    console.log('starting main');

    //set device events
    //document.addEventListener("backbutton", onBackKeyDown, false);
    //function onBackKeyDown() {
    //    // Handle the back button
    //    alert('back');
    //}

    //start async - to give time for things to load.  (not sure why this is needed)
    setTimeout(function () {
        //load router
        require(['App'], function (App) {

            //load app
            var app = window.app = App;

            //wire up app events
            $('body').on('click', '#menu-btn', function () { app.menuButtonClick(); });
            $('body').on('click', '#back-btn', function () { app.backButtonClick(); });

            //load app data
            app.loadPostData().then(function () {

                //load home page
                app.loadHomePage();

            });

        });

    }, 10);
}
window.readyCheck();//start if everything else is ready (usually happens in debug mode)


////set up requirejs config
//require.config({

//    //3rd party script alias names
//    paths: {
//        // Core Libraries
//        "jquery":       "libs/jquery-1.10.2.min", //"libs/jquery-2.0.2.min",
//        "parse":        "libs/parse-1.2.8.min",//.min
//        "jquerymobile": "libs/jquery.mobile-1.4.0-beta.1",//.min"
//    },
//    // Sets the configuration for your third party scripts that are not AMD compatible
//    //shim: {
//    //}

//});

////do loads and initializations
//require(['jquery', 'parse'], function (jq, parse) {

//    //init Parse
//    Parse.$ = $;
//    Parse.initialize("sjqF54yTviB7QICnEOPam0McLiCnIgCmIDruufa5",
//        "sx74wTRwVSh3Hqyqr8LpkVDBzbTfpTzerDl5MZhW");

//    //init jqm (must be set before jqm initialized)
//    $(document).on('mobileinit', function () {
//        console.log('mobilinit');

//        // disable jqmobile's routing management.  we are using backbone
//        // Prevents all anchor click handling including the addition of active button state and alternate link bluring.
//        $.mobile.linkBindingEnabled = false;
//        // Disabling this will prevent jQuery Mobile from handling hash changes
//        $.mobile.hashListeningEnabled = false;
//        //manually init 1st page
//        //$.mobile.autoInitializePage = false;

//    });

//    //splash ready - tells us jqm initializePage is done
//    $('#splash').on('pageinit', function () {
//        window.splashready = true;
//        window.readyCheck();
//    });

//    //now start jqmobile
//    require(['jquerymobile']);
    
//});



