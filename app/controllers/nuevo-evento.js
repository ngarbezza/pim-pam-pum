import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    crear: function () {
      var nombreEvento = this.get('nombre');
      var descripcion = this.get('descripcion');
      var fecha = this.get('fecha');

      var evento = this.store.createRecord('Evento', {
        nombre: nombreEvento,
        descripcion: descripcion,
        fecha:fecha
      });
      this.set('model', evento);

      evento.save();
      if(!evento.isError){

        this.set('nombre', undefined);
        this.set('descripcion', undefined);
        this.set('fecha', undefined);
        this.transitionToRoute('eventos');
      }

    }
  }
});
