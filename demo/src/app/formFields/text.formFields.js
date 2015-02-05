(function () {
  'use strict';

  angular.module('shmck.formFields.text', [])
    .service('textFormFields', textFormFields)
    .config(stateRoutes);

  function textFormFields() {
    this.fields = function () {
      return [{
        key: 'subEmail',
        type: 'lx-subhead',
        templateOptions: {
          subhead: 'Text Fields:',
          class: 'fs-headline',
          style: {
            'text-decoration': 'underline'
          }
        }
      }, {
        key: 'email',
        type: 'lx-text-field',
        templateOptions: {
          type: 'email',
          label: 'Email',
          required: true
        },
        wrapper: 'lx-wrapper-error-required',
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
        type: 'lx-text-field',
        templateOptions: {
          type: 'password',
          label: 'Password',
          required: true,
          minlength: 4,
          maxlength: 16
        },
        wrapper: 'lx-wrapper-error-required',
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
        key: 'fixedLabel',
        type: 'lx-text-field',
        templateOptions: {
          type: 'text',
          label: 'This Label Doesn\'t Float',
          fixedLabel: true
        }
      }, {
        key: 'textArea',
        type: 'lx-textarea',
        templateOptions: {
          label: 'Textarea: Write as much as you\'d like'
        }
      }, {
        key: 'url0',
        type: 'lx-text-field',
        templateOptions: {
          type: 'url',
          label: 'Write a proper URL',
          help: 'http://www.google.com'
        },
        wrapper: 'lx-wrapper-errors-text'
      }, {
        key: 'disabledText',
        type: 'lx-text-field',
        templateOptions: {
          type: 'text',
          label: 'This Field is Disabled',
          disabled: true,
          fixedLabel: true
        }
      }, {
        key: 'textPattern',
        type: 'lx-text-field',
        templateOptions: {
          type: 'text',
          label: 'Valid Four Letter Word Checker',
          pattern: /^[A-Za-z]{4}$/
        },
        wrapper: 'lx-wrapper-errors-text',
        modelOptions: {
          allowInvalid: true,
          updateOn: 'default blur keydown',
          debounce: {
            keydown: 0,
            default: 0,
            blur: 0
          }
        }
      }];
    };
  }

  function stateRoutes($stateProvider) {
    $stateProvider
      .state('text', {
        url: '/',
        views: {
          'form@': {
            templateUrl: 'app/form/form.html',
            controller: 'FormCtrl as vm',
            resolve: {
              formFields: function (textFormFields) {
                return textFormFields.fields;
              }
            }
          }
        }
      });
  }

}());
