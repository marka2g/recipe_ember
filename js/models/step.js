Recipes.Step = DS.Model.extend({
	content: DS.attr('string'),
	number: DS.attr('string'),
	recipe: DS.belongsTo('recipe'),
	isCompleted: DS.attr('boolean')
});


Recipes.Step.FIXTURES = [
	{
		id: 1,
		content: "cut veggies so they blend easier.",
		recipe: 1,
		number: 1,
   	isCompleted: false
	},
	{
		id: 2,
		content: "blend it all up.",
		recipe: 1,
		number: 2,
   	isCompleted: false
	},
	{
		id: 3,
		content: "add ice and blend more.",
		recipe: 1,
		number: 3,
   	isCompleted: false
	},
	{
		id: 4,
		content: "enjoy!",
		recipe: 1,
		number: 4,
   	isCompleted: true
	},
	{
		id: 5,
		content: "boil water",
		recipe: 2,
		number: 1,
   	isCompleted: false
	},
	{
		id: 6,
		content: "add salt",
		recipe: 2,
		number: 2,
   	isCompleted: false
	},
	{
		id: 7,
		content: "stir into cous cous",
		recipe: 2,
		number: 3,
   	isCompleted: false
	}
];