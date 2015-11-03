import Ember from 'ember';

var AuthenticatedRoute = Ember.Mixin.create({

  beforeModel: function () {
    if (!this.get('session.isAuthenticated')) {
      this.transitionTo('login');
    }
  }
});

export default AuthenticatedRoute;
