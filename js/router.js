Recipes.Router.map(function() {

  this.resource('recipes', {path: '/'}, function(){
    this.resource('recipe', { path: '/:recipe_id' });
    this.resource('ingredients', function(){
      this.route('dontHave');
      this.route('have');
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


// ingredients
Recipes.IngredientsRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('ingredient');
	}
});

Recipes.IngredientsIndexRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('ingredients');
  }
});

Recipes.IngredientsDontHaveRoute = Ember.Route.extend({
  model: function(){
    return this.store.filter('ingredient', function(ingredient) {
      return !ingredient.get('isCompleted');
    });
  },
  renderTemplate: function(controller) {
    this.render('ingredients/index', {controller: controller});
  }
});

Recipes.IngredientsHaveRoute = Ember.Route.extend({
  model: function(){
    return this.store.filter('ingredient', function(ingredient) {
      return ingredient.get('isCompleted');
    });
  },
  renderTemplate: function(controller) {
    this.render('ingredients/index', {controller: controller});
  }
});


//test
// Recipes.RecipesIngredientsDontHaveRoute = Ember.Route.extend({
//   model: function(){
//     return this.store.filter('ingredient', function(ingredient) {
//       return !ingredient.get('isCompleted');
//     });
//   },
//   renderTemplate: function(controller) {
//     this.render('ingredients/index', {controller: controller});
//   }
// });
