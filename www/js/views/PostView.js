
// dependencies
define([], function () {

    //view
    var View = Parse.View.extend({

        //attributes of div element
        attributes: {
            "data-role": "page"
        },

        //templates
        viewTpl: Parse._.template($("#tpl-post").html()),
        contentImageTpl: Parse._.template($("#tpl-post-content-image").html()),
        contentHeadlineTpl: Parse._.template($("#tpl-post-content-headline").html()),
        contentTextTpl: Parse._.template($("#tpl-post-content-text").html()),
        contentButtonTpl: Parse._.template($("#tpl-post-content-button").html()),
        formTextTpl: Parse._.template($("#tpl-post-form-text").html()),
        
        //events
        events: {
            "swiperight .post-page": "swipeRight"
        },

        //auto render
        initialize: function () { this.render(); },

        //render
        render: function () {
            var self = this;

            self.$el.addClass('post-page');

            //template
            self.$el.html(self.viewTpl());
            var $content = self.$el.find('[data-role=content]');
            
            //load content
            $.each(self.model.get('content'), function (i, item) {

                //create item views
                if (item.type == 'post.content.image') {
                    //instantiate element
                    var $el = $(self.contentImageTpl({
                        d: {
                            url: item.url,
                            image_css: item.image_css,
                        }
                    }));
                    //append
                    $content.append($el);
                } else if (item.type == 'post.content.headline') {
                    //instantiate element
                    var $el = $(self.contentHeadlineTpl({
                        text: item.text,
                    }));
                    //append
                    $content.append($el);
                } else if (item.type == 'post.content.text') {
                    //instantiate element
                    var $el = $(self.contentTextTpl({
                        text: item.text,
                    }));
                    //append
                    $content.append($el);
                } else if (item.type == 'post.content.button') {
                    //instantiate element
                    var $el = $(self.contentButtonTpl({
                        text: item.text,
                    })).click(function () {
                        window.app.contentButtonClick($el, item);
                    });
                    //append
                    $content.append($el);
                } else if (item.type == 'post.form.text') {
                    //instantiate element
                    var $el = $(self.formTextTpl({
                        name: item.name,
                        label: item.label,
                        input_type: item.input_type || 'text',
                    }));
                    //append
                    $content.append($el);
                }
            })
            //}
            return self;
        },

        swipeRight: function () {
            alert("swipe");
        }

    });

    //return the view
    return View;

});

