(function () {
  'use strict';

  angular.module('shmck.formFields.inline', [])
    .service('inlineFormFields', inlineFormFields)
    .config(stateRoutes);

  function inlineFormFields() {
    this.contents = {
      title: 'Inline Wrapper',
      //docsLink: 'http://formly-js.github.io/angular-formly/#/example/intro/expression-properties'
    };


    this.formData = {

    };

    this.fields = function () {
      return [];
    };
  }

  function stateRoutes($stateProvider) {
    $stateProvider
      .state('inline', {
        url: '/inline',
        views: {
          'form@': {
            templateUrl: 'app/form/form.html',
            controller: 'FormCtrl as vm',
            resolve: {
              formFields: function (inlineFormFields) {
                return inlineFormFields.fields;
              },
              contents: function (inlineFormFields) {
                return inlineFormFields.contents;
              },
              formData: function (inlineFormFields) {
                return inlineFormFields.formData;
              }
            }
          }
        }
      });
  }

}());
