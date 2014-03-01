Recipes.Router.map(function(){
  this.route('about', {path: 'about_recipes'});
  this.resource('recipes', {path: 'recipes'}, function(){
    this.resource('recipe', {path: '/:recipe_id'});
  });
});


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

Recipes.RecipesRoute = Ember.Route.extend({
  model: function(){
    return this.store.findAll('recipe');
  }
});

// this code is unneccessary because ember will auto-gen, or so codeschool says...
Recipes.RecipeRoute = Ember.Route.extend({
  model: function(params){
    return this.store.find('recipe', params.recipe_id);
  }
});


