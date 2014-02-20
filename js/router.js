Recipes.Router.map(function() {

  this.resource('recipes', {path: '/'}, function(){
    this.resource('recipe', { path: '/:recipe_id' }, function(){
      this.resource('ingredients', function(){
        this.route('dontHave');
        this.route('have');
      });
    });
    this.resource('steps');
  });

});


// Todos.Router.map(function () {
//   this.resource('todos', { path: '/' }, function () {
//     // additional child routes will go here later
//   });
// });

// // ... additional lines truncated for brevity ...

// Todos.TodosIndexRoute = Ember.Route.extend({
//   model: function() {
//     return this.modelFor('todos');
//   }
// });

// App.Router.map( function() {
//   this.resource('groups', function() {
//     this.resource('users', { path: "/:group_id" }, function(){
//         this.resource('details', { path: "/:user_id" });
//     });
//   });
// });


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
// debugger
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



