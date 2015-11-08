import Ember from 'ember';

export default Ember.Controller.extend({

  invitadosAAgregar: Ember.A([]),

  actions: {
    invitadoElegido: function(item) {
      this.set('selection', item);
      console.log("gracias por elegirme, no te vas a arrepentir. " + item.get('displayName'));
      this.get('invitadosAAgregar').pushObject(item);
    },
    enviarInvitaciones: function () {
      console.log("invitando a toda la gilada: " + this.get('invitadosAAgregar'));
    }
  }
});
