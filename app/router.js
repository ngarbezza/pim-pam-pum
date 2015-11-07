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
  this.route('query');

  this.resource('evento', {path:'/eventos/:id_evento'});
  this.route('authenticated_route');
});

export default Router;
