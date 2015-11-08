import DS from 'ember-data';
import Ember from 'ember';

var Invitado = DS.Model.extend({
  nombre_usuario: DS.attr('string'),
  displayName: Ember.computed.alias('nombre_usuario')
});

export default Invitado;
