/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'pim-pam-pum',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV.APP.hostName = 'http://localhost:3000';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.APP.hostName = 'http://pim-pam-pum-backend.herokuapp.com';
  }

  // cross-origin
  ENV.contentSecurityPolicy = {
    'connect-src': "'self' " + ENV.APP.hostName
  };

  //
  ENV['simple-auth'] = {
    authenticator: 'authenticator:pimpampum',
    authorizer: 'authorizer:pimpampum',
    crossOriginWhitelist: [ENV.APP.hostName]
  };

  ENV['simple-auth-token'] = {
    serverTokenEndpoint: ENV.APP.hostName + '/api/sessions',
    identificationField: 'email',
    passwordField: 'password',
    tokenPropertyName: 'auth_token'
  };

  return ENV;
};
