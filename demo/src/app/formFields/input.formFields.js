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
