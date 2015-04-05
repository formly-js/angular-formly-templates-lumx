const name = 'googlePlaces';

function fields() {
  this.contents = {
    title: 'Google Places'
  };

  this.formData = {};

  this.fields = function() {
    return [{
      key: 'test',
      type: 'lx-input',
      templateOptions: {
        label: 'Test'
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
          template: require('../../main/main.html'),
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
function addTemplate(formlyConfigProvider) {
  formlyConfigProvider.setType({
    name: 'custom',
    templateUrl: 'custom-template.html'
  });
}

export default angular.module(`shmck.formFields.${name}`, [])
  .service(`${name}FF`, fields)
  .config(stateRoutes)
  .config(addTemplate);
