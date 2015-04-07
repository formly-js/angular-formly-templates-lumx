const name = 'datePicker';

function fields() {
  this.contents = {
    title: 'Date Picker',
    docFile: 'docs/datePicker.md'
  };

  this.formData = {};

  this.fields = function() {
    return [{
      key: 'datePicker',
      type: 'lx-date-picker',
      templateOptions: {
        label: 'Pick a Date'
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
            formFields: function(datePickerFF) {
              return datePickerFF.fields;
            },
            contents: function(datePickerFF) {
              return datePickerFF.contents;
            },
            formData: function(datePickerFF) {
              return datePickerFF.formData;
            }
          }
        }
      }
    });
}
export default angular.module(`shmck.formFields.${name}`, [])
  .service(`${name}FF`, fields)
  .config(stateRoutes);

