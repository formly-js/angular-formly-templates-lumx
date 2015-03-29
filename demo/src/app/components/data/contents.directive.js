(function () {
  'use strict';
  angular.module('demo')
    .directive('shmckContents', shmckContents);

  function shmckContents() {
    return {
      templateUrl: 'app/components/data/contents.tmpl.html',
      scope: {
        content: '='
      }
    };
  }

}());
