(function () {
  'use strict';

  angular.module('shmck.formFields.modelOptions', [])
    .service('modelOptionsFormFields', modelOptionsFormFields)
    .config(stateRoutes);

  function modelOptionsFormFields() {
    this.contents = {
      title: 'Model Options',
      description: 'app/notes/modelOptionsDescription.md',
      docsLink: 'https://docs.angularjs.org/api/ng/directive/ngModelOptions'
    };

    this.formData = {
      defaultOnBlur: '',
      onKeyUp: '',
      onlyValid: '',
      mixed: ''
    };

    this.fields = function () {
      var numbers =  /^\d+$/;
      return [{
        key: 'defaultOnBlur',
        type: 'lx-input',
        templateOptions: {
          focus: true,
          fixedLabel: true,
          required: true,
          label: 'When user changes fields'
        },
        modelOptions: {
          updateOn: 'default blur'
        },
        validators: {
          numbersOnly: function (modelValue, viewValue) {
            var value = modelValue || viewValue || '';
            return numbers.test(value);
          }
        },
        validation: {
          messages: [{
            name: 'numbersOnly',
            message: 'Numbers only please.'
          }]
        }
      }, {
        key: 'onKeyUp',
        type: 'lx-input',
        templateOptions: {
          fixedLabel: true,
          required: true,
          label: 'About when user stops typing'
        },
        modelOptions: {
          updateOn: 'keyup',
          debounce: {
            keyup: 300
          }
        },
        validators: {
          numbersOnly: function (modelValue, viewValue) {
            var value = modelValue || viewValue || '';
            return numbers.test(value);
          }
        }
      }, {
        key: 'onlyValid',
        type: 'lx-input',
        templateOptions: {
          fixedLabel: true,
          required: true,
          label: 'Only saves when data is valid'
        },
        modelOptions: {
          allowInvalid: false
        },
        validators: {
          numbersOnly: function (modelValue, viewValue) {
            var value = modelValue || viewValue || '';
            return numbers.test(value);
          }
        }
      }, {
        key: 'mixed',
        type: 'lx-input',
        templateOptions: {
          fixedLabel: true,
          required: true,
          label: 'On blur or end of typing, only valid'
        },
        modelOptions: {
          allowInvalid: false,
          updateOn: 'keyup blur',
          debounce: {
            blur: 0,
            keyUp: 300
          }
        },
        validators: {
          numbersOnly: function (modelValue, viewValue) {
            var value = modelValue || viewValue || '';
            return numbers.test(value);
          }
        }
      }];
    };
  }

  function stateRoutes($stateProvider) {
    $stateProvider
      .state('modelOptions', {
        url: '/modelOptions',
        views: {
          'form@': {
            templateUrl: 'app/form/form.html',
            controller: 'FormCtrl as vm',
            resolve: {
              formFields: function (modelOptionsFormFields) {
                return modelOptionsFormFields.fields;
              },
              contents: function (modelOptionsFormFields) {
                return modelOptionsFormFields.contents;
              },
              formData: function (modelOptionsFormFields) {
                return modelOptionsFormFields.formData;
              }
            }
          }
        }
      });
  }

}());
