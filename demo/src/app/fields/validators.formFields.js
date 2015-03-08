(function () {
  'use strict';

  angular.module('shmck.formFields.validators', [])
    .service('validatorsFormFields', validatorsFormFields)
    .config(stateRoutes);

  /*@ngInject*/
  function validatorsFormFields($timeout, $q) {
    this.contents = {
      title: 'Validators',
      subhead: 'sync & async, pending',
      docsLink: 'http://formly-js.github.io/angular-formly/#/example/advanced/validators'
    };

    this.formData = {
      iceCreamFlavor: '',
      iceCreamFlavor2: ''
    };

    function flavorInStock(viewValue, modelValue) {
      return $timeout(function () {
        var value = modelValue || viewValue || '';
        var flavors = ['chocolate', 'vanilla', 'strawberry'];
        var fn = (flavors.indexOf(value.toLowerCase()) !== -1) ? $q.when : $q.reject;
        return fn();
      }, 800);
    }

    var flavorInStockValidator = {
      flavorInStock: {
        expression: flavorInStock,
        //message: '"View Value: " + $viewValue'
        message: '"Sorry, we don\'t have that flavor in stock. How about chocolate?"'
      }
    };

    this.fields = function () {
      return [{
        key: 'iceCreamFlavor',
        type: 'lx-input',
        wrapper: 'lx-wrapper-errors',
        validators: flavorInStockValidator,
        templateOptions: {
          label: 'What\'s your favorite ice cream?'
        },
        modelOptions: {
          updateOn: 'keyup blur'
        }
      }, {
        key: 'iceCreamFlavor2',
        type: 'lx-input',
        wrapper: 'lx-wrapper-errors',
        validators: flavorInStockValidator,
        templateOptions: {
          label: 'What\'s your favorite ice cream? (pending)',
          pending: 'Checking for ice cream flavor...'
        },
        modelOptions: {
          updateOn: 'keyup'
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
              formData: function (validatorsFormFields) {
                return validatorsFormFields.formData;
              }
            }
          }
        }
      });
  }

}());
