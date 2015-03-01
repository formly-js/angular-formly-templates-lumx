'use strict';

module.exports = function(config) {

  config.set({
    autoWatch : false,

    files: [
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-messages/angular-messages.js',
      'bower_components/angular-markdown-directive/markdown.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-formly/dist/formly.js',
      'bower_components/angular-formly-templates-lumx/src/modules/angular-formly-templates-lumx.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/lumx/dist/lumx.js',
      'bower_components/velocity/velocity.js',
      'src/app/index.js',
      'src/app/**/*.js',
      'src/app/**/*.html'
    ],

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    plugins : [
      'karma-phantomjs-launcher',
      'karma-jasmine'
    ]
  });
};
