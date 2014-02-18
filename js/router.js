Recipes.Router.map(function() {
	this.resource('ingredients', {path: '/'}, function(){
		this.route('dontHave');
		this.route('have');
	});
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