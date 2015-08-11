Dog = Backbone.Model.extend({
  initialize: function(){
    this.on('all', function(eventName, model, msg){
      console.log(model.cid+ ': ' + eventName + ': ' + msg);
    });
  },
  defaults: {
    fullname: 'unknown',
    age: 0
  },
  validate: function(attrs){
    if (attrs.fullname.length < 1) {
      return "Name can't be blank";
    }
  }
});

Dogs = Backbone.Collection.extend({
  model: Dog
});