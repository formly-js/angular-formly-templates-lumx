(function () {
  'use strict';
  angular.module('demo')
    .directive('shmckDescription', shmckDescription);

  function shmckDescription() {
    return {
      templateUrl: 'app/components/data/description.tmpl.html',
      scope: {
        contents: '='
      }
    };
  }

}());
