import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTAdapter.extend({
  host: 'http://localhost:3000',
  namespace: 'api',
  headers: Ember.computed(function () {
    var parsed_session = JSON.parse(localStorage['ember_simple_auth:session']);
      return {
      "X-User-Email": parsed_session['secure']['user_email'],
      "X-Auth-Token": parsed_session['secure']['auth_token']
    }
  }).volatile()
});
