import TokenAuthenticator from 'simple-auth-token/authenticators/token';

export default TokenAuthenticator.extend({
  invalidate: function(data) {
    console.log('invalidate')
  }
});
