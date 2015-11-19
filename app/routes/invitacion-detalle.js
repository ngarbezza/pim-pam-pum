import Ember from 'ember';
import AuthenticatedRoute from './authenticated-route';

var InvitacionDetalle = Ember.Route.extend(AuthenticatedRoute, {

  model: function (params) {
    return this.store.findRecord('evento', params.id_evento);
  }
});

export default InvitacionDetalle;
