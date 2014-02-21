Recipes.Recipe = DS.Model.extend({
  title: DS.attr('string'),
  ingredients: DS.hasMany('ingredient', {async: true}),
  steps: DS.hasMany('step', {async: true})
});

Recipes.Recipe.FIXTURES = [
	{
		id: 1,
		title: "Green Smoothie",
		ingredients: [1, 2, 3, 6, 7, 8],
		steps: [1,2,3,4]
	},
	{
		id: 2,
		title: "Cous Cous",
		ingredients: [9, 10, 11],
		steps: [5,6,7]
	}
];