const name = 'ngModelAttrs';

function fields() {
  this.contents = {
    title: 'ngModelAttrs',
    docsLink: 'http://formly-js.github.io/angular-formly/#/example/very-advanced/ngModelAttrs',
    description: 'docs/notes/ngModelAttrsDescription.md'
  };

  this.formData = {};

  this.fields = function() {
    return [{
      key: 'password',
      type: 'lx-input',
      templateOptions: {
        type: 'password',
        label: 'Password (8 character maximum)',
        maxlength: 8,
        required: true
      },
      ngModelAttrs: {
        maxlength: {
          attribute: 'maxlength'
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
            formFields: function(ngModelAttrsFF) {
              return ngModelAttrsFF.fields;
            },
            contents: function(ngModelAttrsFF) {
              return ngModelAttrsFF.contents;
            },
            formData: function(ngModelAttrsFF) {
              return ngModelAttrsFF.formData;
            }
          }
        }
      }
    });
}

export default angular.module(`shmck.formFields.${name}`, [])
  .service(`${name}FF`, fields)
  .config(stateRoutes);

