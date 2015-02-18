(function () {
  'use strict';

  angular.module('shmck.formFields.expression', [])
    .service('expressionFormFields', expressionFormFields)
    .config(stateRoutes);

  function expressionFormFields() {
    this.contents = {
      title: 'Expression Properties'
    };


    this.formData = {
      showHidden: '',
      disableNextField: ''
    };

    this.fields = function () {
      return [{
        key: 'showHidden',
        type: 'lx-checkbox',
        templateOptions: {
          focus: true,
          label: 'Show Hidden Field'
        }
      }, {
        key: 'hiddenField',
        type: 'lx-title',
        templateOptions: {
          title: 'This Field was Hidden'
        },
        expressionProperties: {
          hide: '!model.showHidden'
        }
      }, {
        key: 'disableNextField',
        type: 'lx-checkbox',
        templateOptions: {
          label: 'Disable Next Field'
        }
      }, {
        key: 'probablyNotNeeded',
        type: 'lx-input',
        templateOptions: {
          label: 'This Field Can Be Disabled',
          fixedLabel: true,
          required: true
        },
        expressionProperties: {
          'templateOptions.disabled': 'model.disableNextField'
        }
      }];
    };
  }

  function stateRoutes($stateProvider) {
    $stateProvider
      .state('expression', {
        url: '/expression',
        views: {
          'form@': {
            templateUrl: 'app/form/form.html',
            controller: 'FormCtrl as vm',
            resolve: {
              formFields: function (expressionFormFields) {
                return expressionFormFields.fields;
              },
              contents: function (expressionFormFields) {
                return expressionFormFields.contents;
              },
              formData: function (expressionFormFields) {
                return expressionFormFields.formData;
              }
            }
          }
        }
      });
  }

}());
