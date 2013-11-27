//
// dependencies
define(["parse", "jquerymobile"], function (parse, jqm) {

    //view
    var View = Parse.View.extend({
        
        className: "post",

        attributes: {
            "data-role": "page",
        },

        //shared methods
        exit: function () {
            //exit page
            window.app.router.exitPage();
        },

        //widget creators
        newFooter: function (button1, button2) {
            var self = this;

            //create footer
            var tpl = (button2 == null)
                ? Parse._.template($("#tpl-form-1btnfooter").html())
                : Parse._.template($("#tpl-form-2btnfooter").html());
            var $footer = (button2 == null)
                ? $(tpl({ button1: button1 }))
                : $(tpl({ button1: button1, button2: button2 }));
            return $footer;
        },

    });

    //override the extend function - note: "this" is the constructor function. this.prototype is the object (with methods+properties)
    View.extend = function (child) {
        // apply extend method
        var view = Parse.View.extend.apply(this, arguments);
        //extend (merge) features
        view.prototype.className = [this.prototype.className, child.className].join(' ');
        view.prototype.attributes = Parse._.extend({}, this.prototype.attributes, child.attributes);
        view.prototype.events = Parse._.extend({}, this.prototype.events, child.events);
        return view;
    };

    //return the view
    return View;

});

