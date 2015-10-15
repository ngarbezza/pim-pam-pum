import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations, {

  validations: {
    identification: {
      presence: {
        message: 'ingrese el e-mail'
      },
      format: {
        with: /^[\w+\-.]+@[a-z\d\-.]+\.[a-z]+$/i,
          message: 'debe ser una dirección de e-mail válida'
      }
    },
    password: {
      presence: {
        message: 'ingrese la contraseña'
      },
      length: {
        minimum: 8,
        messages: {
          tooShort: 'debe contener como mínimo 8 caracteres'
        }
      }
    }
  },
  actions: {
    authenticate: function() {
      var credentials = this.getProperties('identification', 'password'),
        authenticator = 'authenticator:pimpampum';

      var self = this;
      this.get('session').authenticate(authenticator, credentials).then(function () {
        self.set('loginErrors', false);
        self.transitionToRoute('eventos');
      }, function () {
        self.set('loginErrors', true);
      });
    }
  }
});
