import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    aceptar: function (invitacion) {
      invitacion.aceptar();
    },
    rechazar: function (invitacion) {
      invitacion.rechazar();
    }
  }
});
