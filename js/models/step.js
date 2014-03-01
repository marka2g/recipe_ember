Recipes.Step = DS.Model.extend({
	bodyContent: DS.attr('string'),
	number: DS.attr('string'),
	isCompleted: DS.attr('boolean'),
	recipe: DS.belongsTo('recipe', {async: true})
});


Recipes.Step.FIXTURES = [
	{
		id: 1,
		bodyContent: "cut veggies so they blend easier\.",
		recipe: 1,
		number: 1,
   	isCompleted: false
	},
	{
		id: 2,
		bodyContent: "blend it all up\.",
		recipe: 1,
		number: 2,
   	isCompleted: false
	},
	{
		id: 3,
		bodyContent: "add ice and blend more.",
		recipe: 1,
		number: 3,
   	isCompleted: false
	},
	{
		id: 4,
		bodyContent: "enjoy!",
		recipe: 1,
		number: 4,
   	isCompleted: true
	},
	{
		id: 5,
		bodyContent: "boil water",
		recipe: 2,
		number: 1,
   	isCompleted: false
	},
	{
		id: 6,
		bodyContent: "add salt",
		recipe: 2,
		number: 2,
   	isCompleted: false
	},
	{
		id: 7,
		bodyContent: "stir into cous cous",
		recipe: 2,
		number: 3,
   	isCompleted: false
	}
];