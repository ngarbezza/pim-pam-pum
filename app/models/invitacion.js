import Ember from 'ember';
import DS from 'ember-data';

Ember.Inflector.inflector.irregular('invitacion', 'invitaciones');

export default DS.Model.extend({
  id_evento: DS.attr('number'),
  nombre_evento: DS.attr('string'),
  fecha_evento: DS.attr('date'),
  confirmado: DS.attr('boolean')
});
