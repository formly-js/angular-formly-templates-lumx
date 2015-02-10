(function () {
  'use strict';

  angular.module('shmck.formFields.themes', [])
    .service('themeFormFields', themeFormFields)
    .config(stateRoutes);

  function themeFormFields() {
    this.contents = {
      title: 'Themes',
      subhead: 'backgrounds + dark/light font themes',
      markdownFile: 'app/docs/themes.md',
      formFieldsClass: 'bgc-blue-grey-500 addPadding'
    };


    this.fields = function () {
      return [{
        key: 'dark',
        type: 'lx-title',
        templateOptions: {
          title: 'Dark Theme',
          description: 'Created by styling the \'<formly-form>\''
        }
      }, {
        key: 'name1',
        type: 'lx-input',
        templateOptions: {
          fixedLabel: true,
          type: 'text',
          label: 'Name',
          theme: 'dark'
        }
      }, {
        key: 'fixedLabel1',
        type: 'lx-input',
        templateOptions: {
          type: 'text',
          label: 'This Label Doesn\'t Float',
          fixedLabel: true,
          theme: 'dark'
        }
      }, {
        key: 'dark',
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
        key: 'name2',
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
        key: 'fixedLabel2',
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
              }
            }
          }
        }
      });
  }

}());
