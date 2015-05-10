/* jshint ignore:start */
const name = 'fileInput';

function fields() {
  this.contents = {
    title: 'File Input'
  };

  this.formData = {};

  this.fields = function () {
    return [{
      key: 'someFile',
      type: 'lx-file-input',
      templateOptions: {
        controller: 'worker',
        controllerAs: 'workerCtrl',
        uploadFunction: 'fileUpload(e, this.options)',
        downloadBtn: 'Download',
        replaceBtn: 'Delete/Replace',
        label: 'This is some file input'
      }
    }, {
      template: '<p>Special thanks to SagiMedina@Gmail.com for this example!</p>'
    }];
  };
}

// add lx-file-input custom template by SagiMedina@Gmail.com
function fileInputConfig(formlyConfigProvider) {
  formlyConfigProvider.setType({
    name: 'lx-file-input',
    template: require('./file-input.html')
  });
}
// fileUpload directive by SagiMedina@Gmail.com
function fileInput($compile) {

  function link(scope, element, attrs) {
    directive.controller = attrs.controller;
    directive.controllerAs = attrs.controllerAs;
    var htmlText = '<lx-file-input ' +
      'change="'+attrs.controllerAs+'.'+attrs.uploadFunction+'" ' +
      'label="'+attrs.label+'"></lx-file-input>';
    element.replaceWith($compile(htmlText)(scope));
  }

  var directive = {
    restrict: 'E',
    link: link
  };
  return directive;
}

// example using s3uploadFile, disabled for the sake of my server
function worker($q, LxProgressService, $scope) { // , s3upload
  var vm = this;
  vm.worker = {};
  vm.formData = {};
  vm.fileUpload = fileUpload;

  function activate() {
    $scope.$on('fileChange', function(event, data){
      LxProgressService.linear.hide('#'+data.model);
      vm.worker[data.model] = {};
      vm.worker[data.model].url = data.value.replace(/%2F/g, '/');
      vm.worker[data.model].hasFile = true;
    });
    activate();
  }

  function fileUpload(file, options){
    var model = options.key;
    LxProgressService.linear.show('#5fa2db', '#'+model);
    //$q.when(s3upload.uploadFile(file, vm.worker.id)).then(function(url){
    //  var data = { model: model, value: url.data};
    //  $scope.$emit('fileChange', data);
    //});
  }
}

// routes
function stateRoutes($stateProvider) {
  $stateProvider
    .state(`${name}`, {
      url: `/${name}`,
      views: {
        'form@': {
          template: require('main/main.html'),
          controller: 'MainCtrl as vm',
          resolve: {
            formFields: function (fileInputFF) {
              return fileInputFF.fields;
            },
            contents: function (fileInputFF) {
              return fileInputFF.contents;
            },
            formData: function (fileInputFF) {
              return fileInputFF.formData;
            }
          }
        }
      }
    });
}

export default angular.module(`shmck.formFields.advanced.${name}`, [])
  .service(`${name}FF`, fields)
  .config(stateRoutes)
  .config(fileInputConfig)
  .directive('fileUpload', fileInput);
/* jshint ignore:end */
