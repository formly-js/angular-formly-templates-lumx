'use strict';

import SidebarService from './navbar/sidebar.service';

function shmckSidebar() {
  var sidebarLinks = [{
    divider: 'TYPES',
    state: 'input',
    text: 'Inputs'
  }, {
    state: 'checkbox',
    text: 'Checkboxes'
  }, {
    state: 'switch',
    text: 'Switches'
  }, {
    state: 'radio',
    text: 'Radio buttons'
  }, {
    state: 'select',
    text: 'Selectors'
  }, {
    state: 'datePicker',
    text: 'Date Picker'
  }, {
    divider: 'WRAPPERS',
    state: 'error',
    text: 'Errors'
  }, {
    state: 'theme',
    text: 'Themes'
  }, {
    state: 'flex',
    text: 'FlexBox'
  }, {
    divider: 'FEATURES',
    state: 'ngModelAttrs',
    text: 'ngModelAttrs'
  }];

  class shmckSidebarCtrl {
    constructor() {
      this.sidebarLinks = sidebarLinks;
      this.sidebar = SidebarService;
    }
  }
  shmckSidebarCtrl.$inject = ['SidebarService'];

  return {
    scope: {
      items: '@'
    },
    templateUrl: 'app/navbar/sidebar.tmpl.html',
    controllerAs: 'vm',
    bindToController: true,
    controller: shmckSidebarCtrl
  };
}


export default angular.module('demo')
  .directive('shmckSidebar', shmckSidebar);
