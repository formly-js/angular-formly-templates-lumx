const name = 'expression';

function fields() {
  this.contents = {
    title: 'Expression Properties',
    docsLink: 'http://formly-js.github.io/angular-formly/#/example/intro/expression-properties'
  };

  this.formData = {
    showHidden: '',
    disableNextField: '',
    probablyNotNeeded: '',
    setMaxLength: 4,
    textWithSetMaxLength: 'four',
    editLabel: ''
  };

  this.fields = function() {
    return [{
      key: 'showHidden',
      type: 'lx-checkbox',
      templateOptions: {
        label: 'Show Hidden Field'
      }
    }, {
      template: '<h1>This was hidden!</h1>',
      expressionProperties: {
        hide: '!model.showHidden'
      }
    }, {
      key: 'disableNextField',
      type: 'lx-checkbox',
      templateOptions: {
        label: 'Disable Next Field'
      }
    }, {
      key: 'probablyNotNeeded',
      type: 'lx-checkbox',
      templateOptions: {
        label: 'Can Be Disabled',
      },
      expressionProperties: {
        'templateOptions.disabled': 'model.disableNextField'
      }
    }, {
      key: 'setMaxLength',
      type: 'lx-input',
      templateOptions: {
        type: 'number',
        label: 'Set next field max length'
      }
    }, {
      key: 'textWithSetMaxLength',
      type: 'lx-input',
      templateOptions: {
        label: 'Text with max length set'
      },
      ngModelAttrs: {
        maxLength: {
          bound: 'ng-maxlength'
        }
      },
      expressionProperties: {
        'templateOptions.maxLength': 'model.setMaxLength'
      }
    }, {
      key: 'editLabel',
      type: 'lx-input',
      templateOptions: {
        label: 'Text'
      },
      expressionProperties: {
        'templateOptions.label': '$viewValue || "Edit this label"'
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
            formFields: function(expressionFF) {
              return expressionFF.fields;
            },
            contents: function(expressionFF) {
              return expressionFF.contents;
            },
            formData: function(expressionFF) {
              return expressionFF.formData;
            }
          }
        }
      }
    });
}
export default angular.module(`shmck.formFields.${name}`, [])
  .service(`${name}FF`, fields)
  .config(stateRoutes);
