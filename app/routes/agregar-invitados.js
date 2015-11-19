import Ember from 'ember';
import AuthenticatedRoute from './authenticated-route';

var AgregarInvitadosRoute = Ember.Route.extend(AuthenticatedRoute, {

  model: function (params) {
    return this.store.findRecord('evento', params.id);
  }
});

export default AgregarInvitadosRoute;
