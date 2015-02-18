(function () {
  'use strict';
  angular.module('demo')
    .directive('shmckProgressSpinner', shmckProgressSpinner);

  /*@ngInject*/
  function shmckProgressSpinner(LxProgressService, $timeout) {
    return {
      scope: {
        items: '='
      },
      template: '<div id="progress"></div>',
      /*@ngInject*/
      link: function (scope) {
        LxProgressService.circular.show('#5fa2db', '#progress');

        scope.$watch('items', function () {
          if (scope.items) {
            $timeout(function () {
              LxProgressService.circular.hide();
            }, 200);
          }
        });
      }
    };
  }

}());
