(function () {
  'use strict';

  angular.module('shmck.formFields.error', [])
    .service('errorFormFields', errorFormFields)
    .directive('iceCream', iceCream)
    .config(stateRoutes);

  /*@ngInject*/
  function errorFormFields($timeout) {
    this.contents = {
      title: 'Error Notification',
      subhead: 'easy validation tools',
      description: '',
      markdownFile: 'app/docs/error.md'
    };

    this.fields = function () {
      return [{
        key: 'email',
        type: 'lx-input',
        wrapper: 'lx-wrapper-errors',
        templateOptions: {
          type: 'email',
          label: 'Email',
          description: 'default html validation & ng-required',
          required: true,
          errors: [{
            name: 'email',
            message: 'That doesn\'t look like a real email address.'
          }, {
            name: 'required',
            message: 'Forgetting something?'
          }]
        },
        modelOptions: {
          allowInvalid: true,
          updateOn: 'default blur keydown',
          debounce: {
            keydown: 500,
            default: 500,
            blur: 0
          }
        }
      }, {
        key: 'password',
        type: 'lx-input',
        wrapper: 'lx-wrapper-errors',
        templateOptions: {
          type: 'password',
          label: 'Password (6-8 characters)',
          description: 'ng-minlength, ng-maxlength',
          required: true,
          errors: [{
            name: 'minlength',
            message: 'Too short!'
          }, {
            name: 'maxlength',
            message: 'Too long!'
          }]
        },
        ngModelAttrs: {
          bound: {
            'ng-minlength': 6,
            'ng-maxlength': 8
          }
        },
        modelOptions: {
          allowInvalid: true,
          updateOn: 'default blur keydown',
          debounce: {
            keydown: 200,
            default: 200,
            blur: 0
          }
        }
      }, {
        key: 'url0',
        type: 'lx-input',
        wrapper: 'lx-wrapper-errors',
        templateOptions: {
          type: 'url',
          label: 'Link to a website (url)',
          description: 'default html validation',
          errors: [{
            name: 'url',
            message: 'For example: http://www.google.com'
          }]
        },
        modelOptions: {
          allowInvalid: false,
          updateOn: 'default blur keydown',
          debounce: {
            keydown: 200,
            default: 200,
            blur: 0
          }
        }
      }, {
        key: 'textPattern',
        type: 'lx-input',
        wrapper: 'lx-wrapper-errors',
        templateOptions: {
          type: 'text',
          label: 'Four letter word',
          description: 'ng-pattern',
          errors: [{
            name: 'pattern',
            message: 'Must be a four letter word.'
          }]
        },
        ngModelAttrs: {
          bound: {
            'ng-pattern': /^[A-Za-z]{4}$/
          }
        },
        modelOptions: {
          allowInvalid: false,
          updateOn: 'default blur keydown',
          debounce: {
            keydown: 0,
            default: 0,
            blur: 0
          }
        }
      //}, {
      //  key: 'customValidator',
      //  type: 'lx-input',
      //  wrapper: 'lx-wrapper-errors',
      //  validators: {
      //    flavorInStock: function (viewValue, modelValue) {
      //      var value = modelValue || viewValue || '';
      //      return $timeout(function () {
      //        var flavors = ['chocolate', 'vanilla', 'strawberry'];
      //        return (flavors.indexOf(value.toLowerCase()) !== -1);
      //      }, 500);
      //    }
      //  },
      //  templateOptions: {
      //    label: 'What\'s your favorite ice cream?',
      //    description: 'Validators. Try: chocolate, vanilla or strawberry',
      //    errors: [{
      //      name: 'flavorInStock',
      //      message: 'Sorry, we don\'t have that flavor.'
      //    }]
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
