Router = Backbone.Router.extend({
  initialize: function () {
    console.log('Router initialized...');
  },

  routes: {
    'dogs': 'index', //exact match #dogs
    'dogs/:id': 'show', //match a parameter #dogs/1
    'dogs/:id/*action': 'behavior' //match a param #dogs/1/bark
  },

  index: function (){
    console.log("this is the index - showing all dogs");
  },

  show: function (id){
    console.log("this is the show - showing single dog" + id);
  },

  behavior: function(id, action){
    console.log('dog' + id + '' + action);
  }
});


var router = new Router();
Backbone.history.start();

