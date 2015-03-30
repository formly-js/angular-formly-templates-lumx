export default angular.module('shmck.formFields.datePicker', [])
  .service('datePickerFormFields', datePickerFormFields)
  .config(stateRoutes);

function datePickerFormFields() {
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
    .state('datePicker', {
      url: '/datePicker',
      views: {
        'form@': {
          template: require('../main/main.html'),
          controller: 'MainCtrl as vm',
          resolve: {
            formFields: function(datePickerFormFields) {
              return datePickerFormFields.fields;
            },
            contents: function(datePickerFormFields) {
              return datePickerFormFields.contents;
            },
            formData: function(datePickerFormFields) {
              return datePickerFormFields.formData;
            }
          }
        }
      }
    });
}
