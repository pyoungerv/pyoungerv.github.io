//
// dependencies
define(["parse", "jquerymobile"], function (parse, jqm) {

    //login view
    var View = Parse.View.extend({

        attributes: {
        },

        events: {
            'click .form-button.go-prev': 'prev',
            'click .form-button.go-next': 'next',
        },

        initialize: function () {
        },

        render: function () {
            var self = this;
            self.$el.attr('id', 'formpage-' + self.model.name);

            //load page
            var tpl = Parse._.template($("#form-page-template").html());
            self.$el.append(tpl());

            //load footer
            var $footer = self.$el.find('[data-role=footer]');

            //load slides
            var $content = self.$el.find('[data-role=content]');
            if (self.model.slides) {
                Parse._.each(self.model.slides, function (slide, i) {
                    //load slide
                    var css = (i == 0) ? css = 'is-selected' : css = 'slideright';
                    var $slide = $('<div class="form-slide slideable ' + css + '"></div>');
                    //load items
                    var buttons = [];
                    Parse._.each(slide.items, function (item, j) {
                        if (item.type == 'text') {
                            $slide.append('<div class="form-text">' + item.text + '</div>');
                        } else if (item.type == 'button') {
                            buttons.push('<div class="form-button">' + item.text + '</div>');
                        }
                    });
                    //write buttons
                    if (buttons.length == 2) {
                        var tpl = Parse._.template($("#twocolumngrid-template").html());
                        $slide.append(tpl({ block0: buttons[0], block1: buttons[1] }));
                    }
                    //append slide
                    $content.append($slide);
                })
            }

            //
            window.app.backBtn('disable');
            //
            return self;
        },

        next: function (event) {
            var $slide = this.$el.find('.form-slide.is-selected');
            $slide.addClass('slideleft').removeClass('is-selected');
            var $next = $slide.next();
            $next.addClass('is-selected').removeClass('slideleft slideright');
        },

        prev: function (event) {
            var $slide = this.$el.find('.form-slide.is-selected');
            $slide.addClass('slideright').removeClass('is-selected');
            var $prev = $slide.prev();
            $prev.addClass('is-selected').removeClass('slideleft slideright');
        },

    });

    //return the view
    return View;

});

