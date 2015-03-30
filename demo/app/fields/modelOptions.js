export default angular.module('shmck.formFields.modelOptions', [])
  .service('modelOptionsFormFields', modelOptionsFormFields)
  .config(stateRoutes);

function modelOptionsFormFields() {
  this.contents = {
    title: 'Model Options',
    description: 'docs/notes/modelOptionsDescription.md',
    docsLink: 'https://docs.angularjs.org/api/ng/directive/ngModelOptions'
  };

  this.formData = {
    defaultOnBlur: '',
    onKeyUp: '',
    onlyValid: '',
    mixed: ''
  };

  var numbersRegex = /^\d+$/;
  var numbersOnlyValidator = {
    numbersOnly: {
      expression: function(viewValue, modelValue) {
        var value = viewValue || modelValue || '';
        return numbersRegex.test(value);
      },
      message: '"Numbers only please."'
    }
  };

  this.fields = function() {
    return [{
      key: 'defaultOnBlur',
      type: 'lx-input',
      wrapper: 'lx-wrapper-errors',
      templateOptions: {
        fixedLabel: true,
        required: true,
        label: 'When user changes fields'
      },
      modelOptions: {
        updateOn: 'default blur'
      },
      validators: numbersOnlyValidator
    }, {
      key: 'onKeyUp',
      type: 'lx-input',
      wrapper: 'lx-wrapper-errors',
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
      validators: numbersOnlyValidator
    }, {
      key: 'onlyValid',
      type: 'lx-input',
      wrapper: 'lx-wrapper-errors',
      templateOptions: {
        fixedLabel: true,
        required: true,
        label: 'Only saves when data is valid'
      },
      modelOptions: {
        allowInvalid: false
      },
      validators: numbersOnlyValidator
    }, {
      key: 'mixed',
      type: 'lx-input',
      wrapper: 'lx-wrapper-errors',
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
      validators: numbersOnlyValidator
    }];
  };
}

function stateRoutes($stateProvider) {
  $stateProvider
    .state('modelOptions', {
      url: '/modelOptions',
      views: {
        'form@': {
          template: require('../main/main.html'),
          controller: 'MainCtrl as vm',
          resolve: {
            formFields: function(modelOptionsFormFields) {
              return modelOptionsFormFields.fields;
            },
            contents: function(modelOptionsFormFields) {
              return modelOptionsFormFields.contents;
            },
            formData: function(modelOptionsFormFields) {
              return modelOptionsFormFields.formData;
            }
          }
        }
      }
    });
}
