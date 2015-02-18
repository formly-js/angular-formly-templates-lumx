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

    /* toggle sidebar items */
    this.items = [true, true, true];
    this.toggleSidebarItem = function (index) {
      this.items[index] = !this.items[index];
    };
  }


}());
