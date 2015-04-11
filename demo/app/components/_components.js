export default angular.module('app.components', [])
  .directive('shmckProgressSpinner', require('./animation/progressSpinner'))
  .directive('shmckFormData', require('./data/formData'))
  .directive('shmckDocsModal', require('./docsModal/docsModal'))
  .directive('shmckJsonFields', require('./jsonFields/jsonFields'))
  .directive('shmckContents', require('./markdown/contents'))
  .directive('shmckContainer', require('./pageStyles/container'))
  .directive('shmckDivider', require('./pageStyles/divider'))
  .filter('prettify', require('./jsonFields/prettify.filter'));
