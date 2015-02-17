(function () {
  'use strict';

  angular.module('shmck.formFields.switch', [])
    .service('switchFormFields', switchFormFields)
    .config(stateRoutes);

  function switchFormFields() {
    this.contents = {
      title: 'Switch',
      subhead: '',
      description: '',
      markdownFile: 'app/docs/switch.md'
    };

    this.formData = {
      regularSwitch: '',
      hiddenSwitch: '',
      checkedSwitch: '',
      helperSwitch: '',
      disabledSwitch: '',
      disabledCheckedSwitch: ''
    };

    this.fields = function () {
      return [{
        key: 'regularSwitch',
        type: 'lx-switch',
        templateOptions: {
          label: 'Regular switch'
        }
      }, {
        key: 'hiddenSwitch',
        type: 'lx-switch',
        templateOptions: {
          label: 'Triggered Switch'
        },
        expressionProperties: {
          hide: '!model.switchNormal'
        }
      }, {
        key: 'checkedSwitch',
        type: 'lx-switch',
        templateOptions: {
          label: 'Switched Switch',
          checked: true
        }
      }, {
        key: 'helperSwitch',
        type: 'lx-switch',
        templateOptions: {
          label: 'Switch with Helper',
          description: 'Explaining a little more'
        }
      }, {
        key: 'disabledSwitch',
        type: 'lx-switch',
        templateOptions: {
          label: 'Disabled Switch',
          disabled: true
        }
      }, {
        key:'disabledCheckedSwitch',
        type: 'lx-switch',
        templateOptions: {
          label: 'Disabled & Checked Switch',
          disabled: true,
          checked: true
        }
      }];
    };
  }

  function stateRoutes($stateProvider) {
    $stateProvider
      .state('switch', {
        url: '/switch',
        views: {
          'form@': {
            templateUrl: 'app/form/form.html',
            controller: 'FormCtrl as vm',
            resolve: {
              formFields: function (switchFormFields) {
                return switchFormFields.fields;
              },
              contents: function (switchFormFields) {
                return switchFormFields.contents;
              },
              formData: function (switchFormFields) {
                return switchFormFields.formData;
              }
            }
          }
        }
      });
  }

}());
