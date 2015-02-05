/* in progress */

(function () {
  'use strict';
  angular.module('demo')
    .controller('GridFormCtrl', GridFormCtrl);

  function GridFormCtrl() {
    var vm = this;
    vm.formFieldsRow = [{
      key: 'rowItem1',
      type: 'lx-text-field',
      wrapper: 'lx-wrapper-grid',
      templateOptions: {
        type: 'text',
        fixedLabel: true,
        label: 'Flex-item = 2',
        gridFlexItem: '2',
        gridFlexOrder: '1'
      }
    }, {
      key: 'rowItem2',
      type: 'lx-text-field',
      wrapper: 'lx-wrapper-grid',
      templateOptions: {
        type: 'text',
        fixedLabel: true,
        label: 'Flex-item = 6',
        gridFlexItem: '6',
        gridFlexOrder: '3'
      }
    }, {
      key: 'rowItem3',
      type: 'lx-text-field',
      wrapper: 'lx-wrapper-grid',
      templateOptions: {
        type: 'text',
        fixedLabel: true,
        label: 'Flex-item = 4',
        gridFlexItem: '4',
        gridFlexOrder: '2'
      }
    }];

  }


}());
