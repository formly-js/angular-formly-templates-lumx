export default angular.module('shmck.formFields.themes', [])
  .service('themeFormFields', themeFormFields)
  .config(stateRoutes);

function themeFormFields() {
  this.contents = {
    title: 'Themes',
    subhead: 'backgrounds + dark/light font themes',
    docFile: 'docs/themes.md',
    description: 'docs/notes/themeDescription.md',
    formFieldsClass: 'bgc-blue-grey-500 addPadding'
  };

  this.formData = {
    dark1: '',
    dark2: '',
    light1: '',
    light2: ''
  };

  this.fields = function() {
    return [{
      template: '<div class="tc-white fs-title"><h3>Dark Theme</h3></div>'
    }, {
      key: 'dark1',
      type: 'lx-input',
      templateOptions: {
        fixedLabel: true,
        type: 'text',
        icon: 'account-outline',
        label: 'Name',
        theme: 'dark'
      }
    }, {
      key: 'dark2',
      type: 'lx-input',
      templateOptions: {
        type: 'email',
        icon: 'email-outline',
        label: 'Email',
        fixedLabel: true,
        theme: 'dark'
      }
    }, {
      template: '<div class="bgc-yellow-500 fs-title"><h3>Light Theme</h3></div>'
    }, {
      key: 'light1',
      type: 'lx-input',
      wrapper: 'lx-wrapper-div',
      templateOptions: {
        div: {
          className: 'bgc-yellow-500'
        },
        fixedLabel: true,
        type: 'text',
        label: 'Name',
        icon: 'account',
        theme: 'light'
      }
    }, {
      key: 'light2',
      type: 'lx-input',
      wrapper: 'lx-wrapper-div',
      templateOptions: {
        div: {
          className: 'bgc-yellow-500'
        },
        type: 'email',
        label: 'Email',
        icon: 'email',
        fixedLabel: true,
        theme: 'light'
      }
    }];
  };
}

function stateRoutes($stateProvider) {
  $stateProvider
    .state('theme', {
      url: '/themes',
      views: {
        'form@': {
          template: require('../main/main.html'),
          controller: 'MainCtrl as vm',
          resolve: {
            formFields: function(themeFormFields) {
              return themeFormFields.fields;
            },
            contents: function(themeFormFields) {
              return themeFormFields.contents;
            },
            formData: function(themeFormFields) {
              return themeFormFields.formData;
            }
          }
        }
      }
    });
}
