(function () {
  'use strict';

  angular.module('demo', [
    /* angular-formly-templates-lumx dependencies */
    'ngMessages',
    'formly',
    'lumx',
    'formlyLumx',
    /* angular & 3rd party */
    'ngSanitize',
    'ngResource',
    'ngAnimate',
    'ui.router',
    'ngPrettyJson',
    'btford.markdown',
    /* modules */
    'shmck.formFields'
  ])
    .config(routerSetup).
    constant('version', '1.0.15');

  function routerSetup($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/input');
  }

}());
