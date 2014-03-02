Recipes.RecipeController = Ember.ObjectController.extend({
	actions: {
		createIngredient: function() {
      var recipe = this.get('model');
      var ingrName = this.get('newIngredientName');
      if (!ingrName.trim()) { return; }
      var ingredient = this.store.createRecord('ingredient', {
        name: ingrName,
        isCompleted: false
      });
      recipe.get('ingredients').addObject(ingredient);
    },
    createStep: function(){
      var recipe = this.get('model');
      var stepContent = this.get('newStepContent');
      if (!stepContent.trim()) { return; }
      var step = this.store.createRecord('step', {
        content: stepContent,
        isCompleted: false
      });
      recipe.get('steps').addObject(step);
    }
  }

// fix for ingredients & steps
// http://emberjs.com/guides/getting-started/displaying-the-number-of-incomplete-todos/
//   },
    
//   remainingIngredients: function() {
// debugger
//       return this.filterBy('isCompleted', false).get('length');
//     }.property('@each.isCompleted'),
//   ingredientsInflection: function() {
//     var remaining = this.get('remainingIngredients');
//     return remaining === 1 ? 'item' : 'items';
//   }.property('remainingIngredients')
});