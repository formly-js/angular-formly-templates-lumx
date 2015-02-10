(function () {
  'use strict';

  angular.module('shmck.formFields.input', [])
    .service('inputFormFields', inputFormFields)
    .config(stateRoutes);

  function inputFormFields() {
    this.contents = {
      title: 'Input Fields',
      subhead: 'input & textarea',
      description: '',
      markdownFile: 'app/docs/input.md'
    };

    var underlined = { 'text-decoration': 'underline' };

    this.fields = function () {
      return [{
        key: 'inputFieldsTitle',
        type: 'lx-title',
        templateOptions: {
          title: 'Input Fields: ',
          style: underlined
        }
      }, {
        key: 'name',
        type: 'lx-input',
        templateOptions: {
          type: 'text',
          label: 'Name'
        }
      }, {
        key: 'fixedLabel',
        type: 'lx-input',
        templateOptions: {
          type: 'text',
          label: 'This Label Doesn\'t Float',
          fixedLabel: true
        }
      }, {
        key: 'disabledText',
        type: 'lx-input',
        templateOptions: {
          type: 'text',
          label: 'This Field is Disabled',
          fixedLabel: true,
          disabled: true
        }
        //}, {
        //  key: 'icon0',
        //  type: 'lx-text-field',
        //  wrapper: 'lx-wrapper-above',
        //  templateOptions: {
        //    aboveText: 'Icons: ',
        //    aboveStyle: {
        //      'text-decoration': 'underline'
        //    },
        //    icon: 'account',
        //    fixedLabel: true,
        //    label: 'Text Field with an icon'
        //  }
      }, {
        key: 'textAreaTitle',
        type: 'lx-title',
        templateOptions: {
          title: 'Textarea: ',
          style: underlined
        }
      }, {
        key: 'textArea',
        type: 'lx-textarea',
        templateOptions: {
          label: 'Write as much as you\'d like. It\'ll fit.'
        }
      }, {
        key: 'validationTitle',
        type: 'lx-title',
        templateOptions: {
          title: 'Validation: ',
          style: underlined
        }
      }, {
        key: 'email',
        type: 'lx-input',
        wrapper: ['lx-wrapper-errors-required'],
        templateOptions: {
          above: {
            space: true,
            text: 'Validation: ',
            style: underlined
          },
          type: 'email',
          label: 'Email with validation',
          required: true
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
        templateOptions: {
          type: 'password',
          label: 'Password',
          required: true
        },
        wrapper: 'lx-wrapper-errors-required',
        ngModelAttrs: {
          bound: {
            'ng-minlength': 4,
            'ng-maxlength': 16
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
        key: 'url0',
        type: 'lx-input',
        wrapper: 'lx-wrapper-errors-text',
        templateOptions: {
          type: 'url',
          label: 'Write a proper URL',
          help: 'http://www.google.com'
        }
      }, {
        key: 'textPattern',
        type: 'lx-input',
        wrapper: 'lx-wrapper-errors-text',
        templateOptions: {
          type: 'text',
          label: 'Valid Four Letter Word Checker'
        },
        ngModelAttrs: {
          bound: {
            'ng-pattern': /^[A-Za-z]{4}$/
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
      }];
    };
  }

  function stateRoutes($stateProvider) {
    $stateProvider
      .state('input', {
        url: '/input',
        views: {
          'form@': {
            templateUrl: 'app/form/form.html',
            controller: 'FormCtrl as vm',
            resolve: {
              formFields: function (inputFormFields) {
                return inputFormFields.fields;
              },
              contents: function (inputFormFields) {
                return inputFormFields.contents;
              }
            }
          }
        }
      });
  }

}());
