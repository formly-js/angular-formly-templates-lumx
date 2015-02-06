(function () {
  'use strict';

  angular.module('shmck.formFields.wrapper', [])
    .service('wrapperFormFields', wrapperFormFields)
    .config(stateRoutes);

  function wrapperFormFields() {
    this.contents = {
      title: 'Wrappers',
      subhead: 'Style control around your form fields',
      description: ''
    };


    this.fields = function () {
      return [{
        key: 'textBelow',
        type: 'lx-text-field',
        wrapper: 'lx-wrapper-below',
        templateOptions: {
          type: 'text',
          fixedLabel: true,
          label: 'Field with text below',
          belowText: 'Below wrapper with space below',
          belowSpace: true
        }
      }, {
        key: 'textAbove',
        type: 'lx-text-field',
        wrapper: 'lx-wrapper-above',
        templateOptions: {
          type: 'text',
          fixedLabel: true,
          label: 'Field with above wrapper',
          aboveText: 'Above wrapper with space above',
          aboveStyle: {
            'text-decoration': 'underline'
          },
          aboveSpace: true
        }
      }, {
        key: 'textBoth',
        type: 'lx-text-field',
        wrapper: ['lx-wrapper-below', 'lx-wrapper-above'],
        templateOptions: {
          type: 'text',
          fixedLabel: true,
          label: 'Field with both above & below wrapper',
          aboveText: 'Both above text',
          belowText: '& below text',
          aboveClass: 'fs-title',
          belowClass: 'fs-title',
          aboveSpace: true
        }
      }];
    };
  }

  function stateRoutes($stateProvider) {
    $stateProvider
      .state('wrapper', {
        url: '/wrapper',
        views: {
          'form@': {
            templateUrl: 'app/form/form.html',
            controller: 'FormCtrl as vm',
            resolve: {
              formFields: function (wrapperFormFields) {
                return wrapperFormFields.fields;
              },
              contents: function (wrapperFormFields) {
                return wrapperFormFields.contents;
              }
            }
          }
        }
      });
  }


}());
