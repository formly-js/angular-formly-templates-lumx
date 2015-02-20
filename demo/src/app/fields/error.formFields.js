(function () {
  'use strict';

  angular.module('shmck.formFields.error', [])
    .service('errorFormFields', errorFormFields)
    .directive('iceCream', iceCream)
    .config(stateRoutes);

  /*@ngInject*/
  function errorFormFields() {
    this.contents = {
      title: 'Error Notification',
      subhead: 'easy validation tools',
      docFile: 'app/docs/error.md',
      description: 'app/notes/errorDescription.md'
    };

    this.formData = {
      email: '',
      password: '',
      url: '',
      textPattern: ''
    };

    this.fields = function () {
      return [{
        key: 'email',
        type: 'lx-input',
        wrapper: 'lx-wrapper-errors',
        templateOptions: {
          type: 'email',
          label: 'Email    |  html email validation & ng-required',
          fixedLabel: true,
          required: true
        },
        validation: {
          messages: [{
            name: 'email',
            message: 'That doesn\'t look like a real email address.'
          }, {
            name: 'required',
            message: 'Forgetting something?'
          }]
        },
        modelOptions: {
          allowInvalid: false
        }
      }, {
        key: 'url',
        type: 'lx-input',
        wrapper: 'lx-wrapper-errors',
        templateOptions: {
          type: 'url',
          fixedLabel: true,
          label: 'Link to a website (url)    |  html url validation'
        },
        validation: {
          messages: [{
            name: 'url',
            message: 'For example: http://www.google.com'
          }]
        },
        modelOptions: {
          allowInvalid: false
        }
      //}, {
      //  key: 'textPattern',
      //  type: 'lx-input',
      //  wrapper: 'lx-wrapper-errors',
      //  templateOptions: {
      //    type: 'text',
      //    fixedLabel: true,
      //    label: 'Four letter word    |  pattern',
      //    pattern: /^[a-zA-Z]{4}$/,
      //    required: true
      //  },
      //  validation: {
      //    messages: [{
      //      name: 'pattern',
      //      message: 'Must be a four letter word.'
      //    }]
      //  },
      //  ngModelAttrs: {
      //    pattern: {
      //      attribute: 'pattern'
      //    }
      //  }
      }];
    };
  }

  function stateRoutes($stateProvider) {
    $stateProvider
      .state('error', {
        url: '/errors',
        views: {
          'form@': {
            templateUrl: 'app/form/form.html',
            controller: 'FormCtrl as vm',
            resolve: {
              formFields: function (errorFormFields) {
                return errorFormFields.fields;
              },
              contents: function (errorFormFields) {
                return errorFormFields.contents;
              },
              formData: function (errorFormFields) {
                return errorFormFields.formData;
              }
            }
          }
        }
      });
  }

  function iceCream() {
    return {
      restrict: "A",
      require: "?ngModel",
      link: function (scope, element, attributes, ngModel) {
        ngModel.$validators.iceCream = function (modelValue) {
          var flavors = ['chocolate', 'vanilla', 'strawberry'];
          return flavors.indexOf(modelValue.toLowerCase()) !== -1;
        };
      }
    };
  }

}());
