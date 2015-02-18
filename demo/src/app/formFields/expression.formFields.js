(function () {
  'use strict';

  angular.module('shmck.formFields.expression', [])
    .service('expressionFormFields', expressionFormFields)
    .config(stateRoutes);

  function expressionFormFields() {
    this.contents = {
      title: 'Expression Properties',
      subhead: '',
      description: ''
    };


    this.formData = {};

    this.fields = function () {
      return [];
    };
  }

  function stateRoutes($stateProvider) {
    $stateProvider
      .state('expression', {
        url: '/expression',
        views: {
          'form@': {
            templateUrl: 'app/form/form.html',
            controller: 'FormCtrl as vm',
            resolve: {
              formFields: function (expressionFormFields) {
                return expressionFormFields.fields;
              },
              contents: function (expressionFormFields) {
                return expressionFormFields.contents;
              },
              formData: function (expressionFormFields) {
                return expressionFormFields.formData;
              }
            }
          }
        }
      });
  }

}());
