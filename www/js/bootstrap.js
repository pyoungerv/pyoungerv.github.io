
//ready check
window.readyCheck = function () {
    
    //check flags
    if (!window.deviceready) return;
    if (!window.jqmready) return;

    //all ready, run main
    if (window.main) window.main();

}


//*******************************************************************
// debug
//*******************************************************************
window._alertque = [];
window.debugAlert = function (msg, force) {
    if (msg) window._alertque.push(msg);
    if (window.app) {//note: this causes probs bc can load before other libraries
        for (var i = 0; i < window._alertque.length; i++) { window.app.diag(window._alertque[i]); }
        window._alertque = [];
    } else if (force) {
        for (var i = 0; i < window._alertque.length; i++) { alert(window._alertque[i]); }
        window._alertque = [];
    } else {
        setTimeout(function () {
            window.debugAlert(null, true);
        }, 1000);
    }
}

//*******************************************************************
//phonegap device
//*******************************************************************

//phonegap device ready
function onDeviceReady() {
    
    if (window.deviceready) return;
    window.deviceready = true;

    //notifications
    setupNotifications();

    //try start
    console.log('device ready');
    window.readyCheck();

}
document.addEventListener('deviceready', onDeviceReady, true);
window.addEventListener('deviceready', onDeviceReady, true);

//run in debug mode
if (!window.device) { window.dispatchEvent(new Event('deviceready')); }

//notifications
function setupNotifications() {

    //skipped for dev TODO
    return

    var pushNotification;

    //try to register
    try {
        pushNotification = window.plugins.pushNotification;
        if (device.platform == 'android' || device.platform == 'Android') {
            pushNotification.register(successHandler, errorHandler, {
                "senderID": "338307443359",
                "ecb": "onNotificationGCM"
            });		// required!
        } else {
            window.debugAlert('pre-reg');
            pushNotification.register(tokenHandler, errorHandler, {
                "badge": "true",
                "sound": "true",
                "alert": "true",
                "ecb": "onNotificationAPN"
            });	// required!
            window.debugAlert('post-reg');
        }
    }
    catch (err) {
        txt = "There was an error on this page.\n\n";
        txt += "Error description: " + err.message + "\n\n";
        alert(txt);
    }



    // handle GCM notifications for Android.  note:  also handles reg id event
    window.onNotificationGCM = function(e) {
        switch (e.event) {
            case 'registered':
                window.debugAlert('reg:' + e.regid);
                break;

            case 'message':
                // if this flag is set, this notification happened while we were in the foreground.
                // you might want to play a sound to get the user's attention, throw up a dialog, etc.
                alert('msg:' + e);
                if (e.foreground) {
                    window.debugAlert('--INLINE NOTIFICATION--');
                    // if the notification contains a soundname, play it.
                    var my_media = new Media("/android_asset/www/" + e.soundname);
                    my_media.play();
                }
                else {	// otherwise we were launched because the user touched a notification in the notification tray.
                    if (e.coldstart)
                        window.debugAlert('--COLDSTART NOTIFICATION--');
                    else
                        window.debugAlert('--BACKGROUND NOTIFICATION--');
                }
                window.debugAlert('MESSAGE -> MSG: ' + e.payload.message);
                window.debugAlert('MESSAGE -> MSGCNT: ' + e.payload.msgcnt);
                break;
            case 'error':
                window.debugAlert('ERROR -> MSG:' + e.msg);
                break;
            default:
                window.debugAlert('EVENT -> Unknown, an event was received and we do not know what it is');
                break;
        }
    }

    //ios special handler for reg id tokens
    function tokenHandler(result) {
        window.debugAlert('tok');
        window.debugAlert(result);
    }

    //generic success
    function successHandler(result) {
        window.debugAlert('success');
        window.debugAlert(result);
    }

    //generic error
    function errorHandler(error) {
        window.debugAlert('error');
        window.debugAlert(error);
    }

    //unreg
    window.unregPush = function () {
        window.debugAlert('trying to unregister');
        pushNotification.unregister(successHandler, errorHandler);
    };
}


// handle APNS notifications for iOS
function onNotificationAPN(e) {
    alert('post-reg');
    window.debugAlert('post-reg');
    window.debugAlert(e);
    if (e.alert) {
        navigator.notification.alert(e.alert);
    }

    if (e.sound) {
        var snd = new Media(e.sound);
        snd.play();
    }

    if (e.badge) {
        pushNotification.setApplicationIconBadgeNumber(successHandler, e.badge);
    }
}

//*******************************************************************
// parse
//*******************************************************************

//init Parse
Parse.$ = $;
Parse.initialize("sjqF54yTviB7QICnEOPam0McLiCnIgCmIDruufa5",
    "sx74wTRwVSh3Hqyqr8LpkVDBzbTfpTzerDl5MZhW");


//*******************************************************************
// jq mobile
//*******************************************************************

//note: runs upon loading jqmobile library, so jqm is listed late in the index load order
$(document).on('mobileinit', function () {

    // disable jqmobile's routing management.  we are using backbone
    // Prevents all anchor click handling including the addition of active button state and alternate link bluring.
    $.mobile.linkBindingEnabled = false;
    // Disabling this will prevent jQuery Mobile from handling hash changes
    $.mobile.hashListeningEnabled = false;
    //manually init 1st page
    //$.mobile.autoInitializePage = false;

    //set flag
    window.jqmready = true;
    console.log('jqm ready');
    window.readyCheck();

});

//splash ready - tells us jqm initializePage is done
$('#splash').on('pageinit', function () {
    debugger
});


