import Ember from 'ember';

var LoginRoute = Ember.Route.extend({

  beforeModel: function () {
    if (this.get('session.isAuthenticated')) {
      this.transitionTo('index');
    }
  }
});

export default LoginRoute;
