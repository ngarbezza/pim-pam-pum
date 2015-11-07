import Ember from 'ember';
import DS from 'ember-data';
import NonRestAction from './non-rest-action';

Ember.Inflector.inflector.irregular('invitacion', 'invitaciones');

export default DS.Model.extend(NonRestAction, {
  id_evento: DS.attr('number'),
  nombre_evento: DS.attr('string'),
  fecha_evento: DS.attr('date'),
  sin_confirmar: DS.attr('boolean'),
  aceptada: DS.attr('boolean'),
  rechazada: DS.attr('boolean'),
  en_duda: DS.attr('boolean'),

  fechaFormateada: function () {
    return moment(this.get('fecha_evento')).format('DD/MM/YYYY');
  }.property('fecha_evento'),

  aceptar: function () {
    const type = this.constructor.typeKey;
    return this.nonRestAction('aceptar', 'PUT').then((result) => {
      this.store.pushPayload(type, result);
    });
  },

  rechazar: function () {
    const type = this.constructor.typeKey;
    return this.nonRestAction('rechazar', 'PUT').then((result) => {
      this.store.pushPayload(type, result);
    });
  }
});
