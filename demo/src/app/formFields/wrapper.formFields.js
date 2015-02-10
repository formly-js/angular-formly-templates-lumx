//(function () {
//  'use strict';
//
//  angular.module('shmck.formFields.wrapper', [])
//    .service('wrapperFormFields', wrapperFormFields)
//    .config(stateRoutes);
//
//  function wrapperFormFields() {
//    this.contents = {
//      title: 'Wrappers',
//      subhead: 'control and style your form fields',
//      description: '',
//      markdownFile: 'app/docs/wrapper.md'
//    };
//
//
//    this.fields = function () {
//      return [{
//        key: 'textBelow',
//        type: 'lx-input',
//        wrapper: 'lx-wrapper-description',
//        templateOptions: {
//          description: {
//            space: true,
//            text: 'Add a description with lx-wrapper-description.'
//          },
//          type: 'text',
//          fixedLabel: true,
//          label: 'Field with text below'
//        }
//      }];
//    };
//  }
//
//  function stateRoutes($stateProvider) {
//    $stateProvider
//      .state('wrapper', {
//        url: '/wrapper',
//        views: {
//          'form@': {
//            templateUrl: 'app/form/form.html',
//            controller: 'FormCtrl as vm',
//            resolve: {
//              formFields: function (wrapperFormFields) {
//                return wrapperFormFields.fields;
//              },
//              contents: function (wrapperFormFields) {
//                return wrapperFormFields.contents;
//              }
//            }
//          }
//        }
//      });
//  }
//
//
//}());
