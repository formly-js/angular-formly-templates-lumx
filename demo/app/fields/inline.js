const name = 'inline';

function fields() {
  this.contents = {
    title: 'Inline Wrapper',
    docFile: 'docs/inline.md'
  };

  this.formData = {};

  this.fields = function() {
    return [{
      key: 'workPlace',
      type: 'lx-input',
      wrapper: 'lx-wrapper-inline',
      templateOptions: {
        inline: {
          before: 'I work at ',
          after: '.'
        },
        fixedLabel: true,
        label: ' workplace'
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
        label: ' # years',
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
    .state(`${name}`, {
      url: `/${name}`,
      views: {
        'form@': {
          template: require('main/main.html'),
          controller: 'MainCtrl as vm',
          resolve: {
            formFields: function(inlineFF) {
              return inlineFF.fields;
            },
            contents: function(inlineFF) {
              return inlineFF.contents;
            },
            formData: function(inlineFF) {
              return inlineFF.formData;
            }
          }
        }
      }
    });
}
export default angular.module(`shmck.formFields.${name}`, [])
  .service(`${name}FF`, fields)
  .config(stateRoutes);
