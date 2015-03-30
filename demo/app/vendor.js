export default () => {
  /**
   *  Styles, fonts & icons
   */
  //require('file!./bower_components/mdi/css/materialdesignicons.css');
  require('./index.scss');

  /**
   *  JS
   */
  //require('jquery');
  //require('imports!../bower_components/jquery/dist/jquery.js');
  require('angular');
  require('angular-messages');
  require('angular-animate');
  require('angular-touch');
  require('angular-sanitize');
  require('angular-ui-router');
  require('angular-formly');
  require('velocity-animate');
  //require('moment');
  require('imports?angular!./bower_components/lumx/dist/lumx.js');
  require('imports?angular!./bower_components/angular-formly-templates-lumx/dist/formlyLumx.js');
  //require('imports!./bower_components/showdown/compressed/Showdown.js');
  require('imports?angular!./bower_components/angular-markdown-directive/markdown.js');
};
