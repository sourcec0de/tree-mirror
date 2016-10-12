// Karma configuration
var webpack = require('webpack');

var configSettings = {
  normal: {},
  uglified: {
    plugins: [
      new webpack.optimize.UglifyJsPlugin()
    ]
  }
}

module.exports = function(config) {
  config.set({

    // Base path, that will be used to resolve files and exclude
    basePath: '',

    // Frameworks to use
    frameworks: ['jasmine'],

    // List of files / patterns to load in the browser
    files: [
      '../../build/tree-mirror.js',
      '*.test.js'
    ],

    // List of preprocessors
    preprocessors: {
      'test/*': ['webpack'],
    },

    // Webpack options
    webpack: {
      resolve: {
        extensions: ['*', '.js']
      },
      module: {}
    },

    webpackMiddleware: {
      stats: {
        colors: true
      }
    },

    // Test results reporter to use
    // Other possible values: 'dots', 'progress', 'junit', 'growl', 'coverage', 'spec'
    reporters: ['spec'],

    // Web server port
    port: 9876,

    // Enable / disable colors in the output (reporters and logs)
    colors: true,

    // Logging level
    //
    // possible values:
    // config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN
    // config.LOG_INFO    || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['Chrome'],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,

    // Continuous Integration mode
    // if true, it captures browsers, run tests and exit
    singleRun: true,

    // List plugins explicitly, since autoloading karma-webpack
    // won't work here
    plugins: [
      require('karma-mocha'),
      require('karma-jasmine'),
      require('karma-spec-reporter'),
      require('karma-chrome-launcher'),
      require('karma-webpack')
    ]
  })
}
