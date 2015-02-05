/* in progress */

(function () {
  'use strict';
  angular.module('demo')
    .controller('GridFormCtrl', GridFormCtrl);

  function GridFormCtrl() {
    var vm = this;
    vm.formDataRow = {};
    vm.formDataCol = {};
    vm.formDataSpace = {};
    vm.formFields = [{
      key: 'rowItem1',
      type: 'lx-text-field',
      wrapper: 'lx-wrapper-grid',
      templateOptions: {
        type: 'text',
        fixedLabel: true,
        label: 'Item 1'
      }
    }, {
      key: 'rowItem2',
      type: 'lx-text-field',
      wrapper: 'lx-wrapper-grid',
      templateOptions: {
        type: 'text',
        fixedLabel: true,
        label: 'Item 2'
      }
    }, {
      key: 'rowItem3',
      type: 'lx-text-field',
      wrapper: 'lx-wrapper-grid',
      templateOptions: {
        type: 'text',
        fixedLabel: true,
        label: 'Item 3'
      }
    }];

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
