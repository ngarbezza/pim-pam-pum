import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createUser: function() {
      var email = this.get('userEmail');
      var password = this.get('userPassword');

      var user = this.store.createRecord('user', {
        email: email,
        password: password
      });

      user.save();
    }
  }
});
