Recipes.EditMeasurementView = Ember.TextField.extend({
  didInsertElement: function() {
    this.$().focus();
  }
});

Ember.Handlebars.helper('edit-measurement', Recipes.EditMeasurementView);