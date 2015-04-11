const name = 'error';


function fields() {
  this.contents = {
    title: 'Error Notification',
    subhead: 'easy validation tools',
    docFile: 'docs/error.md',
    description: 'docs/notes/errorDescription.md'
  };

  this.formData = {
    email: '',
    url: ''
  };

  this.fields = function() {
    return [{
      key: 'email',
      type: 'lx-input',
      wrapper: 'lx-wrapper-errors',
      templateOptions: {
        type: 'email',
        label: 'Email',
        fixedLabel: true,
        required: true
      },
      validation: {
        messages: {
          email: function() {
            return 'That doesn\'t look like a real email address.';
          }
        }
      },
      modelOptions: {
        allowInvalid: false
      }
    }, {
      key: 'url',
      type: 'lx-input',
      wrapper: 'lx-wrapper-errors',
      templateOptions: {
        type: 'url',
        fixedLabel: true,
        label: 'Link to a url'
      },
      validation: {
        messages: {
          url: function() {
            return 'For example: http://www.google.com';
          }
        }
      },
      modelOptions: {
        allowInvalid: false
      }
      //}, {
      //  key: 'textPattern',
      //  type: 'lx-input',
      //  wrapper: 'lx-wrapper-errors',
      //  templateOptions: {
      //    type: 'text',
      //    fixedLabel: true,
      //    label: 'Four letter word    |  pattern',
      //    pattern: /^[a-zA-Z]{4}$/,
      //    required: true
      //  },
      //  validation: {
      //    messages: [{
      //      name: 'pattern',
      //      message: 'Must be a four letter word.'
      //    }]
      //  },
      //  ngModelAttrs: {
      //    pattern: {
      //      attribute: 'pattern'
      //    }
      //  }
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
            formFields: function(errorFF) {
              return errorFF.fields;
            },
            contents: function(errorFF) {
              return errorFF.contents;
            },
            formData: function(errorFF) {
              return errorFF.formData;
            }
          }
        }
      }
    });
}

function iceCream() {
  return {
    restrict: 'A',
    require: '?ngModel',
    link: function(scope, element, attributes, ngModel) {
      ngModel.$validators.iceCream = function(modelValue) {
        var flavors = ['chocolate', 'vanilla', 'strawberry'];
        return flavors.indexOf(modelValue.toLowerCase()) !== -1;
      };
    }
  };
}

export default angular.module(`shmck.formFields.${name}`, [])
  .service(`${name}FF`, fields)
  .config(stateRoutes)
  .directive('iceCream', iceCream);


