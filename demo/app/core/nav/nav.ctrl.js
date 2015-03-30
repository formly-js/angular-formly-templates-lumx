class NavCtrl {
  constructor(SidebarService, version) {
    this.sidebar = SidebarService;
    this.version = version;
    this.links = require('../navMenu.json');
  }
}
NavCtrl.$inject = ['SidebarService', 'version'];

export default NavCtrl;
