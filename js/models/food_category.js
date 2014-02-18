Recipes.FoodCategory = DS.Model.extend({
	title: DS.attr('string'),
  ingredients: DS.hasMany('ingredient', {async: true})
});


Recipes.FoodCategory.FIXTURES = [
 {
   id: 1,
   title: 'veg',
   ingredients: []
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
   ingredients: []
 },
 {
 	 id: 6,
 	 title: 'misc',
   ingredients: []
 }
];