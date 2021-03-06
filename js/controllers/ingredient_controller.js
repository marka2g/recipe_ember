Recipes.IngredientController = Ember.ObjectController.extend({
  actions: {
    editIngredient: function() {
      this.set('isEditingIngredient', true);
    },
    acceptChanges: function() {
      this.set('isEditingIngredient', false);
      if (Ember.isEmpty(this.get('model.name'))) {
        this.send('removeIngredient');
      } else {
        this.get('model').save();
      }
    },
    removeIngredient: function() {
        var ingredient = this.get('model');
        ingredient.deleteRecord();
        ingredient.save();
      }
  },
  
  isEditingIngredient: false,

  isCompleted: function(key, value){
    var model = this.get('model');

    if (value == undefined) {
      return model.get('isCompleted');
    } else {
      model.set('isCompleted', value);
      model.save();
      return value;
    }
  }.property('model.isCompleted')
});