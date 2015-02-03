//(function () {
//  'use strict';
//
//  angular.module('demo')
//    .factory('selectFormFields', selectFormFields);
//
//  function selectFormFields() {
//    var fields =[{
//      key: 'subSelect',
//      type: 'lx-subhead',
//      subhead: 'Selectors:',
//      style: {'text-decoration': 'underline'}
//    }, {
//      key: 'select',
//      type: 'lx-select',
//      label: 'Single Select',
//      placeholder: 'Choose an Email',
//      allowClear: true,
//      selected: 'name',
//      selected2: 'age',
//      choice: 'email',
//      choice2: 'age',
//      choices: [
//        {name: 'Adam', email: 'adam@email.com', age: 10},
//        {name: 'Amalie', email: 'amalie@email.com', age: 12},
//        {name: 'Wladimir', email: 'wladimir@email.com', age: 30},
//        {name: 'Samantha', email: 'samantha@email.com', age: 31},
//        {name: 'Estefanía', email: 'estefanía@email.com', age: 16},
//        {name: 'Natasha', email: 'natasha@email.com', age: 54},
//        {name: 'Nicole', email: 'nicole@email.com', age: 43},
//        {name: 'Adrian', email: 'adrian@email.com', age: 21}
//      ]
//    }, {
//      key: 'selectMultiple',
//      type: 'lx-select-multiple',
//      label: 'Multiple Select',
//      placeholder: 'Choose an Email',
//      selected: 'name',
//      choice: 'email',
//      choices: [
//        {name: 'Adam', email: 'adam@email.com', age: 10},
//        {name: 'Amalie', email: 'amalie@email.com', age: 12},
//        {name: 'Wladimir', email: 'wladimir@email.com', age: 30},
//        {name: 'Samantha', email: 'samantha@email.com', age: 31},
//        {name: 'Estefanía', email: 'estefanía@email.com', age: 16},
//        {name: 'Natasha', email: 'natasha@email.com', age: 54},
//        {name: 'Nicole', email: 'nicole@email.com', age: 43},
//        {name: 'Adrian', email: 'adrian@email.com', age: 21}
//      ]
//    }, {
//      key: 'subDatePicker',
//      type: 'lx-subhead',
//      subhead: 'Date Picker',
//      style: {'text-decoration': 'underline'}
//    }, {
//      key: 'dob',
//      type: 'lx-date-picker',
//      label: 'Pick a Date'
//    }, {
//      key: 'subFileInput',
//      type: 'lx-subhead',
//      subhead: 'File Input',
//      style: {'text-decoration': 'underline'}
//    }, {
//      key: 'fileInput0',
//      type: 'lx-file-input',
//      fileLabel: 'Input a file...',
//      label: 'Filename'
//    }];
//    return {
//      fields: fields
//    };
//  }
//
//}());
