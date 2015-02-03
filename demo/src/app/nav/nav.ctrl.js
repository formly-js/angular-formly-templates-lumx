(function () {
  'use strict';

  angular.module('demo')
    .controller('NavCtrl', NavCtrl);

  function NavCtrl(SidebarService) {
    var vm = this;
    this.isCollapsed = true;
    this.sidebar = SidebarService;
    this.outLinks = [{
      text: 'Angular-Formly',
      link: 'https://github.com/formly-js/angular-formly'
    }, {
      text: 'LumX',
      link: 'http://ui.lumapps.com/'
    }, {
      text: 'GitHub',
      link: 'https://github.com/formly-js/angular-formly-templates-lumx'
    }];

    this.navLinks = [{
      state: 'text',
      text: 'Text',
      icon: 'text-format'
    }, {
      state: 'text',
      text: 'Numbers',
      icon: 'plus-one'
    }, {
      state: 'option',
      text: 'Checkboxes',
      icon: 'check-box'
    }, {
      state: 'option',
      text: 'Switches',
      icon: 'radio-button-off'
    }, {
      state: 'option',
      text: 'Radio buttons',
      icon: 'radio-button-on'
    }, {
      state: 'select',
      text: 'Selectors',
      icon: 'arrow-drop-down'
    }, {
      state: 'select',
      text: 'Dates',
      icon: 'today'
    }, {
      state: 'select',
      text: 'Files',
      icon: 'file-upload'
    }];
  }

}());
