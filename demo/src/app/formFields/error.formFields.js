(function () {
  'use strict';

  angular.module('shmck.formFields.error', [])
    .service('errorFormFields', errorFormFields)
    .directive('iceCream', iceCream)
    .config(stateRoutes);

  function errorFormFields() {
    this.contents = {
      title: 'Error Notification',
      subhead: 'easy validation tools',
      description: '',
      markdownFile: 'app/docs/error.md'
    };

    this.fields = function () {
      return [{
        key: 'requiredDefault',
        type: 'lx-input',
        wrapper: 'lx-wrapper-errors-required',
        templateOptions: {
          type: 'text',
          label: 'Default required field notification',
          required: true
        },
        modelOptions: {
          updateOn: 'default blur',
          debounce: {
            blur: 0
          }
        }
      }, {
        key: 'requiredCustom',
        type: 'lx-input',
        wrapper: 'lx-wrapper-errors-required',
        templateOptions: {
          msg: {
            required: 'Say whatever validation message you\'d like..'
          },
          type: 'text',
          label: 'Custom required field notification',
          required: true
        }
      }, {
        key: 'textDefault',
        type: 'lx-input',
        wrapper: 'lx-wrapper-errors-text',
        templateOptions: {
          type: 'text',
          label: 'Default text errors (min: 4, max: 8)',
          required: true
        },
        ngModelAttrs: {
          bound: {
            'ng-minlength': 4,
            'ng-maxlength': 8
          }
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
        key: 'textCustom',
        type: 'lx-input',
        wrapper: 'lx-wrapper-errors-text',
        templateOptions: {
          type: 'text',
          label: 'Custom text errors (only letters)',
          required: true,
          msg: {
            pattern: 'Only letter characters are allowed.'
          }
        },
        ngModelAttrs: {
          bound: {
            'ng-pattern': /[A-Za-z]/
          }
        },
        modelOptions: {
          allowInvalid: true,
          updateOn: 'default blur keydown',
          debounce: {
            keydown: 0,
            default: 0,
            blur: 0
          }
        }
      }, {
        key: 'numberCustom',
        type: 'lx-input',
        wrapper: 'lx-wrappers-errors-number',
        templateOptions: {
          type: 'number',
          label: 'Try putting letters in this number field',
          required: true,
          msg: {
            number: 'Oops! Must be a number!'
          }
        },
        modelOptions: {
          allowInvalid: true,
          updateOn: 'default blur keydown',
          debounce: {
            keydown: 0,
            default: 0,
            blur: 0
          }
        }
      //}, {
      //  key: 'customValidator',
      //  type: 'lx-text',
      //  wrapper: 'lx-wrapper-errors-custom',
      //  validators: 'iceCream',
      //  templateOptions: {
      //    required: true,
      //    label: 'What\'s your favorite ice cream?',
      //    msg: {
      //      custom: {
      //        name: 'iceCream',
      //        text: 'Sorry, we don\'t have that flavor. Only chocolate, vanilla & strawberry.'
      //      }
      //    }
      //  },
      //  modelOptions: {
      //    allowInvalid: true,
      //    updateOn: 'default blur keydown',
      //    debounce: {
      //      keydown: 800,
      //      default: 800,
      //      blur: 0
      //    }
      //  }
      }, {}];
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
