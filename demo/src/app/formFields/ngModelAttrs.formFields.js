(function () {
  'use strict';

  angular.module('shmck.formFields.ngModelAttrs', [])
    .service('ngModelAttrsFormFields', ngModelAttrsFormFields)
    .config(stateRoutes);

  function ngModelAttrsFormFields() {
    this.contents = {
      title: 'ngModelAttrs',
      subhead: 'coming soon...',
      docsLink: 'http://formly-js.github.io/angular-formly/#/example/very-advanced/ngModelAttrs'
    };

    this.formData = {};

    this.fields = function () {
      return [{}];
    };
  }

  function stateRoutes($stateProvider) {
    $stateProvider
      .state('ngModelAttrs', {
        url: '/ngModelAttrs',
        views: {
          'form@': {
            templateUrl: 'app/form/form.html',
            controller: 'FormCtrl as vm',
            resolve: {
              formFields: function (ngModelAttrsFormFields) {
                return ngModelAttrsFormFields.fields;
              },
              contents: function (ngModelAttrsFormFields) {
                return ngModelAttrsFormFields.contents;
              },
              formData: function (ngModelAttrsFormFields) {
                return ngModelAttrsFormFields.formData;
              }
            }
          }
        }
      });
  }

}());
