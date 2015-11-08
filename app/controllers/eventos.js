import Ember from 'ember';

var EventosController = Ember.Controller.extend({
  actions: {
    agregarInvitados: function (evento) {
      this.transitionToRoute('agregar-invitados', {id_evento: evento.id});
    }
  }
});

export default EventosController;
