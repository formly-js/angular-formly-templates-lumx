(function () {
  'use strict';

  angular.module('shmck.formFields.themes', [])
    .service('themeFormFields', themeFormFields)
    .config(stateRoutes);

  function themeFormFields() {
    this.contents = {
      title: 'Themes',
      subhead: '',
      markdownFile: 'app/docs/themes.md',
      formFieldsClass: 'bgc-blue-grey-500 addPadding'
    };


    this.fields = function () {
      return [{
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
        key: 'disabledText1',
        type: 'lx-input',
        templateOptions: {
          type: 'text',
          label: 'This Field is Disabled',
          fixedLabel: true,
          theme: 'dark',
          disabled: true
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
