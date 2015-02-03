//(function () {
//  'use strict';
//
//  angular.module('demo')
//    .service('optionFormFields', optionFormFields);
//  //.config(stateRoutes);
//
//  function optionFormFields() {
//    var fields = [{
//      key: 'subCheckbox',
//      type: 'lx-subhead',
//      subhead: 'Checkboxes:',
//      style: {'text-decoration': 'underline'}
//    }, {
//      key: 'checkbox0',
//      type: 'lx-checkbox',
//      value: false,
//      label: 'Show Missing Box'
//    }, {
//      key: 'checkbox1',
//      type: 'lx-checkbox',
//      label: 'Hidden Pre-checked Box',
//      value: true,
//      checked: true,
//      hideExpression: '!checkbox0'
//    }, {
//      key: 'checkbox2',
//      type: 'lx-checkbox',
//      label: 'Checkbox with Helper',
//      value: false,
//      help: 'Explaining a little more'
//    }, {
//      key: 'checkbox3',
//      type: 'lx-checkbox',
//      label: 'Disabled Box',
//      value: true,
//      disabled: true
//
//    }, {
//      key: 'subSwitch',
//      type: 'lx-subhead',
//      subhead: 'Switches:',
//      style: {'text-decoration': 'underline'}
//    }, {
//      key: 'switch0',
//      type: 'lx-switch',
//      label: 'Untouched Switch'
//    }, {
//      key: 'switch1',
//      type: 'lx-switch',
//      label: 'Switched Switch',
//      checked: true
//    }, {
//      key: 'switch2',
//      type: 'lx-switch',
//      label: 'Switch with Helper',
//      help: 'Explaining a little more'
//    }, {
//      key: 'switch3',
//      type: 'lx-switch',
//      label: 'Disabled Switch',
//      disabled: true
//    }, {
//      key: 'subRadio',
//      type: 'lx-subhead',
//      subhead: 'Radio Buttons:',
//      style: {'text-decoration': 'underline'}
//    }, {
//      key: 'radio0',
//      type: 'lx-radio-buttons',
//      label: 'What\'s your favorite number?',
//      options: [{
//        name: 'One',
//        value: 1
//      }, {
//        name: 'Seven',
//        value: 7
//      }, {
//        name: 'Thirteen',
//        value: 13,
//        disabled: true
//      }]
//    }, {
//      key: 'radio1',
//      type: 'lx-radio-buttons',
//      label: 'What\'s your least favorite number?',
//      options: [{
//        name: 'One',
//        value: 1,
//        help: 'The First'
//      }, {
//        name: 'Seven',
//        value: 7,
//        help: 'The Lucky One'
//      }, {
//        name: 'Thirteen',
//        value: 13,
//        help: 'The Unlucky One',
//        disabled: true
//      }]
//    }];
//    return {
//      fields: fields
//    };
//  }
//
//  //function stateRoutes($stateProvider) {
//  //  $stateProvider
//  //    .state('shmck.teacher.lessons.lesson', {
//  //      url: '/:lessonId',
//  //      views: {
//  //        'content@': {
//  //          templateUrl: 'app/lessons/lesson/lessonView.page.html',
//  //          controller: 'LessonViewController as vm',
//  //          resolve: {
//  //            lessonId: function ($stateParams) {
//  //              return $stateParams.lessonId;
//  //            }
//  //          }
//  //        }
//  //      }
//  //    });
//  //}
//
//
//}());
