const name = 'googlePlaces';

function fields() {
  this.contents = {
    title: 'Google Places'
  };

  this.formData = {};

  this.fields = function() {
    return [];
  };
}

function stateRoutes($stateProvider) {
  $stateProvider
    .state(`${name}`, {
      url: `/${name}`,
      views: {
        'form@': {
          template: require('../main/main.html'),
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
export default angular.module(`shmck.experimental.${name}`, [])
  .service(`${name}`, fields)
  .config(stateRoutes);
