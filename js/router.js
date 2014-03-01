Recipes.Router.map(function(){
  this.route('about', {path: 'about_recipes'});
  this.resource('recipes', {path: 'recipes'}, function(){
    this.resource('recipe', {path: '/:recipe_id'});
  });
});



// routes

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


