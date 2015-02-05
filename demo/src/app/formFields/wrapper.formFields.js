(function () {
  'use strict';

  angular.module('shmck.formFields.wrapper', [])
    .service('wrapperFormFields', wrapperFormFields)
    .config(stateRoutes);

  function wrapperFormFields() {
    this.fields = function () {
      return [{
        key: 'text0',
        type: 'lx-text-field',
        wrapper: 'lx-wrapper-description',
        templateOptions: {
          type: 'text',
          fixedLabel: true,
          label: 'Element with a description wrapper',
          description: 'Add "wrapper: \'lx-wrapper-description\'" to any field.'
        }
      }];
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
