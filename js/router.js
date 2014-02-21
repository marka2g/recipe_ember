Recipes.Router.map(function() {
  this.resource('recipes', {path: '/'}, function(){
    this.resource('recipe', {path: '/recipe/:recipe_id'}, function(){
      this.resource('ingredients', function(){
        this.route('dontHave');
        this.route('have');
      });
    });
  });
});


// recipes
Recipes.RecipesRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('recipe');
  }
});

Recipes.RecipesIndexRoute = Ember.Route.extend({
  model: function(){
    return this.store.findAll('recipe');
  }
});

// recipe
Recipes.RecipeDetailsComponent = Ember.Component.extend({
  ingredientsCount: Ember.computed.alias('recipe.ingredients.length'),
  hasIngredients: function(){
    return this.get('ingredientsCount') > 0;
  }.property('ingredientsCount')
});


