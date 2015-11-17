import Ember from 'ember';

var EventosController = Ember.Controller.extend({

  hayEventos: Ember.computed.notEmpty('model'),

  actions: {
    verDetalles: function (evento) {
      this.transitionToRoute('evento-detalle', evento);
    },
    agregarInvitados: function (evento) {
      this.transitionToRoute('agregar-invitados', evento);
    }
  }
});

export default EventosController;
