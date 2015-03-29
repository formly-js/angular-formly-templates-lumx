(function () {
  'use strict';

  angular.module('demo')
    .controller('FormCtrl', FormCtrl);

  function FormCtrl(formFields, contents, formData, LxDialogService) {
    var vm = this;
    vm.contents = contents;
    console.log(contents);
    vm.formData = formData || {};
    vm.formFields = formFields();
    vm.submit = function () {
      alert(JSON.stringify(vm.formData));
    };

    // JSON form fields
    vm.currentItem = 0;
    vm.jsonFields = formFields();

    // doc modal
    vm.openDialog = function () {
      LxDialogService.open('docsModal');
    };
  }

}());
