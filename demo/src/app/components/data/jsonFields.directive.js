(function () {
  'use strict';
  angular.module('demo')
    .directive('shmckJsonFields', shmckJsonFields);

  function shmckJsonFields() {
    return {
      templateUrl: 'app/components/data/jsonFields.tmpl.html',
      scope: {
        fields: '='
      }
    };
  }

}());
