(function () {
  'use strict';

  angular.module('shmck.formFields.flexBox', [])
    .service('fleBoxFormFields', flexBoxFormFields)
    .config(stateRoutes);

  function flexBoxFormFields() {
    this.contents = {
      title: 'FlexBox Wrappers',
      subhead: 'Make it fit',
      description: ''
    };

    this.fields = function () {
      return [{
        key: 'item1',
        type: 'lx-text-field',
        templateOptions: {
          type: 'text',
          label: 'Field 1'
        }
      }, {
        key: 'item2',
        type: 'lx-text-field',
        templateOptions: {
          type: 'text',
          label: 'Field 2'
        }
      }, {
        key: 'item3',
        type: 'lx-text-field',
        templateOptions: {
          type: 'text',
          label: 'Field 3'
        }
      }];
    };
  }

  function stateRoutes($stateProvider) {
    $stateProvider
      .state('flex-box', {
        url: '/flex-box',
        views: {
          'form@': {
            templateUrl: 'app/form/flex-box-form.html',
            controller: 'FlexBoxFormCtrl as vm'
          },
          contents: function (flexBoxFormFields) {
            return flexBoxFormFields.contents;
          }
        }
      });
  }


}());
