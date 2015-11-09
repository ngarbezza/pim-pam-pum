import Ember from 'ember';

export default Ember.Controller.extend({

  evento: Ember.computed.alias('model'),

  invitadosAAgregar: Ember.A([]),

  sugerenciasParams: function () {
    return { id_evento: this.get('evento').get('id') };
  }.property('evento'),

  actions: {
    invitadoElegido: function(item) {
      this.set('selection', item);
      if (item) {
        var invitadoYaAgregado = this.get('invitadosAAgregar').some(function (invitado) {
          return invitado.get('nombreUsuario') === item.get('displayName');
        });
        if (!invitadoYaAgregado) {
          this.get('invitadosAAgregar').pushObject(item);
        }
      }
    },
    enviarInvitaciones: function () {
      var invitarPath = window.PimPamPum.hostName + '/api/invitaciones/invitar';
      var invitarParams = {
        id_evento: this.get('evento').get('id'),
        nombres_de_usuario: this.get('invitadosAAgregar').map(function (invitado) {
          return invitado.get('nombreUsuario');
        })
      };
      Ember.$.post(invitarPath, invitarParams).then(function () {
        console.log('invitaciones enviadas correctamente');
      }, function (error) {
        console.log('fallo el envío de invitaciones');
        console.log(error);
      });
    }
  }
});
