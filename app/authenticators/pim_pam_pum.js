import TokenAuthenticator from 'simple-auth-token/authenticators/token';

export default TokenAuthenticator.extend({

  getAuthenticateData: function(credentials) {
    var authenticationRoot = {};
    var authentication = {};
    authentication[this.passwordField] = credentials.password;
    authentication[this.identificationField] = credentials.identification;
    authenticationRoot['user'] = authentication;
    return authenticationRoot;
  },

  invalidate: function(data) {
    var self = this;
    return new Ember.RSVP.Promise(function(resolve, reject) {
      self.makeLogoutRequest().then(function(response) {
        Ember.run(function() {
          resolve(response);
        });
      }, function(xhr) {
        Ember.run(function() {
          reject(xhr.responseJSON || xhr.responseText);
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
        var parsed_session = JSON.parse(localStorage['ember_simple_auth:session']);
        xhr.setRequestHeader('Accept', settings.accepts.json);
        xhr.setRequestHeader('X-User-Email', parsed_session['secure']['user_email']);
        xhr.setRequestHeader('X-Auth-Token', parsed_session['secure']['auth_token']);
      },
      headers: this.headers
    });
  }
});
