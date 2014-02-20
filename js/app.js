window.Recipes = Ember.Application.create({
	LOG_TRANSITIONS: true,
	LOG_TRANSITIONS_INTERNAL: true,
	LOG_VIEW_LOOKUPS: true
});

Recipes.ApplicationAdapter = DS.FixtureAdapter.extend();