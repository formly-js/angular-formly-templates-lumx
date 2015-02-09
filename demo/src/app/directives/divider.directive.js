(function () {
  'use strict';
  angular.module('demo')
    .directive('shmckDivider', shmckDivider);

  function shmckDivider() {
    return {
      template: '<span class="shmck-divider"></span>'
    };
  }
}());
