(function () {
  'use strict';

  angular.module('shmck.formFields.flex', [])
    .service('flexFormFields', flexFormFields)
    .config(stateRoutes);

  function flexFormFields() {
    this.contents = {
      title: 'FlexBox Wrappers',
      subhead: 'coming soon',
      description: '',
      markdownFile: 'app/docs/flex.md'
    };

    this.fields = function () {
      return [{
        key: 'rowTitle',
        type: 'lx-title',
        templateOptions: {
          title: 'container: row, align: space-between'
        }
      }, {
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
              type: 'text',
              fixedLabel: true,
              label: 'Row'
            }
          }, {
            key: 'rowItem2',
            type: 'lx-input',
            wrapper: 'lx-wrapper-flex-item',
            templateOptions: {
              type: 'text',
              fixedLabel: true,
              label: 'Row'
            }
          }, {
            key: 'rowItem3',
            type: 'lx-input',
            wrapper: 'lx-wrapper-flex-item',
            templateOptions: {
              type: 'text',
              fixedLabel: true,
              label: 'Row'
            }
          }]
        }
      }, {
        key: 'colTitle',
        type: 'lx-title',
        templateOptions: {
          title: 'container: column, align: space-between'
        }
      }, {
        'key': 'column',
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
              type: 'text',
              fixedLabel: true,
              label: 'Column'
            }
          }, {
            key: 'columnItem2',
            type: 'lx-input',
            wrapper: 'lx-wrapper-flex-item',
            templateOptions: {
              type: 'text',
              fixedLabel: true,
              label: 'Column'
            }
          }, {
            key: 'columnItem3',
            type: 'lx-input',
            wrapper: 'lx-wrapper-flex-item',
            templateOptions: {
              type: 'text',
              fixedLabel: true,
              label: 'Column'
            }
          }]
        }
      }, {
        key: 'mixedTitle',
        type: 'lx-title',
        templateOptions: {
          title: 'container: row, align: center'
        }
      }, {
        'key': 'row',
        type: 'lx-flex',
        templateOptions: {
          flex: {
            container: 'row',
            align: 'center center',
            gutter: 8
          },
          'fields': [{
            key: 'mixed1',
            type: 'lx-input',
            wrapper: 'lx-wrapper-flex-item',
            templateOptions: {
              type: 'number',
              fixedLabel: true,
              label: 'Address number'
            }
          }, {
            key: 'mixed2',
            type: 'lx-input',
            wrapper: 'lx-wrapper-flex-item',
            templateOptions: {
              type: 'text',
              fixedLabel: true,
              label: 'Street Name'
            }
          }, {
            key: 'mixed3',
            type: 'lx-select',
            wrapper: 'lx-wrapper-flex-item',
            templateOptions: {
              placeholder: 'Street Type',
              selected: 'type',
              choice: 'type',
              options: [
                {type: 'St.'},
                {type: 'Ave.'},
                {type: 'Blvd.'},
                {type: 'Cres.'}
              ]
            }
          }, {
            key: 'mixed4',
            type: 'lx-checkbox',
            wrapper: 'lx-wrapper-flex-item',
            templateOptions: {
              label: 'mail list'
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
            templateUrl: 'app/form/form.html',
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
