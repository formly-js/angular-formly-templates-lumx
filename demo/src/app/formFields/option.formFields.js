(function () {
  'use strict';

  angular.module('shmck.formFields.option', [])
    .service('optionFormFields', optionFormFields)
    .config(stateRoutes);

  function optionFormFields() {
    this.fields = function () {
      return [{
        key: 'subCheckbox',
        type: 'lx-subhead',
        templateOptions: {
          subhead: 'Checkboxes:',
          style: {'text-decoration': 'underline'}
        }
      }, {
        key: 'checkbox0',
        type: 'lx-checkbox',
        value: false,
        templateOptions: {
          label: 'Show Missing Box'
        }
      }, {
        key: 'checkbox1',
        type: 'lx-checkbox',
        value: true,
        templateOptions: {
          label: 'Hidden Pre-checked Box',
          checked: true
        },
        expressionProperties: {
          hide: '!model.checkbox0'
        }
      }, {
        key: 'checkbox2',
        type: 'lx-checkbox',
        value: false,
        templateOptions: {
          label: 'Checkbox with Helper',
          help: 'Explaining a little more'
        }
      }, {
        key: 'checkbox3',
        type: 'lx-checkbox',
        value: true,
        templateOptions: {
          label: 'Disabled Box',
          disabled: true
        }
      }, {
        key: 'subSwitch',
        type: 'lx-subhead',
        templateOptions: {
          subhead: 'Switches:',
          style: {'text-decoration': 'underline'}
        }
      }, {
        key: 'switch0',
        type: 'lx-switch',
        templateOptions: {
          label: 'Untouched Switch'
        }
      }, {
        key: 'switch1',
        type: 'lx-switch',
        templateOptions: {
          label: 'Switched Switch',
          checked: true
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
        key: 'subRadio',
        type: 'lx-subhead',
        templateOptions: {
          subhead: 'Radio Buttons:',
          style: {'text-decoration': 'underline'}
        }
      }, {
        key: 'radio0',
        type: 'lx-radio-buttons',
        templateOptions: {
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
        type: 'lx-radio-buttons',
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
              }
            }
          }
        }
      });
  }


}());
