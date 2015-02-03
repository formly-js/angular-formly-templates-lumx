'use strict';

class SidebarService {
  constructor() {
    this.sidebarIsShown = false;
  }
  toggleSidebar() {
    this.sidebarIsShown = !this.sidebarIsShown;
  }
  isSidebarShown() {
    return this.sidebarIsShown;
  }
}

export default SidebarService;
