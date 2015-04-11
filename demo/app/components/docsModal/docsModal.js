export default () => {
  require('./docsModal.scss');
  return {
    template: require('./docsModal.html'),
    bindToController: true
  };
};
