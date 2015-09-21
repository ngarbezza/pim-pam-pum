import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    logout: function() {
      var self = this;
      this.get('session').invalidate().then(function () {
        self.transitionToRoute('login');
      }, function (reason) {
        console.log('failed logout request');
        console.log(reason);
      })
    }
  }
});
