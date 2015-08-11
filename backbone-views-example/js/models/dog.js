Dog = Backbone.Model.extend({
  initialize: function () {
    // property => view & model
    // render comes in with backbone [paste into DOM]
    this.view = new DogView({ model: this}).render();
  },
  defaults: {
    fullname: 'unknown',
    age: 0,
    fleas: false
  }
});