Recipes.EditIngredientView = Ember.TextField.extend({
  didInsertElement: function() {
    this.$().focus();
  }
});

Ember.Handlebars.helper('edit-ingredient', Recipes.EditIngredientView);