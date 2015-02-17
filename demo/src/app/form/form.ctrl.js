(function () {
  'use strict';

  angular.module('demo')
    .controller('FormCtrl', FormCtrl);

  function FormCtrl(formFields, contents, formData, LxDialogService) {
    var vm = this;
    vm.contents = contents;
    vm.formData = formData || {};
    vm.formFields = formFields();

    vm.prettyJson = formFields();

    vm.openDialog = function () {
      LxDialogService.open('docsModal');
    };
  }

}());
