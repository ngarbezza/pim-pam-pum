import Ember from 'ember';
import AuthenticatedRoute from './authenticated-route';

var EventosRoute = Ember.Route.extend(AuthenticatedRoute, {

  model: function () {
    return this.store.query('evento', {});
  }
});

export default EventosRoute;
