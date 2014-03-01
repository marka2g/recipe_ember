Recipes.IndexController = Ember.Controller.extend({
  recipesCount: 6,
  // properties with attributes work differently.
  // need a bind-attr helper
  logo: 'css/images/white_brick_wall.png',
  //time: we need to tell ember that this is a property that we need to call to get the value
  time: function(){
    return (new Date()).toDateString()
  }.property()
});