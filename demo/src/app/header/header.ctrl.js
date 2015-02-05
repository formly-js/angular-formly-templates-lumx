(function () {
  'use strict';
  angular.module('demo')
    .controller('HeaderLinkCtrl', HeaderLinkCtrl);

  function HeaderLinkCtrl() {
    var vm = this;
    vm.links = [{
      state: 'text',
      title: 'Text'
    }, {
      state: 'option',
      title: 'Options'
    }, {
      state: 'select',
      title: 'Selectors'
    }, {
      state: 'wrapper',
      title: 'Wrappers'
    }, {
      state: 'grid',
      title: 'Grid'
    }];
  }

}());
