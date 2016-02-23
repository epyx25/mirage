import Ember from 'ember';
import CompleteSaveMixin from 'complete-save/mixins/complete-save';
import { module, test } from 'qunit';
import DS from 'ember-data';
import {createStore} from '../../helpers/store';
import setupStore from '../../helpers/store';
import startMirage from '../../helpers/setup-mirage-for-integration';
module('Unit | Mixin | complete save');

const {get, set, run} = Ember;
var Adapter, Service, servicePrice, Currency, store, env, cat;


module('Unit | Mixin | complete save', {
  /*
  setup: function() {
    startMirage(this.container);
  },
  */
  beforeEach() {

    Currency = DS.Model.extend(CompleteSaveMixin, {
      name: DS.attr('string')
    });

    Adapter = DS.JSONAPIAdapter.extend({
      host: 'http://localhost:4200'
    });

    store = createStore({
      adapter: Adapter,
      currency: Currency
    });

  },

  afterEach() {

    run(function() {
      store.destroy();
    });

    Currency = null;
    store = null;
  }
});


// Replace this with your real tests.
test('it works', function(assert) {
  assert.expect(1);
  var currency;

  console.log(store);
  run(function() {
    currency = store.createRecord('currency');
    currency.save();
    assert.ok(1);
  });
});
