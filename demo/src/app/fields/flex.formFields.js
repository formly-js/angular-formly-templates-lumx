(function () {
  'use strict';

  angular.module('shmck.formFields.flex', [])
    .service('flexFormFields', flexFormFields)
    .config(stateRoutes);

  function flexFormFields() {
    this.contents = {
      title: 'FlexBox Wrappers',
      subhead: 'lx-flex',
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
        type: 'lx-flex',
        templateOptions: {
          flexContainer: 'row',

          fields: [
            {
              type: 'lx-input',
              key: 'firstName',
              templateOptions: {
                label: 'First Name'
              }
            },
            {
              type: 'lx-input',
              key: 'lastName',
              templateOptions: {
                label: 'Last Name'
              }
            }
          ]
        }
      }, {
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
            templateOptions: {
              type: 'text',
              fixedLabel: true,
              label: 'Column'
            }
          }, {
            key: 'columnItem2',
            type: 'lx-input',
            templateOptions: {
              type: 'text',
              fixedLabel: true,
              label: 'Column'
            }
          }, {
            key: 'columnItem3',
            type: 'lx-input',
            templateOptions: {
              type: 'text',
              fixedLabel: true,
              label: 'Column'
            }
          }]
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
            templateOptions: {
              type: 'number',
              fixedLabel: true,
              label: 'Street #',
              className: 'street-number'
            }
          }, {
            key: 'addressStreetName',
            type: 'lx-input',
            templateOptions: {
              type: 'text',
              fixedLabel: true,
              label: 'Street Name'
            }
          }, {
            key: 'addressStreetType',
            type: 'lx-select',
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
