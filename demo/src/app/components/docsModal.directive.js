(function () {
  'use strict';
    angular.module('demo')
  .directive('shmckDocsModal', shmckDocsModal);

  function shmckDocsModal() {
    return {
      templateUrl: 'app/components/docsModal.tmpl.html',
      bindToController: true
    };
  }

}());
