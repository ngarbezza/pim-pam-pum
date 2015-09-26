import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('eventos');
  this.route('login');
  this.route('signup');
});

export default Router;
