Recipes.StepController = Ember.ObjectController.extend({
  actions: {
    editStep: function() {
      this.set('isEditingStep', true);
    },
    acceptChanges: function() {
      this.set('isEditingStep', false);
      if (Ember.isEmpty(this.get('model.name'))) {
        this.send('removeStep');
      } else {
        this.get('model').save();
      }
    },
    removeStep: function() {
        var step = this.get('model');
        step.deleteRecord();
        step.save();
      }
  },
  
  isEditingStep: false,

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