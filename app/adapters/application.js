import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: window.PimPamPum.hostName,
  namespace: 'api'
});
