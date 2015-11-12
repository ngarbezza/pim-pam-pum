import Ember from 'ember';

var AuthenticatedRoute = Ember.Mixin.create({

  beforeModel: function () {
    if (!this.get('session.isAuthenticated')) {
      this.transitionTo('login');
    }
  },

  actions: {
    error: function (err) {
      // error handler global
      console.log(err);
      this.transitionTo('logout');
    }
  }
});

export default AuthenticatedRoute;
