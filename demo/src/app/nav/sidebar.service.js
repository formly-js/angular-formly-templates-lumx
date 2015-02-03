(function () {
  'use strict';

  angular.module('demo')
    .service('SidebarService', SidebarService);

  function SidebarService() {
    this.sidebarIsShown = false;

    this.toggleSidebar = function () {
      this.sidebarIsShown = !this.sidebarIsShown;
    };
    this.isSidebarShown = function () {
      return this.sidebarIsShown;
    };
  }


}());
