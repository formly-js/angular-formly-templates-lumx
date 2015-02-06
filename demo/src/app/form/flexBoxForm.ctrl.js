/* in progress */

(function () {
  'use strict';
  angular.module('demo')
    .controller('FlexBoxFormCtrl', FlexBoxFormCtrl);

  function FlexBoxFormCtrl(formFields, contents) {
    var vm = this;
    vm.contents = contents;
    vm.formDataRow = {};
    vm.formDataCol = {};
    vm.formDataSpace = {};
    vm.formFields = formFields();

    vm.formFieldsBoxes = [{
      key: 'box1',
      type: 'lx-checkbox',
      wrapper: 'lx-wrapper-grid',
      templateOptions: {
        label: 'Item 1'
      }
    }, {
      key: 'box2',
      type: 'lx-checkbox',
      wrapper: 'lx-wrapper-grid',
      templateOptions: {
        label: 'Item 2'
      }
    }, {
      key: 'box3',
      type: 'lx-checkbox',
      wrapper: 'lx-wrapper-grid',
      templateOptions: {
        label: 'Item 3'
      }
  }];

    vm.formFieldsCopy = angular.copy(vm.formFields);
    vm.formFieldsBoxesCopy = angular.copy(vm.formFieldsBoxes);

  }


}());
