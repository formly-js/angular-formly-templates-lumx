const name = 'switch';

function fields() {
  this.contents = {
    title: 'Switch',
    docFile: 'docs/switch.md'
  };

  this.formData = {
    regularSwitch: '',
    hiddenSwitch: '',
    checkedSwitch: true,
    helperSwitch: '',
    disabledSwitch: '',
    disabledCheckedSwitch: true
  };

  this.fields = function() {
    return [{
      key: 'regularSwitch',
      type: 'lx-switch',
      templateOptions: {
        label: 'Regular switch'
      }
    }, {
      key: 'checkedSwitch',
      type: 'lx-switch',
      templateOptions: {
        label: 'Switched Switch',
        checked: true
      }
    }, {
      key: 'helperSwitch',
      type: 'lx-switch',
      templateOptions: {
        label: 'Switch with Helper',
        description: 'Explaining a little more'
      }
    }, {
      key: 'disabledSwitch',
      type: 'lx-switch',
      templateOptions: {
        label: 'Disabled Switch',
        disabled: true
      }
    }, {
      key: 'disabledCheckedSwitch',
      type: 'lx-switch',
      templateOptions: {
        label: 'Disabled & Checked Switch',
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
            formFields: function(switchFF) {
              return switchFF.fields;
            },
            contents: function(switchFF) {
              return switchFF.contents;
            },
            formData: function(switchFF) {
              return switchFF.formData;
            }
          }
        }
      }
    });
}
export default angular.module(`shmck.formFields.${name}`, [])
  .service(`${name}FF`, fields)
  .config(stateRoutes);
