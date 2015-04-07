const name = 'watcher';

function fields() {
  this.contents = {
    title: 'Watcher'
  };

  this.formData = {};

  this.fields = function() {
    return [{
      key: 'watcher',
      type: 'lx-select',
      templateOptions: {
        label: 'Select a Number',
        placeholder: 'select',
        choice: 'value',
        selected: 'value',
        options: [{
          value: 1
        }, {
          value: 2
        }, {
          value: 3
        }]
      },
      watcher: {
        listener: function(field, newValue) { //, oldValue, scope, stopWatching
          console.log(newValue);
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
            formFields: function(watcherFF) {
              return watcherFF.fields;
            },
            contents: function(watcherFF) {
              return watcherFF.contents;
            },
            formData: function(watcherFF) {
              return watcherFF.formData;
            }
          }
        }
      }
    });
}
export default angular.module(`shmck.formFields.${name}`, [])
  .service(`${name}FF`, fields)
  .config(stateRoutes);

