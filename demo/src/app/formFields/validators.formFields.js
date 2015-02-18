(function () {
  'use strict';

  angular.module('shmck.formFields.validators', [])
    .service('validatorsFormFields', validatorsFormFields)
    .config(stateRoutes);

  /*@ngInject*/
  function validatorsFormFields($timeout, $q) {
    this.contents = {
      title: 'validators',
      subhead: '',
      description: ''
    };

    this.formData = {
      iceCreamFlavor: ''
    };

    this.fields = function () {
      return [{
        key: 'iceCreamFlavor',
        type: 'lx-input',
        wrapper: 'lx-wrapper-errors',
        validators: {
          flavorInStock: {
            expression: function (modelValue, viewValue) {
              return $timeout(function () {
                var value = modelValue || viewValue || '';
                var flavors = ['chocolate', 'vanilla', 'strawberry'];
                var fn = (flavors.indexOf(value.toLowerCase()) !== -1) ? $q.when : $q.reject;
                return fn();
              }, 500);
            }
          }
        },
        templateOptions: {
          label: 'What\'s your favorite ice cream?'
        },
        validation: {
          messages: [{
            name: 'flavorInStock',
            message: 'Sorry we don\'t have that flavor. How about chocolate, vanilla or strawberry?'
          }]
        }
      }];
    };
  }

  function stateRoutes($stateProvider) {
    $stateProvider
      .state('validators', {
        url: '/validators',
        views: {
          'form@': {
            templateUrl: 'app/form/form.html',
            controller: 'FormCtrl as vm',
            resolve: {
              formFields: function (validatorsFormFields) {
                return validatorsFormFields.fields;
              },
              contents: function (validatorsFormFields) {
                return validatorsFormFields.contents;
              },
              formData: function(validatorsFormFields) {
                return validatorsFormFields.formData;
              }
            }
          }
        }
      });
  }

}());
