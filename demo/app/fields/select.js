const name = 'select';

function fields() {
  this.contents = {
    title: 'Selectors',
    subhead: 'select, multiple-select',
    docFile: 'docs/select.md'
  };

  this.formData = {
    singleSelect: '',
    singleSelectTwo: '',
    multipleSelect: ''
  };

  this.fields = function() {
    return [{
      key: 'singleSelect',
      type: 'lx-select',
      templateOptions: {
        label: 'Basic Single Select',
        placeholder: 'Choose a Person',
        selected: 'name',
        choice: 'name',
        options: [{
          name: 'Adam'
        }, {
          name: 'Amalie'
        }, {
          name: 'Wladimir'
        }, {
          name: 'Samantha'
        }, {
          name: 'Estefania'
        }]
      }
    }, {
      template: '<br/>'
    }, {
      key: 'singleSelectTwo',
      type: 'lx-select',
      templateOptions: {
        space: true,
        label: 'Advanced Single Select',
        placeholder: 'Choose an Email',
        allowClear: true,
        selected: 'name',
        selected2: 'age',
        choice: 'email',
        choice2: 'age',
        options: [
          {name: 'Adam', email: 'adam@email.com', age: 10},
          {name: 'Amalie', email: 'amalie@email.com', age: 12},
          {name: 'Wladimir', email: 'wladimir@email.com', age: 30},
          {name: 'Samantha', email: 'samantha@email.com', age: 31},
          {name: 'Estefanía', email: 'estefanía@email.com', age: 16},
          {name: 'Natasha', email: 'natasha@email.com', age: 54},
          {name: 'Nicole', email: 'nicole@email.com', age: 43},
          {name: 'Adrian', email: 'adrian@email.com', age: 21}
        ]
      }
    }, {
      template: '<br/>'
    }, {
      key: 'multipleSelect',
      type: 'lx-select',
      templateOptions: {
        space: true,
        multiple: true,
        label: 'Multiple Select',
        placeholder: 'Choose an Email',
        selected: 'name',
        choice: 'email',
        options: [
          {name: 'Adam', email: 'adam@email.com', age: 10},
          {name: 'Amalie', email: 'amalie@email.com', age: 12},
          {name: 'Wladimir', email: 'wladimir@email.com', age: 30},
          {name: 'Samantha', email: 'samantha@email.com', age: 31},
          {name: 'Estefanía', email: 'estefanía@email.com', age: 16},
          {name: 'Natasha', email: 'natasha@email.com', age: 54},
          {name: 'Nicole', email: 'nicole@email.com', age: 43},
          {name: 'Adrian', email: 'adrian@email.com', age: 21}
        ]
      }
      //}, {
      //  key: 'subFileInput',
      //  type: 'lx-subhead',
      //  templateOptions: {
      //    subhead: 'File Input',
      //    style: {'text-decoration': 'underline'}
      //  }
      //}, {
      //key: 'fileInput0',
      //type: 'lx-file-input',
      //templateOptions: {
      //  fileLabel: 'Input a file...',
      //  label: 'Filename'
      //}
    }];
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
            formFields: function(selectFF) {
              return selectFF.fields;
            },
            contents: function(selectFF) {
              return selectFF.contents;
            },
            formData: function(selectFF) {
              return selectFF.formData;
            }
          }
        }
      }
    });
}
export default angular.module(`shmck.formFields.${name}`, [])
  .service(`${name}FF`, fields)
  .config(stateRoutes);
