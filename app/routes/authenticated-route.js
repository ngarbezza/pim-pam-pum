import Ember from 'ember';

var AuthenticatedRoute = Ember.Mixin.create({

  beforeModel: function () {
    if (!this.get('session.isAuthenticated')) {
      this.transitionTo('login');
    }
  },

  actions: {
    error: function (err) {
      if (err && err.errors && err.errors[0] === 'Unauthorized Request') {
        return this.transitionTo('logout');
      }
      return true;
    }
  }
});

export default AuthenticatedRoute;
