import DS from 'ember-data';
import Ember from 'ember';

var Invitado = DS.Model.extend({
  nombreUsuario: DS.attr('string'),
  displayName: Ember.computed.alias('nombreUsuario')
});

export default Invitado;
