// Category View
// =============

// Includes file dependencies
define([ "jquery", "parse","models/CategoryModel" ], function( $, parse, CategoryModel ) {

    // Extends Backbone.View
    var CategoryView = Parse.View.extend({

        // The View Constructor
        initialize: function() {

            // The render method is called when Category Models are added to the Collection
            this.collection.on( "added", this.render, this );

        },

        // Renders all of the Category models on the UI
        render: function() {

            debugger

            // Sets the view's template property
            this.template = Parse._.template( $( "script#categoryItems" ).html(), { "collection": this.collection } );

            // Renders the view's template inside of the current listview element
            this.$el.find("ul").html(this.template);

            // Maintains chainability
            return this;

        }

    } );

    // Returns the View class
    return CategoryView;

} );