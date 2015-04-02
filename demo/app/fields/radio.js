export default angular.module('shmck.formFields.radio', [])
  .service('radioFormFields', radioFormFields)
  .config(stateRoutes);

function radioFormFields() {
  this.contents = {
    title: 'Radio',
    docFile: 'docs/radio.md'
  };

  this.formData = {
    radio: '',
    radioWithDescription: '',
    radioInline: ''
  };

  this.fields = function() {
    return [{
      key: 'radio',
      type: 'lx-radio',
      templateOptions: {
        label: 'What\'s your favorite number?',
        options: [{
          name: 'One',
          value: 1
        }, {
          name: 'Seven',
          value: 7
        }, {
          name: 'Thirteen',
          value: 13,
          disabled: true
        }]
      }
    }, {
      key: 'radioWithDescription',
      type: 'lx-radio',
      templateOptions: {
        label: 'What\'s your least favorite number?',
        options: [{
          name: 'One',
          value: 1,
          description: 'The First'
        }, {
          name: 'Seven',
          value: 7,
          description: 'The Lucky One'
        }, {
          name: 'Thirteen',
          value: 13,
          description: 'The Unlucky One',
          disabled: true
        }]
      }
    }, {
      key: 'radioInline',
      type: 'lx-radio',
      templateOptions: {
        label: 'What\'s your least favorite number?',
        inline: true,
        options: [{
          name: 'One',
          value: 1
        }, {
          name: 'Seven',
          value: 7
        }, {
          name: 'Thirteen',
          value: 13,
          disabled: true
        }]
      }
    }];
  };
}

function stateRoutes($stateProvider) {
  $stateProvider
    .state('radio', {
      url: '/radio',
      views: {
        'form@': {
          template: require('../main/main.html'),
          controller: 'MainCtrl as vm',
          resolve: {
            formFields: function(radioFormFields) {
              return radioFormFields.fields;
            },
            contents: function(radioFormFields) {
              return radioFormFields.contents;
            },
            formData: function(radioFormFields) {
              return radioFormFields.formData;
            }
          }
        }
      }
    });
}
