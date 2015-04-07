const name = 'checkbox';

function fields() {
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

function stateRoutes($stateProvider) {
  $stateProvider
    .state(`${name}`, {
      url: `/${name}`,
      views: {
        'form@': {
          template: require('main/main.html'),
          controller: 'MainCtrl as vm',
          resolve: {
            formFields: function(checkboxFF) {
              return checkboxFF.fields;
            },
            contents: function(checkboxFF) {
              return checkboxFF.contents;
            },
            formData: function(checkboxFF) {
              return checkboxFF.formData;
            }
          }
        }
      }
    });
}
export default angular.module(`shmck.formFields.${name}`, [])
  .service(`${name}FF`, fields)
  .config(stateRoutes);
