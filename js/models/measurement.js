Recipes.Measurement = DS.Model.extend({
	amount: DS.attr('number'),
	ingredient: DS.belongsTo('ingredient', {async: true}),
	unit: DS.belongsTo('unit', {async: true})
})

Recipes.Measurement.FIXTURES = [
	{
		id: 1,
		amount: 2,
		ingredient: 1,
		unit: 1
	},
	{
		id: 2,
		amount: 3,
		ingredient: 2,
		unit: 2
	},
	{
		id: 3,
		amount: 1,
		ingredient: 3,
		unit: 4

	},
	{
		id: 4,
		amount: 1,
		ingredient: 6,
		unit: 3
	},
	{
		id: 5,
		amount: 4,
		ingredient:8,
		unit: 2
	}
];