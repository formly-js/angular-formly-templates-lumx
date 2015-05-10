// for testing purposes
const name = 'test';

function fields() {
  this.contents = {
    title: 'test'
  };

  this.formData = {};

  this.fields = function () {
    return [{
      "key": "row",
      "type": "lx-flex",
      "templateOptions": {
        "flex": {
          "container": "row",
          "item": 6
        },
        "fields": [
          {
            key: 'text',
            type: 'lx-input',
            templateOptions: {
              type: 'number',
              label: 'Text'
            },
            "watcher": {
              "listener": function(field, newValue, oldValue, scope, stopWatching) {
                console.log("watcher");
                if (newValue) {
                  console.log(newValue);
                }
              }
            }
          }
        ]
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
            formFields: function (testFF) {
              return testFF.fields;
            },
            contents: function (testFF) {
              return testFF.contents;
            },
            formData: function (testFF) {
              return testFF.formData;
            }
          }
        }
      }
    });
}
export default angular.module(`shmck.formFields.${name}`, [])
  .service(`${name}FF`, fields)
  .config(stateRoutes);
