(function () {
  'use strict';

  angular.module('shmck.formFields.checkbox', [])
    .service('checkboxFormFields', checkboxFormFields)
    .config(stateRoutes);

  function checkboxFormFields() {
    this.contents = {
      title: 'Checkbox',
      subhead: '',
      description: '',
      markdownFile: 'app/docs/checkbox.md'
    };


    this.fields = function () {
      return [{
        key: 'checkbox0',
        type: 'lx-checkbox',
        templateOptions: {
          label: 'Show Missing Box'
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
        }
      }, {
        key: 'checkbox3',
        type: 'lx-checkbox',
        templateOptions: {
          label: 'Disabled Box',
          disabled: true
        }
      }];
    };
  }

  function stateRoutes($stateProvider) {
    $stateProvider
      .state('checkbox', {
        url: '/checkbox',
        views: {
          'form@': {
            templateUrl: 'app/form/form.html',
            controller: 'FormCtrl as vm',
            resolve: {
              formFields: function (checkboxFormFields) {
                return checkboxFormFields.fields;
              },
              contents: function (checkboxFormFields) {
                return checkboxFormFields.contents;
              }
            }
          }
        }
      });
  }

}());
