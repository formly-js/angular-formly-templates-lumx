'use strict';


function docsModal() {
  return {
    templateUrl: 'app/directives/docsModal.tmpl.html',
    bindToController: true
  };
}

export default angular.module('demo')
  .directive('docsModal', docsModal);
