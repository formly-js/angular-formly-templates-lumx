class SidebarService {
  constructor() {
    this.sidebarIsShown = false;
    this.items = [false, true, true];
  }

  toggleSidebar() {
    this.sidebarIsShown = !this.sidebarIsShown;
  }

  isSidebarShown() {
    return this.sidebarIsShown;
  }

  toggleSidebarItem(index) {
    this.items[index] = !this.items[index];
  }
}

export default SidebarService;
