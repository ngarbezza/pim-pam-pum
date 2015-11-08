/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var config = require('./config/environment')(EmberApp.env());

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    inlineContent: {
      rollbar : {
        file: "bower_components/rollbar/dist/rollbar.snippet.js",
        postProcess: function(content) {
          return 'var _rollbarConfig = { accessToken: "' +
            config.rollbarToken + '", verbose: "' +
            config.rollbarVerbose + '", captureUncaught: true, payload: { environment: "' +
            config.environment + '" } };\n' + content;
        }
      }
    },

    'ember-bootstrap-datetimepicker': {
      //"importBootstrapCSS": true,
      "importBootstrapJS": true,
      "importBootstrapTheme": true
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.



  // for glyphicons
  app.import('bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js');
  app.import('bower_components/bootstrap-sass-official/assets/fonts/bootstrap/glyphicons-halflings-regular.woff', {
    destDir: 'fonts/bootstrap/'
  });

  app.import('vendor/gmaps.js');

  return app.toTree();
};
