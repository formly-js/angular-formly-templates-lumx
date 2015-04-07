const name = 'flex';

function fields() {
  this.contents = {
    title: 'FlexBox Wrappers',
    subhead: 'lx-flex',
    description: 'docs/notes/flexDescription.md',
    docFile: 'docs/flex.md',
    notes: 'docs/notes/flexNotes.md'
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

  this.fields = function() {
    return [{
      template: '<br/><h4>Space-between</h4>'
    }, {
      type: 'lx-flex',
      templateOptions: {
        flex: {
          container: 'row',
          align: 'space-between',
          item: 5
        },

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
      template: '<br/><h4>Center</h4>'
    }, {
      type: 'lx-flex',
      templateOptions: {
        flex: {
          container: 'column',
          align: 'space-around center',
          gutter: 24,
          item: 10
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
      template: '<br/><h4>Center Center</h4>'
    }, {
      type: 'lx-flex',
      templateOptions: {
        flex: {
          container: 'row',
          align: 'center center',
          gutter: 8,
          item: 3
        },
        'fields': [{
          key: 'addressStreetNumber',
          type: 'lx-input',
          templateOptions: {
            type: 'number',
            fixedLabel: true,
            label: 'Street #'
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
          wrapper: 'lx-wrapper-div',
          templateOptions: {
            div: {
              style: {
                position: 'relative',
                top: '-23px'
              }
            },
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
    .state(`${name}`, {
      url: `/${name}`,
      views: {
        'form@': {
          template: require('main/main.html'),
          controller: 'MainCtrl as vm',
          resolve: {
            formFields: function(flexFF) {
              return flexFF.fields;
            },
            contents: function(flexFF) {
              return flexFF.contents;
            },
            formData: function(flexFF) {
              return flexFF.formData;
            }
          }
        }
      }
    });
}
export default angular.module(`shmck.formFields.${name}`, [])
  .service(`${name}FF`, fields)
  .config(stateRoutes);

