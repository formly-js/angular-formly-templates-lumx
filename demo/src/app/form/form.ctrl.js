(function () {
  'use strict';

  angular.module('demo')
    .controller('FormCtrl', FormCtrl);

  function FormCtrl(formFields) {
    var vm = this;
    vm.formData = {};
    vm.formFields = formFields();
    vm.prettyJson = formFields();
  }

}());
