import Ember from 'ember';
import moment from 'moment';


var EventoDetalleController = Ember.Controller.extend({
  hayConfirmados: Ember.computed.notEmpty('confirmados'),

  fechaFormateada:  function () {
    return moment(this.get('fecha')).format('DD/MM/YYYY');
  }.property('fecha'),

  actions: {
    volver: function () {
      this.transitionToRoute('eventos');
    }
  }
});

export default EventoDetalleController;
