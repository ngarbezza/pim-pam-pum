import Ember from 'ember';
import AuthenticatedRoute from './authenticated-route';

var EventoDetalleRoute = Ember.Route.extend(AuthenticatedRoute, {

  model: function (params) {
    return this.store.findRecord('evento', params.id);
  }

  ,setupController: function(controller, model) {
    var confirmadosPath = window.PimPamPum.hostName + '/api/eventos/' + model.get('id') + '/confirmados';

    $.getJSON(confirmadosPath,function(data){
      controller.set('confirmados', data.confirmados);
      controller.set('evento', data.evento);

    })
  }

});

export default EventoDetalleRoute;
