import Ember from 'ember';
import AuthenticatedRoute from './authenticated-route';

var EventoDetalleRoute = Ember.Route.extend(AuthenticatedRoute, {

  model: function (params) {
    return this.store.findRecord('evento', params.id);
  },

  setupController: function(controller, model) {
    var confirmadosPath = window.PimPamPum.hostName + '/api/eventos/' + model.get('id') + '/confirmados';
    Ember.$.get(confirmadosPath, function (response) {
      controller.set('confirmados', response.confirmados);
    }, function () {
      controller.set('confirmados', []);
    });
  }
});

export default EventoDetalleRoute;
