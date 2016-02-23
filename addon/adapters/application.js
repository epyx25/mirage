import Ember  from 'ember';
import DS from 'ember-data';

var inflector = Ember.Inflector.inflector;
inflector.uncountable('software');

export default DS.JSONAPIAdapter.extend({
  host: 'http://localhost:4200',
  namespace: 'api'
});

