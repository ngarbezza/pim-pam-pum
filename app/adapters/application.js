import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTAdapter.extend({
  host: window.PimPamPum.hostName,
  namespace: 'api'
});
