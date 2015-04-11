const name = 'googlePlaces';
require('bower_components/angular-google-places-autocomplete/dist/autocomplete.min.css');
require('imports?angular!bower_components/angular-google-places-autocomplete/dist/autocomplete.min.js');

function fields() {
  this.contents = {
    title: 'Google Places',
    docsLink: 'https://github.com/kuhnza/angular-google-places-autocomplete'
  };

  this.formData = {};

  this.fields = function() {
    return [{
      key: 'location',
      type: 'lx-input',
      templateOptions: {
        icon: 'city',
        fixedLabel: true,
        label: 'Location'
      },
      ngModelAttrs: {
        googlePlaces: {
          attribute: 'g-places-autocomplete',
          bound: 'g-places-autocomplete'
        }
      },
      expressionProperties: {
        'templateOptions.googlePlaces': 'model.text'
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
            formFields: function(googlePlacesFF) {
              return googlePlacesFF.fields;
            },
            contents: function(googlePlacesFF) {
              return googlePlacesFF.contents;
            },
            formData: function(googlePlacesFF) {
              return googlePlacesFF.formData;
            }
          }
        }
      }
    });
}
export default angular.module(`shmck.formFields.advanced.${name}`, [
  'google.places'
])
  .service(`${name}FF`, fields)
  .config(stateRoutes);
