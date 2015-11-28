export default () => {
  /**
   *  Styles, fonts & icons
   */
  //require('node-bourbon');
  //require('node-mdi');
  require('./index.scss');

  /**
   *  JS
   */
  global.$ = global.jQuery = require('jquery');
  require('jquery.transit');
  require('velocity-animate');
  require('angular');
  require('angular-messages');
  require('angular-animate');
  require('angular-touch');
  require('angular-sanitize');
  require('angular-ui-router');
  require('angular-formly');
  global.moment = require('moment');
  //require('../node_modules/node-mdi/materialdesignicons.min.css');
  require('imports?angular!./bower_components/lumx/dist/lumx.js');
  require('imports?angular!./bower_components/angular-formly-templates-lumx/dist/formlyLumx.js');
  require('imports?angular!./bower_components/angular-markdown-directive/markdown.js');
};
