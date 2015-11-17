import Ember from 'ember';
import AuthenticatedRoute from './authenticated-route';

var InvitacionesRoute = Ember.Route.extend(AuthenticatedRoute, {

  model: function () {
    return this.store.query('invitacion', {});
  }
});

export default InvitacionesRoute;
