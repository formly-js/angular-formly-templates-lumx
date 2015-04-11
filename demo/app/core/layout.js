export default angular.module('app.layout', [])
  .service('SidebarService', require('./sidebar/sidebar.service'))
  .directive('shmckNav', require('./nav/nav'))
  .directive('shmckSidebar', require('./sidebar/sidebar'));
