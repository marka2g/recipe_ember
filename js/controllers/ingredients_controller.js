Recipes.IngredientsController = Ember.ArrayController.extend({
	actions: {
		createIngredient: function() {
      // Get the ingredient title set by the "new-ingredient" text field
      var name = this.get('newName');
      if (!name.trim()) { return; }
      // Create the new ingredient model
      var ingredient = this.store.createRecord('ingredient', {
        name: name,
        isCompleted: false
      });
      // Clear the "New Ingredient" text field
      this.set('newName', '');
      // Save the new model
      ingredient.save();
    },
		
		clearCompleted: function() {
// debugger
	    var completed = this.filterBy('isCompleted', true);
	    completed.invoke('deleteRecord');
	    completed.invoke('save');
	  }
	},
	remaining: function() {
	  return this.filterBy('isCompleted', false).get('length');
	}.property('@each.isCompleted'),

	inflection: function() {
	  var remaining = this.get('remaining');
	  return remaining === 1 ? 'item' : 'items';
	}.property('remaining'),
	
	hasCompleted: function() {
	  return this.get('completed') > 0;
	}.property('completed'),

	completed: function() {
	  return this.filterBy('isCompleted', true).get('length');
	}.property('@each.isCompleted'),

	allAreDone: function (key, value){
	  if (value === undefined) {
	    return !!this.get('length') && this.everyProperty('isCompleted', true);
	  } else {
	    this.setEach('isCompleted', value);
	    this.invoke('save');
	    return value;
	  }
	}.property('@each.isCompleted')
});
