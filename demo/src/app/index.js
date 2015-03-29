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
    'ngTouch',
    'ui.router',
    'btford.markdown',
    /* modules */
    'shmck.formFields'
  ])
    .config(routerSetup).
    constant('version', '2.0.0');

  function routerSetup($urlRouterProvider) {
    $urlRouterProvider
      .otherwise('/input');
  }

}());
