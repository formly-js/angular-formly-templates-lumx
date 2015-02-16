'use strict';


function shmckDivider() {
  return {
    template: '<span class="shmck-divider"></span>'
  };
}

export default angular.module('demo')
  .directive('shmckDivider', shmckDivider);
