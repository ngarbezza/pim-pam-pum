import DS from 'ember-data';
import moment from 'moment';

var evento = DS.Model.extend({
  nombre: DS.attr('string'),
  direccion: DS.attr('string'),
  descripcion: DS.attr('string'),
  fecha: DS.attr('date'),
  fechaFormateada: function () {
    return moment(this.get('fecha')).format('DD/MM/YYYY');
  }.property('fecha')
});

export default evento;
