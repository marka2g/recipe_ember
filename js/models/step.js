Recipes.Step = DS.Model.extend({
	text: DS.attr('string'),
	recipe: DS.belongsTo('recipe'),
	isCompleted: DS.attr('boolean')
});


Recipes.Step.FIXTURES = [
	{
		id: 1,
		text: "cut veggies so they blend easier."
	},
	{
		id: 2,
		text: "blend it all up."
	},
	{
		id: 3,
		text: "add ice and blend more."
	},
	{
		id: 4,
		text: "enjoy!"
	}
];