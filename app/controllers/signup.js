import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations, {

  validations: {
    userEmail: {
      presence: true,
      format: {
        with: /^[\w+\-.]+@[a-z\d\-.]+\.[a-z]+$/i,
        message: 'debe ser una dirección de e-mail válida'
      }
    },
    userPassword: {
      presence: true,
      length: {minimum: 8}
    },
    userPasswordConfirmation: {
      presence: true
    }
  },

  actions: {
    createUser: function () {
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
