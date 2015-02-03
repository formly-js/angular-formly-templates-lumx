'use strict';
/*jshint esnext: true */

import SidebarService from './sidebar.service';

class NavCtrl {
  constructor(SidebarService) {
    this.isCollapsed = true;
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
      state: 'state1',
      text: 'Text',
      icon: 'collections'
    }, {
      state: 'state3',
      text: 'Numbers',
      icon: 'account-circle'
    }, {
      state: 'state3',
      text: 'Checkboxes',
      icon: 'account-circle'
    }, {
      state: 'state3',
      text: 'Switches',
      icon: 'account-circle'
    }, {
      state: 'state3',
      text: 'Radio buttons',
      icon: 'account-circle'
    }, {
      state: 'state3',
      text: 'Selectors',
      icon: 'account-circle'
    }, {
      state: 'state3',
      text: 'Dates',
      icon: 'account-circle'
    }, {
      state: 'state3',
      text: 'Files',
      icon: 'account-circle'
    }];
    //this.sidebar = SidebarService;

    this.sidebarIsShown = false;
  }

  toggleSidebar() {
    this.sidebarIsShown = !this.sidebarIsShown;
  }

  isSidebarShown() {
    return this.sidebarIsShown;
  }
}

NavCtrl.$inject = ['SidebarService'];

export default NavCtrl;
