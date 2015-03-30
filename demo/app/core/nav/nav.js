export default () => {
  require('./nav.scss');
  return {
    restrict: 'E',
    controller: require('./nav.ctrl'),
    controllerAs: 'vm',
    template: require('./nav.html')
  };
};
