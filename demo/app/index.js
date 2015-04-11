'use strict';
require('./vendor')();

angular.module('app', [
  /* angular-formly-templates-lumx dependencies */
  'ngMessages',
  'formly',
  'lumx',
  'formlyLumx',
  /* angular & 3rd party */
  'ngSanitize',
  'ngAnimate',
  'ngTouch',
  'ui.router',
  'btford.markdown',
  /* modules */
  require('./core/layout').name,
  require('./components/_components').name,
  require('./main/main').name,
  require('./fields/_fields.module').name
])
  .constant('version', '1.5.2')
  .config(function routerSetup($urlRouterProvider) {
    $urlRouterProvider
      .otherwise('/input');
  });

