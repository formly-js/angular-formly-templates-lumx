(function () {
  'use strict';
    angular.module('demo')
  .directive('docsModal', docsModal)

  function docsModal() {
    return {
      templateUrl: 'app/directives/docsModal.tmpl.html',
      bindToController: true
    };
  }

}());
