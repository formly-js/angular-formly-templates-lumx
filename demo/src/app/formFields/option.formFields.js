(function () {
  'use strict';

  angular.module('shmck.formFields.option', [])
    .service('optionFormFields', optionFormFields)
    .config(stateRoutes);

  function optionFormFields() {
    this.contents = {
      title: 'Option Pickers',
      subhead: 'Checkboxes, Switches, Radio buttons',
      description: '',
      markdownFile: 'app/docs/option.md'
    };

    this.fields = function () {
      return [{
        key: 'checkbox0',
        type: 'lx-checkbox',
        wrapper: 'lx-wrapper-above',
        templateOptions: {
          above: {
            text: 'Checkboxes: ',
            style: {
              'text-decoration': 'underline'
            }
          },
          label: 'Show Missing Box',
        }
      }, {
        key: 'checkbox1',
        type: 'lx-checkbox',
        templateOptions: {
          label: 'Hidden Box'
        },
        expressionProperties: {
          hide: '!model.checkbox0'
        }
      }, {
        key: 'checkbox2',
        type: 'lx-checkbox',
        ngModelAttrs: {
          bound: {
            'ng-checked': true
          }
        },
        templateOptions: {
          label: 'Checkbox with Helper',
          help: 'Explaining a little more'
        },
        expressionProperties: {}
      }, {
        key: 'checkbox3',
        type: 'lx-checkbox',
        templateOptions: {
          label: 'Disabled Box',
          disabled: true
        }
      }, {
        key: 'switch0',
        type: 'lx-switch',
        wrapper: 'lx-wrapper-above',
        templateOptions: {
          above: {
            space: true,
            text: 'Switches: ',
            style: {
              'text-decoration': 'underline'
            }
          },
          label: 'Untouched Switch'
        }
      }, {
        key: 'switch1',
        type: 'lx-switch',
        ngModelAttrs: {
          'ng-checked': true
        },
        templateOptions: {
          label: 'Switched Switch'
        }
      }, {
        key: 'switch2',
        type: 'lx-switch',
        templateOptions: {
          label: 'Switch with Helper',
          help: 'Explaining a little more'
        }
      }, {
        key: 'switch3',
        type: 'lx-switch',
        templateOptions: {
          label: 'Disabled Switch',
          disabled: true
        }
      }, {
        key: 'radio0',
        type: 'lx-radio',
        wrapper: 'lx-wrapper-above',
        templateOptions: {
          above: {
            space: true,
            text: 'Radio Buttons',
            style: {'text-decoration': 'underline'}
          },
          label: 'What\'s your favorite number?',
          options: [{
            name: 'One',
            value: 1
          }, {
            name: 'Seven',
            value: 7
          }, {
            name: 'Thirteen',
            value: 13,
            disabled: true
          }]
        }
      }, {
        key: 'radio1',
        type: 'lx-radio',
        templateOptions: {
          label: 'What\'s your least favorite number?',
          options: [{
            name: 'One',
            value: 1,
            help: 'The First'
          }, {
            name: 'Seven',
            value: 7,
            help: 'The Lucky One'
          }, {
            name: 'Thirteen',
            value: 13,
            help: 'The Unlucky One',
            disabled: true
          }]
        }
      }];
    };
  }

  function stateRoutes($stateProvider) {
    $stateProvider
      .state('option', {
        url: '/option',
        views: {
          'form@': {
            templateUrl: 'app/form/form.html',
            controller: 'FormCtrl as vm',
            resolve: {
              formFields: function (optionFormFields) {
                return optionFormFields.fields;
              },
              contents: function (optionFormFields) {
                return optionFormFields.contents;
              }

            }
          }
        }
      });
  }


}());
