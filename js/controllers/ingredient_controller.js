Recipes.IngredientController = Ember.ObjectController.extend({
  actions: {
    editIngredient: function() {

      this.set('isEditing', true);
    },
    acceptChanges: function() {
      this.set('isEditing', false);
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
  
  isEditing: false,

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