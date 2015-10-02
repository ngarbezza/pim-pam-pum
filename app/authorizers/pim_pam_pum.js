import Base from 'simple-auth/authorizers/base';

export default Base.extend({
  authorize: function(jqXHR) {
    var parsed_session = JSON.parse(localStorage['ember_simple_auth:session']);
    jqXHR.setRequestHeader("X-User-Email", parsed_session['secure']['user_email']);
    jqXHR.setRequestHeader("X-Auth-Token", parsed_session['secure']['auth_token']);
  }
});
