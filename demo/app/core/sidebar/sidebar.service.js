class SidebarService {
  constructor() {
    this.sidebarIsShown = false;
    this.items = [false, false, true, false];
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
