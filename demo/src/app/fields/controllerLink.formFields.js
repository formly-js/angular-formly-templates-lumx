(function () {
  'use strict';

  angular.module('shmck.formFields.ctrlLink', [])
    .service('ctrlLinkFormFields', ctrlLinkFormFields)
    .config(stateRoutes);

  function ctrlLinkFormFields() {
    this.contents = {
      title: 'Controller / Link',
      docsLink: 'http://formly-js.github.io/angular-formly/#/example/advanced/custom-controller-and-link'
    };

    this.formData = {
      logToConsole: false,
      confirmation: false
    };

    this.fields = function () {
      return [{
        key: 'logToConsole',
        type: 'lx-checkbox',
        templateOptions: {
          label: 'Check the console'
        },
        controller: function () {
          console.log('Hi from controller!');
        },
        link: function () {
          console.log('Hi from link function!');
        }
      }, {
        key: 'confirmation',
        type: 'lx-checkbox',
        templateOptions: {
          label: 'Confirmation Message.'
        },
        link: function (scope, el, attrs, ctrl) {
          el.bind('click', function () {
            var confirmation = confirm('Are you sure?');
            if (confirmation) {
              el.unbind('click');
            } else {
              event.preventDefault();
            }
          });
        }
      }];
    };
  }

  function stateRoutes($stateProvider) {
    $stateProvider
      .state('ctrlLink', {
        url: '/ctrlLink',
        views: {
          'form@': {
            templateUrl: 'app/form/form.html',
            controller: 'FormCtrl as vm',
            resolve: {
              formFields: function (ctrlLinkFormFields) {
                return ctrlLinkFormFields.fields;
              },
              contents: function (ctrlLinkFormFields) {
                return ctrlLinkFormFields.contents;
              },
              formData: function (ctrlLinkFormFields) {
                return ctrlLinkFormFields.formData;
              }
            }
          }
        }
      });
  }

}());
