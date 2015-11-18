import Ember from 'ember';

var EventoDetalleController = Ember.Controller.extend({
  hayConfirmados: Ember.computed.notEmpty('confirmados')
});

export default EventoDetalleController;
