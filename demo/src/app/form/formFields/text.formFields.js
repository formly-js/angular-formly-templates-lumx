//(function () {
//  'use strict';
//
//  angular.module('demo')
//    .factory('textFormFields', textFormFields);
//
//  function textFormFields() {
//    var fields = [{
//      key: 'subEmail',
//      type: 'lx-subhead',
//      subhead: 'Text Fields:',
//      class: 'fs-headline',
//      style: {
//        'text-decoration': 'underline'
//      }
//    }, {
//      key: 'email',
//      type: 'lx-text-field',
//      mode: 'email',
//      label: 'Email',
//      required: true,
//      modelOptions: {
//        allowInvalid: true,
//        updateOn: 'default blur keydown',
//        debounce: {
//          keydown: 500,
//          default: 500,
//          blur: 0
//        }
//      }
//    }, {
//      key: 'password',
//      type: 'lx-text-field',
//      mode: 'password',
//      label: 'Password',
//      required: true,
//      minlength: 4,
//      maxlength: 16,
//      modelOptions: {
//        allowInvalid: true,
//        updateOn: 'default blur keydown',
//        debounce: {
//          keydown: 500,
//          default: 500,
//          blur: 0
//        }
//      }
//    }, {
//      key: 'fixedLabel',
//      type: 'lx-text-field',
//      mode: 'text',
//      label: 'This Label Doesn\'t Float',
//      fixedLabel: true
//    }, {
//      key: 'disabledText',
//      type: 'lx-text-field',
//      mode: 'text',
//      label: 'This Field is Disabled',
//      disabled: true,
//      fixedLabel: true
//    }, {
//      key: 'textPattern',
//      type: 'lx-text-field',
//      mode: 'text',
//      label: 'Valid Four Letter Word Checker',
//      pattern: /^[A-Za-z]{4}$/,
//      modelOptions: {
//        allowInvalid: true,
//        updateOn: 'default blur keydown',
//        debounce: {
//          keydown: 0,
//          default: 0,
//          blur: 0
//        }
//      }
//    }, {
//      key: 'textArea',
//      type: 'lx-textarea',
//      label: 'Write as much as you\'d like'
//    }, {
//      key: 'url0',
//      type: 'lx-text-field',
//      mode: 'url',
//      label: 'Write a proper URL',
//      help: 'http://www.google.com'
//    }];
//    return {
//      fields: fields
//    };
//  }
//
//}());
