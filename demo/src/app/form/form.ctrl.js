(function () {
  'use strict';

  angular.module('demo')
    .controller('FormCtrl', FormCtrl);

  function FormCtrl(LxDialogService, formFields) {
    var vm = this;
    vm.formData = {};
    vm.formFields = formFields;

    vm.submit = function () {
      LxDialogService.open();
    };

    vm.prettyJson = function (formFields) {
      return angular.toJson(formFields);
    };



  }

}());
