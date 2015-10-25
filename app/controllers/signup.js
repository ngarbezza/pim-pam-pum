import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations, {

  validations: {
    username: {
      presence: {
        message: 'ingrese el nombre de usuario'
      }
    },
    userEmail: {
      presence: {
        message: 'ingrese el e-mail'
      },
      format: {
        with: /^[\w+\-.]+@[a-z\d\-.]+\.[a-z]+$/i,
        message: 'debe ser una dirección de e-mail válida'
      }
    },
    userPassword: {
      presence: {
        message: 'ingrese la contraseña'
      },
      length: {
        minimum: 8,
        messages: {
          tooShort: 'debe contener como mínimo 8 caracteres'
        }
      },
      confirmation: {
        message: 'deben coincidir las contraseñas'
      }
    },
    userPasswordConfirmation: {
      presence: {
        message: 'ingrese la contraseña'
      }
    }
  },

  actions: {
    createUser: function () {
      var self = this;

      var user = self.store.createRecord('user', {
        username: self.get('username'),
        email: self.get('userEmail'),
        password: self.get('userPassword')
      });

      user.save().then(function () {
        self.transitionToRoute('login');
      }, function () {
        self.set('model', user);
      });
    }
  }
});
