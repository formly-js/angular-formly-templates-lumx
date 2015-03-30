export default () => {
  return {
    template: require('./contents.html'),
    scope: {
      content: '='
    }
  };
};
