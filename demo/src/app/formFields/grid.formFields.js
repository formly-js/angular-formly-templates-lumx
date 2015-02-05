(function () {
  'use strict';

  angular.module('shmck.formFields.grid', [])
    .service('gridFormFields', gridFormFields)
    .config(stateRoutes);

  function gridFormFields() {
    this.fields = function () {
      return [{
        key: 'item1',
        type: 'lx-text-field',
        templateOptions: {
          type: 'text',
          label: 'Field 1',
          fixedLabel: true
        }
      }, {
        key: 'item2',
        type: 'lx-text-field',
        templateOptions: {
          type: 'text',
          label: 'Field 2',
          fixedLabel: true
        }
      }, {
        key: 'item3',
        type: 'lx-text-field',
        templateOptions: {
          type: 'text',
          label: 'Field 3',
          fixedLabel: true
        }
      }];
    };
  }

  function stateRoutes($stateProvider) {
    $stateProvider
      .state('grid', {
        url: '/grid',
        views: {
          'form@': {
            templateUrl: 'app/form/grid/grid-form.html',
            controller: 'GridFormCtrl as vm'
          }
        }
      });
  }


}());
