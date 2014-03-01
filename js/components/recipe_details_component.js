Recipes.RecipeDetailsComponent = Ember.Component.extend({
  ingredientsCount: Ember.computed.alias('recipe.ingredients.length'),
  hasIngredients: function(){
    return this.get('ingredientsCount') > 0;
  }.property('ingredientsCount')
});
