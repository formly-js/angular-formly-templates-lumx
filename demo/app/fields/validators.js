const name = 'validators';

/*@ngInject*/
function fields($timeout, $q) {
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
    return $timeout(function() {
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

  this.fields = function() {
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
    .state(`${name}`, {
      url: `/${name}`,
      views: {
        'form@': {
          template: require('main/main.html'),
          controller: 'MainCtrl as vm',
          resolve: {
            formFields: function(validatorsFF) {
              return validatorsFF.fields;
            },
            contents: function(validatorsFF) {
              return validatorsFF.contents;
            },
            formData: function(validatorsFF) {
              return validatorsFF.formData;
            }
          }
        }
      }
    });
}
export default angular.module(`shmck.formFields.${name}`, [])
  .service(`${name}FF`, fields)
  .config(stateRoutes);
