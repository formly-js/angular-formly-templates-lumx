export default () => {
  return {
    template: require('./container.html'),
    scope: {
      title: '@',
      bgc: '@'
    },
    transclude: true
  };
};
