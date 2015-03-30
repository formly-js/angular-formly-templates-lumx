export default angular.module('shmck.formFields.inline', [])
  .service('inlineFormFields', inlineFormFields)
  .config(stateRoutes);

function inlineFormFields() {
  this.contents = {
    title: 'Inline Wrapper',
    docFile: 'docs/input.md'
  };

  this.formData = {};

  this.fields = function() {
    return [{
      key: 'workPlace',
      type: 'lx-input',
      wrapper: 'lx-wrapper-inline',
      templateOptions: {
        inline: {
          before: 'I work at '
        },
        fixedLabel: true,
        label: 'Work Place'
      },
    }, {
      key: 'experience',
      type: 'lx-input',
      wrapper: 'lx-wrapper-inline',
      templateOptions: {
        inline: {
          before: 'I\'ve been working there for ',
          after: ' years.'
        },
        type: 'number',
        label: '# years',
        fixedLabel: true
      }
    }, {
      key: 'salaryHope',
      type: 'lx-select',
      wrapper: 'lx-wrapper-inline',
      templateOptions: {
        inline: {
          before: 'I hope to make ',
          after: ' per year.',
          contentStyle: {
            bottom: '-11px'
          }
        },
        placeholder: 'Salary Expectation',
        selected: 'range',
        choice: 'range',
        options: [{
          range: 'under $30,000'
        }, {
          range: 'between $30 & 50,000'
        }, {
          range: 'between $50 & 75,000'
        }, {
          range: 'over $75,000'
        }]
      }
    }];
  };
}

function stateRoutes($stateProvider) {
  $stateProvider
    .state('inline', {
      url: '/inline',
      views: {
        'form@': {
          template: require('../main/main.html'),
          controller: 'MainCtrl as vm',
          resolve: {
            formFields: function(inlineFormFields) {
              return inlineFormFields.fields;
            },
            contents: function(inlineFormFields) {
              return inlineFormFields.contents;
            },
            formData: function(inlineFormFields) {
              return inlineFormFields.formData;
            }
          }
        }
      }
    });
}
