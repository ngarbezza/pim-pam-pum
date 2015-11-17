import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('eventos');
  this.route('nuevo-evento');
  this.route('login');
  this.route('signup');
  this.route('logout');
  this.route('invitaciones');
  this.route('clima');

  this.route('invitacion-detalle', {path:'/eventos/:id_evento/invitacion'});
  this.route('evento-detalle', {path:'/eventos/:id/detalles'});
  this.route('agregar-invitados', {path:'/eventos/:id/agregar-invitados'});
});

export default Router;
