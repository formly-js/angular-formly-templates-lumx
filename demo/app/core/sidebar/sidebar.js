class SidebarCtrl {
  constructor(SidebarService) {
    this.sidebarLinks = require('../sidebarMenu.json');
    this.sidebar = SidebarService;
  }
}
SidebarCtrl.$inject = ['SidebarService'];

export default () => {
  return {
    scope: {
      items: '@'
    },
    template: require('./sidebar.html'),
    controllerAs: 'vm',
    bindToController: true,
    controller: SidebarCtrl
  };
};
