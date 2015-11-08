/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'pim-pam-pum',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    rollbarToken: '28a64d06be414baabc683f1415742709',
    rollbarVerbose: false,
    rollbarApiHost: 'https://api.rollbar.com',

    //este export es para poder acceder a las variables globales en produccion.
    exportApplicationGlobal: true,

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      LOCALE: 'es' //para internacionalizacion
      // Here you cas pass flags/options to your application instance
      // when it is created
    }
  };

  ENV.googleMap = {
    // your configuration goes here
   // apiKey:'AIzaSyCdnVM8ewS_v5LNPbETVxp7j8EL8oRqJQE'
  }


  if (environment === 'development') {
   /* ENV.contentSecurityPolicy = {
      'script-src': "'self' 'unsafe-eval' https:/*//*.googleapis.com https:/*//*.gstatic.com",
      'img-src': "'self' https:/*//*.googleapis.com https:/*//*.gstatic.com",
      'font-src': "'self' https:/*//*.gstatic.com",
      'style-src': "'self' 'unsafe-inline' https:/*//*.googleapis.com"
    }*/

    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV.APP.hostName = 'http://localhost:3000';
    ENV.rollbarVerbose = true;
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

  if (environment === 'staging') {
    ENV.APP.hostName = 'http://ppp-backend-stg.herokuapp.com';
  }

  if (environment === 'production') {
    ENV.APP.hostName = 'http://pim-pam-pum-backend.herokuapp.com';
  }

  // cross-origin
/*
  ENV.contentSecurityPolicy = {
    'connect-src': "'self' " + ENV.APP.hostName + ' ' + ENV.rollbarApiHost
  };
*/

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

  ENV.contentSecurityPolicy = {
    'connect-src': "'self' " + ENV.APP.hostName + ' ' + ENV.rollbarApiHost + ' ' + 'maps.gstatic.com https://maps.googleapis.com',

    'default-src': "'none'",
    'script-src': "'self' 'unsafe-eval' *.googleapis.com maps.gstatic.com",
    'font-src': "'self' fonts.gstatic.com",
    'img-src': "'self' *.googleapis.com maps.gstatic.com csi.gstatic.com",
    'style-src': "'self' 'unsafe-inline' fonts.googleapis.com maps.gstatic.com"
  };
  return ENV;
};
