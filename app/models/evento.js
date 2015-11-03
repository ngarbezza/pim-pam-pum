import DS from 'ember-data';

var evento = DS.Model.extend({
  nombre: DS.attr('string'),
  descripcion: DS.attr('string'),
  fecha: DS.attr('date')
});

export default evento;
