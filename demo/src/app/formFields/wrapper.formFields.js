(function () {
  'use strict';

  angular.module('shmck.formFields.wrapper', [])
    .service('wrapperFormFields', wrapperFormFields)
    .config(stateRoutes);

  function wrapperFormFields() {
    this.fields = function () {
      return [];
    };
  }

  function stateRoutes($stateProvider) {
    $stateProvider
      .state('wrapper', {
        url: '/wrapper',
        views: {
          'form@': {
            templateUrl: 'app/form/form.html',
            controller: 'FormCtrl as vm',
            resolve: {
              formFields: function (wrapperFormFields) {
                return wrapperFormFields.fields;
              }
            }
          }
        }
      });
  }


}());
