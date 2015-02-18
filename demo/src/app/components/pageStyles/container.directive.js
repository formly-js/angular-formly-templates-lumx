(function () {
  'use strict';
  angular.module('demo')
    .directive('shmckContainer', shmckContainer);

  function shmckContainer() {
    return {
      templateUrl: 'app/components/pageStyles/container.tmpl.html',
      scope: {
        title: '@',
        bgc: '@'
      },
      transclude: true
    };
  }

}());
