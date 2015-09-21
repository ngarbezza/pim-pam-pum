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
    console.log('invalidate')
  }
});
