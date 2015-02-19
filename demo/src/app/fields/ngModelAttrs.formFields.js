(function () {
  'use strict';

  angular.module('shmck.formFields.ngModelAttrs', [])
    .service('ngModelAttrsFormFields', ngModelAttrsFormFields)
    .config(stateRoutes);

  function ngModelAttrsFormFields() {
    this.contents = {
      title: 'ngModelAttrs',
      docsLink: 'http://formly-js.github.io/angular-formly/#/example/very-advanced/ngModelAttrs',
      description: 'app/notes/ngModelAttrsDescription.md'
    };

    this.formData = {};

    this.fields = function () {
      return [{
        "key": "password",
        "type": "lx-input",
        "wrapper": "lx-wrapper-errors",
        "templateOptions": {
          "type": "password",
          "label": "Password (6-8 characters)",
          "minlength": 6,
          "maxlength": 8,
          "required": true
        },
        "validation": {
          "messages": [
            {
              "name": "minlength",
              "message": "Password must be 6 characters or longer."
            },
            {
              "name": "maxlength",
              "message": "Password must not be longer than 8 characters."
            }
          ]
        },
        "ngModelAttrs": {
          "minlength": {
            "bound": "ng-minlength",
            "attribute": "minlength"
          },
          "maxlength": {
            "bound": "ng-maxlength",
            "attribute": "maxlength"
          }
        },
        "modelOptions": {
          "allowInvalid": false
        }
      }];
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
