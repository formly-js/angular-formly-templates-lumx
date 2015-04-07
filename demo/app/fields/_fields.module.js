export default angular.module('shmck.formFields', [
  /* TYPES */
  require('./switch').name,
  require('./radio').name,
  require('./select').name,
  require('./datePicker').name,
  require('./input').name,
  require('./dropdown').name,
  require('./flex').name,
  require('./checkbox').name,
  /* WRAPPERS */
  require('./themes').name,
  require('./inline').name,
  require('./error').name,
  /* FEATURES */
  require('./modelOptions').name,
  require('./validators').name,
  require('./expression').name,
  require('./ngModelAttrs').name,
  require('./controllerLink').name,
  require('./watcher').name,
  /* ADVANCED */
  require('./advanced/_advanced').name
]);

