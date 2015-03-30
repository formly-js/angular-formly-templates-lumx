export default () => {
  require('./jsonFields.scss');
  return {
    template: require('./jsonFields.html'),
    scope: {
      fields: '='
    }
  };
};
