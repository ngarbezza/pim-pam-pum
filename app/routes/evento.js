import Ember from 'ember';
import AuthenticatedRoute from './authenticated-route';

export default Ember.Route.extend(AuthenticatedRoute, {

  model: function (params) {
    return this.store.findRecord('evento', params.id);
  }
});
