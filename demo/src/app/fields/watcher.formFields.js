(function () {
  'use strict';

  angular.module('shmck.formFields.watcher', [])
    .service('watcherFormFields', watcherFormFields)
    .config(stateRoutes);

  function watcherFormFields() {
    this.contents = {
      title: 'Watchers',
      subhead: 'coming soon...',
      docsLink: 'https://github.com/formly-js/angular-formly#watcher-objectarray-of-watches'
    };

    this.formData = {};

    this.fields = function () {
      return [{
        key: 'comingSoon',
        type: 'lx-input',
        templateOptions: {
          label: 'coming soon...'
        }
      }];
    };
  }

  function stateRoutes($stateProvider) {
    $stateProvider
      .state('watcher', {
        url: '/watcher',
        views: {
          'form@': {
            templateUrl: 'app/form/form.html',
            controller: 'FormCtrl as vm',
            resolve: {
              formFields: function (watcherFormFields) {
                return watcherFormFields.fields;
              },
              contents: function (watcherFormFields) {
                return watcherFormFields.contents;
              },
              formData: function (watcherFormFields) {
                return watcherFormFields.formData;
              }
            }
          }
        }
      });
  }

}());
