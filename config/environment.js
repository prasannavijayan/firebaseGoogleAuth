/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'getfit',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    torii: {
      sessionServiceName: 'session'
    },

    firebase: {
      apiKey: 'AIzaSyA3-r3ZN6W-RXgji3fNtYWih9dZbXo9ofo',
      authDomain: 'getfig-7060f.firebaseapp.com',
      databaseURL: 'getfig-7060f.firebaseio.com'
    }

  };

  // contentSecurityPolicy: {
  //   'script-src': "'self' 'unsafe-eval' apis.google.com",
  //   'frame-src': "'self' https://*.firebaseapp.com",
  //   'connect-src': "'self' wss://*.firebaseio.com https://*.googleapis.com"
  // },

  ENV.contentSecurityPolicy = {
    // Deny everything by default
    'default-src': "'none'",

    // Allow scripts at https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js
    'script-src': ["'self' 'unsafe-eval' 'unsafe-inline' data:", "*"],

    // Allow fonts to be loaded from http://fonts.gstatic.com
    'font-src': ["'self' *", "data:"],
    'frame-src': [ "https://*.firebaseapp.com"],

    // Allow data (xhr/websocket) from api.mixpanel.com and custom-api.local
    // 'connect-src': ["'self'", "https://custom-api.local", "https://*.googleapis.com"],
    'connect-src': ["'self' http://localhost:4200", "https://*.googleapis.com", "https://*.google.com"],
    // Allow images from the origin itself (i.e. current domain)
    'img-src': "'self'",

    // Allow CSS loaded from https://fonts.googleapis.com
    'style-src': ["'self'", "https://fonts.googleapis.com"],

    // Omit `media-src` from policy
    // Browser will fallback to default-src for media resources (which is 'none', see above)
    'media-src': null
  }

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
