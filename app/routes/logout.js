import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function () {
    var self = this;
    this.get('session').invalidate().then(function () {
      self.transitionTo('login');
    }, function (reason) {
      console.log('failed logout request');
      console.log(reason);
    })
  }
});
