import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    authenticate: function() {
      var credentials = this.getProperties('identification', 'password'),
        authenticator = 'simple-auth-authenticator:token';

      var self = this;
      this.get('session').authenticate(authenticator, credentials).then(function (value) {
        self.transitionToRoute('eventos');
      }, function (reason) {
        console.log(reason);
      });
    }
  }
});
