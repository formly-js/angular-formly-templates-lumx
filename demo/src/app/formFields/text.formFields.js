(function () {
  'use strict';

  angular.module('shmck.formFields.text', [])
    .service('textFormFields', textFormFields)
    .config(stateRoutes);

  function textFormFields() {
    this.contents = {
      title: 'Text Form Fields',
      subhead: '',
      description: '',
      markdownFile: 'app/docs/text.md'
    };

    var underlined = { 'text-decoration': 'underline' };

    this.fields = function () {
      return [{
        key: 'name',
        type: 'lx-text',
        wrapper: 'lx-wrapper-above',
        templateOptions: {
          above: {
            text: 'Text Fields: ',
            style: underlined
          },
          type: 'text',
          label: 'Name'
        }
      }, {
        key: 'fixedLabel',
        type: 'lx-text',
        templateOptions: {
          type: 'text',
          label: 'This Label Doesn\'t Float',
          fixedLabel: true
        }
      }, {
        key: 'disabledText',
        type: 'lx-text',
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
        key: 'textArea',
        type: 'lx-textarea',
        wrapper: 'lx-wrapper-above',
        templateOptions: {
          above: {
            space: true,
            text: 'Textarea: ',
            style: underlined
          },
          label: 'Write as much as you\'d like. It\'ll fit.'
        }
      }, {
        key: 'email',
        type: 'lx-text',
        wrapper: ['lx-wrapper-above', 'lx-wrapper-errors-required'],
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
        type: 'lx-text',
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
        type: 'lx-text',
        wrapper: 'lx-wrapper-errors-text',
        templateOptions: {
          type: 'url',
          label: 'Write a proper URL',
          help: 'http://www.google.com'
        }
      }, {
        key: 'textPattern',
        type: 'lx-text',
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
      .state('text', {
        url: '/',
        views: {
          'form@': {
            templateUrl: 'app/form/form.html',
            controller: 'FormCtrl as vm',
            resolve: {
              formFields: function (textFormFields) {
                return textFormFields.fields;
              },
              contents: function (textFormFields) {
                return textFormFields.contents;
              }
            }
          }
        }
      });
  }

}());
