Recipes.Ingredient = DS.Model.extend({
	name: DS.attr('string'),
	isCompleted: DS.attr('boolean')//,
  // recipe: DS.belongsTo('recipe', {async: true}),
  // foodCategory: DS.belongsTo('foodCategory', {async: true})
});


Recipes.Ingredient.FIXTURES = [
 {
   id: 1,
   name: 'kale',
   food_category: 1,
   isCompleted: false
 },
 {
   id: 2,
   name: 'parsley',
   food_category: 1,
   isCompleted: true
 },
 {
   id: 3,
   name: 'pineapple',
   food_category: 5,
   isCompleted: false
 },
  {
   id: 4,
   name: 'broccoli',
   food_category: 1,
   isCompleted: false
 },
  {
   id: 5,
   name: 'spinich',
   food_category: 1,
   isCompleted: false
 }, {
   id: 6,
   name: 'pineapple',
   food_category: 5,
   isCompleted: false
 },
  {
   id: 7,
   name: 'orange',
   food_category: 5,
   isCompleted: false
 },
 {
   id: 8,
   name: 'grapefruit',
   food_category: 5,
   isCompleted: false
 },
  {
   id: 9,
   name: 'ice',
   food_category: 6,
   isCompleted: false
 }
];