export default angular.module('shmck.formFields.checkbox', [])
  .service('checkboxFormFields', checkboxFormFields)
  .config(stateRoutes);

class checkboxFormFields {
  constructor() {
    this.contents = {
      title: 'Checkbox',
      docFile: 'docs/checkbox.md'
    };
    this.formData = {
      hiddenBox: '',
      checkedCheckBox: true,
      helperBox: '',
      disabledBox: '',
      checkedDisabledBox: true
    };
    this.fields = function() {
      return [{
        key: 'checkBoxExample',
        type: 'lx-checkbox',
        templateOptions: {
          label: 'Basic Checkbox'
        }
      }, {
        key: 'checkedCheckBox',
        type: 'lx-checkbox',
        templateOptions: {
          label: 'Checked Checkbox',
          checked: true
        }
      }, {
        key: 'helperBox',
        type: 'lx-checkbox',
        templateOptions: {
          label: 'Checkbox with Helper',
          description: 'Explaining a little more'
        }
      }, {
        key: 'disabledBox',
        type: 'lx-checkbox',
        templateOptions: {
          label: 'Disabled Box',
          disabled: true
        }
      }, {
        key: 'checkedDisabledBox',
        type: 'lx-checkbox',
        templateOptions: {
          label: 'Checked & Disabled Box',
          disabled: true,
          checked: true
        }
      }];
    };
  }
}

function stateRoutes($stateProvider) {
  $stateProvider
    .state('checkbox', {
      url: '/checkbox',
      views: {
        'form@': {
          template: require('../main/main.html'),
          controller: 'MainCtrl as vm',
          resolve: {
            formFields: function(checkboxFormFields) {
              return checkboxFormFields.fields;
            },
            contents: function(checkboxFormFields) {
              return checkboxFormFields.contents;
            },
            formData: function(checkboxFormFields) {
              return checkboxFormFields.formData;
            }
          }
        }
      }
    });
}

