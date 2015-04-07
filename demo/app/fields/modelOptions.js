const name = 'modelOptions';

function fields() {
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
    .state(`${name}`, {
      url: `/${name}`,
      views: {
        'form@': {
          template: require('main/main.html'),
          controller: 'MainCtrl as vm',
          resolve: {
            formFields: function(modelOptionsFF) {
              return modelOptionsFF.fields;
            },
            contents: function(modelOptionsFF) {
              return modelOptionsFF.contents;
            },
            formData: function(modelOptionsFF) {
              return modelOptionsFF.formData;
            }
          }
        }
      }
    });
}

export default angular.module(`shmck.formFields.${name}`, [])
  .service(`${name}FF`, fields)
  .config(stateRoutes);

