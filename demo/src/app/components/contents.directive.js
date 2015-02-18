(function () {
  'use strict';
  angular.module('demo')
    .directive('shmckContents', shmckContents);

  function shmckContents() {
    return {
      templateUrl: 'app/components/contents.tmpl.html',
      scope: {
        contents: '='
      }
    };
  }

}());
