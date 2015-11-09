import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    verDetalleInvitacion: function (invitacion) {
      this.transitionToRoute('invitacion-detalle', invitacion.get('id_evento'));
    },
    aceptar: function (invitacion) {
      invitacion.aceptar();
    },
    rechazar: function (invitacion) {
      invitacion.rechazar();
    }
  }
});
