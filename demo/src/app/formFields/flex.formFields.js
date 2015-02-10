(function () {
  'use strict';

  angular.module('shmck.formFields.flex', [])
    .service('flexFormFields', flexFormFields)
    .config(stateRoutes);

  function flexFormFields() {
    this.contents = {
      title: 'FlexBox Wrappers',
      subhead: 'coming soon!',
      description: '',
      markdownFile: 'app/docs/flex.md'
    };

    this.fields = function () {
      return [{
        'key': 'row',
        type: 'lx-flex',
        templateOptions: {
          flex: {
            container: 'row',
            align: 'space-between'
          },
          'fields': [{
            key: 'rowItem1',
            type: 'lx-input',
            wrapper: 'lx-wrapper-flex-item',
            templateOptions: {
              flex: {
                item: 1
              },
              type: 'text',
              fixedLabel: true,
              label: 'space-between row'
            }
          }, {
            key: 'rowItem2',
            type: 'lx-input',
            wrapper: 'lx-wrapper-flex-item',
            templateOptions: {
              flex: {
                item: 2
              },
              type: 'text',
              fixedLabel: true,
              label: 'Row'
            }
          }, {
            key: 'rowItem3',
            type: 'lx-input',
            wrapper: 'lx-wrapper-flex-item',
            templateOptions: {
              flex: {
                item: 3
              },
              type: 'text',
              fixedLabel: true,
              label: 'Row'
            }
          }]
        }
      }, {
        'key': 'row',
        type: 'lx-flex',
        templateOptions: {
          flex: {
            container: 'column',
            align: 'space-between center',
            gutter: 24
          },
          'fields': [{
            key: 'columnItem1',
            type: 'lx-input',
            wrapper: 'lx-wrapper-flex-item',
            templateOptions: {
              flex: {
                item: 1
              },
              type: 'text',
              fixedLabel: true,
              label: 'space-between center'
            }
          }, {
            key: 'columnItem2',
            type: 'lx-input',
            wrapper: 'lx-wrapper-flex-item',
            templateOptions: {
              flex: {
                item: 2
              },
              type: 'text',
              fixedLabel: true,
              label: 'Column'
            }
          }, {
            key: 'columnItem3',
            type: 'lx-input',
            wrapper: 'lx-wrapper-flex-item',
            templateOptions: {
              flex: {
                item: 3
              },
              type: 'text',
              fixedLabel: true,
              label: 'Column'
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
            templateUrl: 'app/form/form-flex.html',
            controller: 'FormCtrl as vm',
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
