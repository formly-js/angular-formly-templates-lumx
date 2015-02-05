(function () {
  'use strict';

  angular.module('demo', [
    /* angular-formly-templates-lumx dependencies */
    'ngMessages',
    'formly',
    'lumx',
    'formly.lumx',
    /* additional */
    'ngSanitize',
    'ui.router',
    'ngPrettyJson',
    /* modules */
    'shmck.formFields'
  ])
    .config(routerSetup);

  function routerSetup($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');
    //$locationProvider.html5Mode(true);
  }


}());
