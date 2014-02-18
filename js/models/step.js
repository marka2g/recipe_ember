Recipes.Step = DS.Model.extend({
	text: DS.attr('string'),
	recipe: DS.belongsTo('recipe')
});


Recipes.Step.FIXTURES = [
	{
		id: 1,
		text: "prep work"
	},
	{
		id: 2,
		text: "bake it"
	},
	{
		id: 3,
		text: "fry bacon"
	},
	{
		id: 4,
		text: "slice tomatoes"
	}
];