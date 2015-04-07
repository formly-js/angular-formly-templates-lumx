const name = 'ctrlLink';

function fields() {
  this.contents = {
    title: 'Controller / Link',
    docsLink: 'http://formly-js.github.io/angular-formly/#/example/advanced/custom-controller-and-link'
  };

  this.formData = {
    logToConsole: false,
    confirmation: false
  };

  this.fields = function(window) {
    return [{
      key: 'logToConsole',
      type: 'lx-checkbox',
      templateOptions: {
        label: 'Check the console'
      },
      controller: function() {
        console.log('Hi from controller!');
      },
      link: function() {
        console.log('Hi from link function!');
      }
    }, {
      key: 'confirmation',
      type: 'lx-checkbox',
      templateOptions: {
        label: 'Confirmation Message.'
      },
      link: function(scope, el) {
        el.bind('click', function() {
          var confirmation = confirm('Are you sure?');
          if (confirmation) {
            el.unbind('click');
          } else {
            window.event.preventDefault();
          }
        });
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
            formFields: function(ctrlLinkFF) {
              return ctrlLinkFF.fields;
            },
            contents: function(ctrlLinkFF) {
              return ctrlLinkFF.contents;
            },
            formData: function(ctrlLinkFF) {
              return ctrlLinkFF.formData;
            }
          }
        }
      }
    });
}
export default angular.module(`shmck.formFields.${name}`, [])
  .service(`${name}FF`, fields)
  .config(stateRoutes);

