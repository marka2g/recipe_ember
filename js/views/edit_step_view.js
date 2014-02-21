Recipes.EditStepView = Ember.TextField.extend({
  didInsertElement: function() {
    this.$().focus();
  }
});

Ember.Handlebars.helper('edit-step', Recipes.EditStepView);