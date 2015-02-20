(function () {
  'use strict';

  angular.module('shmck.formFields.flex', [])
    .service('flexFormFields', flexFormFields)
    .config(stateRoutes);

  function flexFormFields() {
    this.contents = {
      title: 'FlexBox Wrappers',
      subhead: 'lx-flex, lx-wrapper-flex-item',
      description: 'app/notes/flexDescription.md',
      docFile: 'app/docs/flex.md',
      notes: 'app/notes/flexNotes.md'
    };

    this.formData = {
      rowItem1: '',
      rowItem2: '',
      rowItem3: '',
      columnItem1: '',
      columnItem2: '',
      columnItem3: '',
      mixedItem1: '',
      addressStreetNumber: '',
      addressStreetName: '',
      addressStreetType: ''
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
            key: 'addressStreetNumber',
            type: 'lx-input',
            wrapper: 'lx-wrapper-flex-item',
            templateOptions: {
              type: 'number',
              fixedLabel: true,
              label: 'Street #',
              className: 'street-number'
            }
          }, {
            key: 'addressStreetName',
            type: 'lx-input',
            wrapper: 'lx-wrapper-flex-item',
            templateOptions: {
              type: 'text',
              fixedLabel: true,
              label: 'Street Name'
            }
          }, {
            key: 'addressStreetType',
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
              },
              formData: function (flexFormFields) {
                return flexFormFields.formData;
              }
            }
          }
        }
      });
  }

}());
