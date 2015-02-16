'use strict';

import SidebarService from './navbar/sidebar.service';
import version from './config/constants';

class NavbarCtrl {
  constructor(version, SidebarService) {
    this.version = version;
    this.sidebar = SidebarService;
    this.navBarLinks = [{
      text: 'Angular-Formly',
      link: 'https://github.com/formly-js/angular-formly'
    }, {
      text: 'LumX',
      link: 'http://ui.lumapps.com/'
    }, {
      text: 'GitHub',
      link: 'https://github.com/formly-js/angular-formly-templates-lumx'
    }];
  }
}

NavbarCtrl.$inject = ['SidebarService', 'version'];

export default angular.module('demo')
  .controller('NavbarCtrl', NavbarCtrl);

