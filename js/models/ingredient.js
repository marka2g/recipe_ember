Recipes.Ingredient = DS.Model.extend({
	name: DS.attr('string'),
	isCompleted: DS.attr('boolean'),
  measurement: DS.belongsTo('measurement', {async: true}),
  recipe: DS.belongsTo('recipe', {async: true}),
  foodCategory: DS.belongsTo('foodCategory', {async: true})
});

Recipes.Ingredient.FIXTURES = [
 {
   id: 1,
   name: 'kale',
   food_category: 1,
   measurement: 1,
   isCompleted: false,
   recipe: 1,
   foodCategory: 1
 },
 {
   id: 2,
   name: 'parsley',
   food_category: 1,
   measurement: 2,
   isCompleted: true,
   recipe: 1,
   foodCategory: 1
 },
 {
   id: 3,
   name: 'pineapple',
   food_category: 5,
   measurement: 3,
   isCompleted: false,
   recipe: 1,
   foodCategory: 5
 },
  {
   id: 4,
   name: 'broccoli',
   food_category: 1,
   measurement: 4,
   isCompleted: false,
   recipe: 1,
   foodCategory: 1
 },
  {
   id: 5,
   name: 'spinich',
   food_category: 1,
   measurement: 5,
   isCompleted: false,
   recipe: null,
   foodCategory: 1
 }, 
  {
   id: 6,
   name: 'orange',
   food_category: 5,
   measurement: 1,
   isCompleted: false,
   recipe: 1,
   foodCategory: 5
 },
 {
   id: 7,
   name: 'grapefruit',
   food_category: 5,
   measurement: 2,
   isCompleted: false,
   recipe: 1,
   foodCategory: 5
 },
  {
   id: 8,
   name: 'ice',
   food_category: 6,
   measurement: 3,
   isCompleted: false,
   recipe: 1,
   foodCategory: 6
 }, 
 {
   id: 9,
   name: 'cous cous',
   food_category: 6,
   measurement: 4,
   isCompleted: false,
   recipe: 2,
   foodCategory: 6
 },
 {
   id: 10,
   name: 'olive oil',
   food_category: 6,
   measurement: 4,
   isCompleted: false,
   recipe: 2,
   foodCategory: 6
 },
 {
   id: 11,
   name: 'salt',
   food_category: 6,
   measurement: 4,
   isCompleted: false,
   recipe: 2,
   foodCategory: 6
 },
];