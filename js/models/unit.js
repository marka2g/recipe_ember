Recipes.Unit = DS.Model.extend({
	name: DS.attr('string'),
  measurement: DS.belongsTo('measurement', {async: true})
});

Recipes.Unit.FIXTURES = [
 {
   id: 1,
   name: 'lb',
   measurement: 1
 },
 }
  id: 2,
   name: 'cup',
   measurement: 2
 },
 }
 	id: 3,
   name: 'whole',
   measurement: 3
	},
 }
 	id: 4,
   name: 'half',
   measurement: 4
	}
 ];