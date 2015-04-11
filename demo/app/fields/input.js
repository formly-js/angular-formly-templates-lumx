const name = 'input';

function fields() {
  this.contents = {
    title: 'Input Fields',
    subhead: 'input & textarea',
    docFile: 'docs/input.md'
  };

  this.formData = {
    floatLabel: '',
    fixedLabel: '',
    fixedIcon: '',
    disabledText: '',
    textArea: `Once upon a midnight dreary, while I pondered, weak and weary,
      Over many a quaint and curious volume of forgotten forms—`,
    validatedText: ''
  };

  this.fields = function() {
    return [{
      key: 'floatLabel',
      type: 'lx-input',
      templateOptions: {
        type: 'text',
        label: 'Float Label'
      }
    }, {
      key: 'fixedLabel',
      type: 'lx-input',
      templateOptions: {
        type: 'text',
        label: 'Fixed Label',
        fixedLabel: true
      }
    }, {
      key: 'fixedIcon',
      type: 'lx-input',
      templateOptions: {
        type: 'text',
        fixedLabel: true,
        icon: 'account',
        label: 'With Icon'
      }
    }, {
      key: 'disabledText',
      type: 'lx-input',
      templateOptions: {
        type: 'text',
        label: 'Disabled',
        fixedLabel: true,
        disabled: true
      }
    }, {
      key: 'textArea',
      type: 'lx-textarea',
      templateOptions: {
        label: 'Textarea example'
      }
    }, {
      key: 'validatedText',
      type: 'lx-input',
      wrapper: 'lx-wrapper-errors',
      templateOptions: {
        type: 'password',
        label: 'Validation Example',
        minlength: 4,
        maxlength: 8,
        required: true
      },
      ngModelAttrs: {
        minlength: {
          bound: 'ng-minlength',
          attribute: 'minlength'
        },
        maxlength: {
          bound: 'ng-maxlength',
          attribute: 'maxlength'
        }

      },
      modelOptions: {
        allowInvalid: false,
        updateOn: 'keydown blur',
        debounce: {
          keydown: 100,
          default: 100,
          blur: 0
        }
      }
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
            formFields: function(inputFF) {
              return inputFF.fields;
            },
            contents: function(inputFF) {
              return inputFF.contents;
            },
            formData: function(inputFF) {
              return inputFF.formData;
            }
          }
        }
      }
    });
}
export default angular.module(`shmck.formFields.${name}`, [])
  .service(`${name}FF`, fields)
  .config(stateRoutes);
