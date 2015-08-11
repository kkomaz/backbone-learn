DogView = Backbone.View.extend({
  initialize: function () {
    // who is calling the render function [this]
    this.model.on('change', this.render, this);
    this.model.on('destroy', this.remove, this);
  },
  // create element in memory that we are going to insert into the DOM
  // tagName: 'dog'
  className: 'dog',
  template: _.template($('#dog-template').html()),

  events: {
    'click .update': 'update',
    'click .destroy': 'destroy'
  },

  update: function () {
    this.model.set({
      // this.$el = <div class="dog"></div>
      fullname: this.$el.find('.fullname').val(),
      age: this.$el.find('.age').val(),
      fleas: this.$el.find('.fleas').val()
    });
    // this.model.save();
  },

  destroy: function (){
    this.model.destroy();
  },

  render: function () {
    // passing in attributes via default values
    // template knows to grab content from dog-template
    // going to replace all the variables
    // then its going to be inserted into the dog element in memory
    // prepended into or inserted into main (already in the DOM)

    // this.$el = <div class="dog"></div>
    $('main').prepend(this.$el.html(this.template(this.model.attributes)));
    return this.$el;
  }
});