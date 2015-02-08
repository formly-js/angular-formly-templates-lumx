(function () {
  'use strict';

  angular.module('shmck.formFields.wrapper', [])
    .service('wrapperFormFields', wrapperFormFields)
    .config(stateRoutes);

  function wrapperFormFields() {
    this.contents = {
      title: 'Wrappers',
      subhead: 'Style control around your form fields',
      description: 'Coming soon!',
      markdownFile: 'app/docs/wrapper.md'
    };


    this.fields = function () {
      return [{
        key: 'textBelow',
        type: 'lx-text',
        wrapper: 'lx-wrapper-below',
        templateOptions: {
          below: {
            space: true,
            text: 'Below wrapper with space below.'
          },
          type: 'text',
          fixedLabel: true,
          label: 'Field with text below',
        }
      }, {
        key: 'textAbove',
        type: 'lx-text',
        wrapper: 'lx-wrapper-above',
        templateOptions: {
          above: {
            space: true,
            text: 'Above wrapper with space above',
            style: {
              'text-decoration': 'underline'
            }
          },
          type: 'text',
          fixedLabel: true,
          label: 'Field with above wrapper'
        }
      }, {
        key: 'textBoth',
        type: 'lx-text',
        wrapper: ['lx-wrapper-below', 'lx-wrapper-above'],
        templateOptions: {
          above: {
            space: true,
            text: 'Both above text',
            className: 'fs-title'
          },
          below: {
            text: '& below text.',
            className: 'fs-title'
          },
          type: 'text',
          fixedLabel: true,
          label: 'Field with both above & below wrapper'
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
