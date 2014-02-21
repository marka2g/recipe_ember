Recipes.FoodCategory = DS.Model.extend({
	title: DS.attr('string'),
  ingredients: DS.hasMany('ingredient', {async: true})
});


Recipes.FoodCategory.FIXTURES = [
 {
   id: 1,
   title: 'veg',
   ingredients: [1,2,4,5]
 },
 {
   id: 2,
   title: 'beef',
   ingredients: []
 },
 {
   id: 3,
   title: 'poultry',
   ingredients: []
 },
  {
   id: 4,
   title: 'fish',
   ingredients: []
 },
  {
   id: 5,
   title: 'fruit',
   ingredients: [3,6,7]
 },
 {
 	 id: 6,
 	 title: 'misc',
   ingredients: []
 }
];