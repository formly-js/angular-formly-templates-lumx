(function () {
  'use strict';

  angular.module('shmck.formFields.select', [])
    .service('selectFormFields', selectFormFields)
    .config(stateRoutes);

  function selectFormFields() {
    this.contents = {
      title: 'Selectors',
      subhead: 'select, multiple-select',
      description: '',
      markdownFile: 'app/docs/select.md'
    };


    this.fields = function () {
      return [{
        key: 'select',
        type: 'lx-select',
        templateOptions: {
          label: 'Single Select',
          placeholder: 'Choose an Email',
          allowClear: true,
          selected: 'name',
          selected2: 'age',
          choice: 'email',
          choice2: 'age',
          options: [
            {name: 'Adam', email: 'adam@email.com', age: 10},
            {name: 'Amalie', email: 'amalie@email.com', age: 12},
            {name: 'Wladimir', email: 'wladimir@email.com', age: 30},
            {name: 'Samantha', email: 'samantha@email.com', age: 31},
            {name: 'Estefanía', email: 'estefanía@email.com', age: 16},
            {name: 'Natasha', email: 'natasha@email.com', age: 54},
            {name: 'Nicole', email: 'nicole@email.com', age: 43},
            {name: 'Adrian', email: 'adrian@email.com', age: 21}
          ]
        }
      }, {
        key: 'select',
        type: 'lx-select',
        templateOptions: {
          label: 'Another Single Select',
          placeholder: 'Choose an Email',
          description: 'With a description',
          allowClear: true,
          selected: 'name',
          selected2: 'age',
          choice: 'email',
          choice2: 'age',
          options: [
            {name: 'Adam', email: 'adam@email.com', age: 10},
            {name: 'Amalie', email: 'amalie@email.com', age: 12},
            {name: 'Wladimir', email: 'wladimir@email.com', age: 30},
            {name: 'Samantha', email: 'samantha@email.com', age: 31},
            {name: 'Estefanía', email: 'estefanía@email.com', age: 16},
            {name: 'Natasha', email: 'natasha@email.com', age: 54},
            {name: 'Nicole', email: 'nicole@email.com', age: 43},
            {name: 'Adrian', email: 'adrian@email.com', age: 21}
          ]
        }
      }, {
        key: 'selectMultiple',
        type: 'lx-select',
        templateOptions: {
          multiple: true,
          label: 'Multiple Select',
          placeholder: 'Choose an Email',
          selected: 'name',
          choice: 'email',
          options: [
            {name: 'Adam', email: 'adam@email.com', age: 10},
            {name: 'Amalie', email: 'amalie@email.com', age: 12},
            {name: 'Wladimir', email: 'wladimir@email.com', age: 30},
            {name: 'Samantha', email: 'samantha@email.com', age: 31},
            {name: 'Estefanía', email: 'estefanía@email.com', age: 16},
            {name: 'Natasha', email: 'natasha@email.com', age: 54},
            {name: 'Nicole', email: 'nicole@email.com', age: 43},
            {name: 'Adrian', email: 'adrian@email.com', age: 21}
          ]
        }
        //}, {
        //  key: 'subFileInput',
        //  type: 'lx-subhead',
        //  templateOptions: {
        //    subhead: 'File Input',
        //    style: {'text-decoration': 'underline'}
        //  }
        //}, {
        //key: 'fileInput0',
        //type: 'lx-file-input',
        //templateOptions: {
        //  fileLabel: 'Input a file...',
        //  label: 'Filename'
        //}
      }];
    };
  }

  function stateRoutes($stateProvider) {
    $stateProvider
      .state('select', {
        url: '/select',
        views: {
          'form@': {
            templateUrl: 'app/form/form.html',
            controller: 'FormCtrl as vm',
            resolve: {
              formFields: function (selectFormFields) {
                return selectFormFields.fields;
              },
              contents: function (selectFormFields) {
                return selectFormFields.contents;
              }
            }
          }
        }
      });
  }

}());
