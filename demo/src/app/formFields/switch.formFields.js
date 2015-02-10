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


    this.fields = function () {
      return [{
        key: 'switch0',
        type: 'lx-switch',
        templateOptions: {
          label: 'Untouched Switch'
        }
      }, {
        key: 'switch1',
        type: 'lx-switch',
        ngModelAttrs: {
          bound: {
            'ng-checked': true
          }
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
              }
            }
          }
        }
      });
  }

}());
