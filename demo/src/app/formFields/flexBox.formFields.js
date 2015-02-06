(function () {
  'use strict';

  angular.module('shmck.formFields.flexBox', [])
    .service('flexBoxFormFields', flexBoxFormFields)
    .config(stateRoutes);

  function flexBoxFormFields() {
    this.contents = {
      title: 'FlexBox Wrappers',
      subhead: 'Make it fit',
      description: '',
      markdownFile: 'app/docs/flexbox.md'
    };

    this.fields = function () {
      return [{
        key: 'rowItem1',
        type: 'lx-text-field',
        wrapper: 'lx-wrapper-grid',
        templateOptions: {
          type: 'text',
          fixedLabel: true,
          label: 'Item 1'
        }
      }, {
        key: 'rowItem2',
        type: 'lx-text-field',
        wrapper: 'lx-wrapper-grid',
        templateOptions: {
          type: 'text',
          fixedLabel: true,
          label: 'Item 2'
        }
      }, {
        key: 'rowItem3',
        type: 'lx-text-field',
        wrapper: 'lx-wrapper-grid',
        templateOptions: {
          type: 'text',
          fixedLabel: true,
          label: 'Item 3'
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
            controller: 'FlexBoxFormCtrl as vm',
            resolve: {
              formFields: function (flexBoxFormFields) {
                return flexBoxFormFields.fields;
              },
              contents: function (flexBoxFormFields) {
                return flexBoxFormFields.contents;
              }
            }
          }
        }
      });
  }


}());
