(function () {
  'use strict';

  angular.module('shmck.formFields.flex', [])
    .service('flexFormFields', flexFormFields)
    .config(stateRoutes);

  function flexFormFields() {
    this.contents = {
      title: 'FlexBox Wrappers',
      subhead: 'Make it fit',
      description: 'Coming soon!',
      markdownFile: 'app/docs/flex.md'
    };

    this.fields = function () {
      return [{
        'key': 'row',
        type: 'lx-wrapper-flex-container',
        //'wrapper': 'lx-wrapper-flex-container',
        templateOptions: {
          flexContainer: {
            container: 'row',
            align: 'space-between'
          },
          'fields': [{
            key: 'rowItem1',
            type: 'lx-text',
            templateOptions: {
              type: 'text',
              fixedLabel: true,
              label: 'Item 1'
            }
          }, {
            key: 'rowItem2',
            type: 'lx-text',
            templateOptions: {
              type: 'text',
              fixedLabel: true,
              label: 'Item 2'
            }
          }, {
            key: 'rowItem3',
            type: 'lx-text',
            templateOptions: {
              type: 'text',
              fixedLabel: true,
              label: 'Item 3'
            }
          }]
        }
      }];
    };
  }

  function stateRoutes($stateProvider) {
    $stateProvider
      .state('flex', {
        url: '/flex',
        views: {
          'form@': {
            templateUrl: 'app/form/flex-form.html',
            controller: 'FlexFormCtrl as vm',
            resolve: {
              formFields: function (flexFormFields) {
                return flexFormFields.fields;
              },
              contents: function (flexFormFields) {
                return flexFormFields.contents;
              }
            }
          }
        }
      });
  }

}());
