(function () {
  'use strict';

  import FormCtrl from './form/form.ctrl';
  import NavCtrl from './nav/nav.ctrl';
  import SidebarService from './nav/sidebar.service';

  angular.module('demo', [
    /* necessary modules */
    'ngMessages',
    'formly',
    'lumx',
    'formly.lumx',
    /* additional */
    'ngSanitize',
    'ui.router',
    'ngPrettyJson'
  ])
    .controller('FormCtrl', FormCtrl)
    .service('SidebarService', SidebarService)
    .controller('NavCtrl', NavCtrl);


  function routerSetup($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  }

  function formRoutes($stateProvider) {
    $stateProvider
      .state('form', {
        url: '/',

        views: {
          'nav@': {
            templateUrl: 'app/nav/nav.html',
            controller: 'NavCtrl as vm'
          },
          'header@': {
            templateUrl: 'app/views/header.html'
          },
          'form@': {
            templateUrl: 'app/form/form.html',
            controller: 'FormCtrl as vm'
          },
          'fields@': {
            templateUrl: 'app/form/fields.html',
            controller: 'FormCtrl as vm'
          }
        }
      });
  }

  angular.module('demo')
    .config(routerSetup)
    .config(formRoutes);


}());
