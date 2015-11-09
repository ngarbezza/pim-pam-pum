import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations, {

  validations: {
    nombre: {
      presence: {
        message: 'ingrese el nombre del evento'
      }
    },
    fecha: {
      presence: {
        message: 'ingrese la fecha y hora'
      }
    },
    direccion: {
      presence: {
        message: 'ingrese la dirección'
      }
    }
  },

  actions: {
    crear: function () {
      var nombreEvento = this.get('nombre');
      var descripcion = this.get('descripcion');
      var fecha = this.get('fecha');
      var direccion = this.get('direccion');

      var evento = this.store.createRecord('evento', {
        nombre: nombreEvento,
        descripcion: descripcion,
        fecha: fecha,
        direccion: direccion
      });
      this.set('model', evento);

      var self = this;
      evento.save().then(function () {
        self.set('nombre', '');
        self.set('descripcion', '');
        self.set('fecha', '');
        self.set('direccion', '');
        self.transitionToRoute('eventos');
      }, function () {
        self.set('model', evento);
      });
    }
  }
});
