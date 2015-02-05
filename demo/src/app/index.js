(function () {
  'use strict';

  angular.module('demo', [
    /* necessary modules */
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
      .otherwise('/text');
    $locationProvider.html5Mode(true);
  }


}());
