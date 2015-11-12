import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function () {
    var self = this;
    this.get('session').invalidate().then(function () {
      self.transitionTo('login');
    });
  }
});
