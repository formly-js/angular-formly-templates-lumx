(function () {
  'use strict';

  angular.module('demo')
    .controller('FormCtrl', FormCtrl);

  function FormCtrl(formFields, contents) {
    var vm = this;
    vm.contents = contents;
    vm.formData = {};
    vm.formFields = formFields();
    vm.prettyJson = formFields();
  }

}());
