import TokenAuthenticator from 'simple-auth-token/authenticators/token';
import Ember from 'ember';

export default TokenAuthenticator.extend({

  getAuthenticateData: function(credentials) {
    var authenticationRoot = {};
    var authentication = {};
    authentication[this.passwordField] = credentials.password;
    authentication[this.identificationField] = credentials.identification;
    authenticationRoot['user'] = authentication;
    return authenticationRoot;
  },

  invalidate: function() {
    var self = this;
    return new Ember.RSVP.Promise(function(resolve, reject) {
      self.makeLogoutRequest().then(function(response) {
        Ember.run(function() {
          resolve(response);
        });
      }, function() {
        Ember.run(function() {
          resolve();
        });
      });
    });
  },

  makeLogoutRequest: function () {
    return Ember.$.ajax({
      url: this.serverTokenEndpoint,
      method: 'DELETE',
      data: '',
      dataType: 'json',
      contentType: 'application/json',
      beforeSend: function(xhr, settings) {
        xhr.setRequestHeader('Accept', settings.accepts.json);
      },
      headers: this.headers
    });
  }
});
