(function () {
  'use strict';

  angular.module('shmck.formFields.grid', [])
    .service('gridFormFields', gridFormFields)
    .config(stateRoutes);

  function gridFormFields() {
    this.fields = function () {

      /* in progress */


      return [];
    };
  }

  function stateRoutes($stateProvider) {
    $stateProvider
      .state('grid', {
        url: '/grid',
        views: {
          'form@': {
            templateUrl: 'app/form/formGrid.html',
            controller: 'GridFormCtrl as vm'
          }
        }
      });
  }


}());
