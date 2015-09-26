import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations, {

  validations: {
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
      var email = this.get('userEmail');
      var password = this.get('userPassword');

      var user = this.store.createRecord('user', {
        email: email,
        password: password
      });
      this.set('model', user)

      user.save();
      console.log('model' + this.get('model'))
      console.log('modelErrors' +this.get('model.errors'))
      if(user.errors == undefined){
        this.transitionToRoute('login');
      }



    }
  }
});
