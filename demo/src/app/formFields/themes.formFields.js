(function () {
  'use strict';

  angular.module('shmck.formFields.themes', [])
    .service('themeFormFields', themeFormFields)
    .config(stateRoutes);

  function themeFormFields() {
    this.contents = {
      title: 'Themes',
      subhead: 'backgrounds + dark/light font themes',
      docFile: 'app/docs/themes.md',
      description: 'app/notes/themeDescription.md',
      formFieldsClass: 'bgc-blue-grey-500 addPadding'
    };

    this.formData = {
      dark1: '',
      dark2: '',
      light1: '',
      light2: ''
    };


    this.fields = function () {
      return [{
        key: 'darkTitle',
        type: 'lx-title',
        templateOptions: {
          title: 'Dark Theme',
          description: 'Created by styling the \'<formly-form>\''
        }
      }, {
        key: 'dark1',
        type: 'lx-input',
        templateOptions: {
          focus: true,
          fixedLabel: true,
          type: 'text',
          label: 'Name',
          theme: 'dark'
        }
      }, {
        key: 'dark2',
        type: 'lx-input',
        templateOptions: {
          type: 'text',
          label: 'This Label Doesn\'t Float',
          fixedLabel: true,
          theme: 'dark'
        }
      }, {
        key: 'lightTitle',
        type: 'lx-title',
        wrapper: 'lx-wrapper-div',
        templateOptions: {
          div: {
            className: 'bgc-yellow-500'
          },
          title: 'Light Theme',
          description: 'Created using \'lx-wrapper-div\''
        }
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
          type: 'text',
          label: 'This Label Doesn\'t Float',
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
            templateUrl: 'app/form/form.html',
            controller: 'FormCtrl as vm',
            resolve: {
              formFields: function (themeFormFields) {
                return themeFormFields.fields;
              },
              contents: function (themeFormFields) {
                return themeFormFields.contents;
              },
              formData: function (themeFormFields) {
                return themeFormFields.formData;
              }
            }
          }
        }
      });
  }

}());
