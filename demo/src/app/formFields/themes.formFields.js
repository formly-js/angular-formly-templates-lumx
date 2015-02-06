(function () {
  'use strict';

  angular.module('shmck.formFields.themes', [])
    .service('themeFormFields', themeFormFields)
    .config(stateRoutes);

  function themeFormFields() {
    this.contents = {
      title: 'Themes',
      subhead: '',
      description: ''
    };


    this.fields = function () {
      return [{
        key: 'name1',
        type: 'lx-text-field',
        wrapper: 'lx-wrapper-above',
        templateOptions: {
          aboveSpace: true,
          aboveText: 'Themes: ',
          aboveStyle: {
            'text-decoration': 'underline',
            'color': 'white'
          },
          fixedLabel: true,
          type: 'text',
          label: 'Name',
          theme: 'dark'
        }
      }, {
        key: 'fixedLabel1',
        type: 'lx-text-field',
        templateOptions: {
          type: 'text',
          label: 'This Label Doesn\'t Float',
          fixedLabel: true,
          theme: 'dark'
        }
      }, {
        key: 'disabledText1',
        type: 'lx-text-field',
        templateOptions: {
          type: 'text',
          label: 'This Field is Disabled',
          disabled: true,
          fixedLabel: true,
          theme: 'dark'
        }
      }];
    };
  }

  function stateRoutes($stateProvider) {
    $stateProvider
      .state('themes', {
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
