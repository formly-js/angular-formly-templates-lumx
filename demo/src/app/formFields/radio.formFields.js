(function () {
  'use strict';

  angular.module('shmck.formFields.radio', [])
    .service('radioFormFields', radioFormFields)
    .config(stateRoutes);

  function radioFormFields() {
    this.contents = {
      title: 'Radio',
      subhead: '',
      description: '',
      markdownFile: 'app/docs/radio.md'
    };


    this.fields = function () {
      return [{
        key: 'radio0',
        type: 'lx-radio',
        templateOptions: {
          label: 'What\'s your favorite number?',
          options: [{
            name: 'One',
            value: 1
          }, {
            name: 'Seven',
            value: 7
          }, {
            name: 'Thirteen',
            value: 13,
            disabled: true
          }]
        }
      }, {
        key: 'radio1',
        type: 'lx-radio',
        templateOptions: {
          label: 'What\'s your least favorite number?',
          options: [{
            name: 'One',
            value: 1,
            help: 'The First'
          }, {
            name: 'Seven',
            value: 7,
            help: 'The Lucky One'
          }, {
            name: 'Thirteen',
            value: 13,
            help: 'The Unlucky One',
            disabled: true
          }]
        }
      }];
    };
  }

  function stateRoutes($stateProvider) {
    $stateProvider
      .state('radio', {
        url: '/radio',
        views: {
          'form@': {
            templateUrl: 'app/form/form.html',
            controller: 'FormCtrl as vm',
            resolve: {
              formFields: function (radioFormFields) {
                return radioFormFields.fields;
              },
              contents: function (radioFormFields) {
                return radioFormFields.contents;
              }
            }
          }
        }
      });
  }

}());
