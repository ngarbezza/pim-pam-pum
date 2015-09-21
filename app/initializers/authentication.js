import PimPamPumAuthenticator from '../authenticators/pim_pam_pum';
import PimPamPumAuthorizer from '../authorizers/pim_pam_pum';

export default {
  name:       'authentication',
  before:     'simple-auth',
  initialize: function(container, application) {
    application.register('authenticator:pimpampum', PimPamPumAuthenticator);
    application.register('authorizer:pimpampum', PimPamPumAuthorizer);
  }
};
