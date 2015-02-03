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
    'ngPrettyJson'
  ])
    .config(routerSetup)
    .config(formRoutes);

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
          'form@': {
            templateUrl: 'app/form/form.html',
            controller: 'FormCtrl as vm',
            resolve: {
              formFields: function (FormFieldService) {
                return FormFieldService.text;
              }
            }
          }
        }
      })
      .state('text', {
        url: 'text',
        views: {
          'form@': {
            templateUrl: 'app/form/form.html',
            controller: 'FormCtrl as vm',
            resolve: {
              formFields: function (FormFieldService) {
                console.log(FormFieldService.text);
                return FormFieldService.text;
              }
            }
          }
        }
      })
      .state('option', {
        url: 'options',
        views: {
          'form@': {
            templateUrl: 'app/form/form.html',
            controller: 'FormCtrl as vm',
            resolve: {
              formFields: function (FormFieldService) {
                console.log(FormFieldService.option);
                return FormFieldService.option;
              }
            }
          }
        }
      })
      .state('select', {
        url: 'select',
        views: {
          'form@': {
            templateUrl: 'app/form/form.html',
            controller: 'FormCtrl as vm',
            resolve: {
              formFields: function (FormFieldService) {
                console.log(FormFieldService.select);
                return FormFieldService.select;
              }
            }
          }
        }
      });
  }


}());
