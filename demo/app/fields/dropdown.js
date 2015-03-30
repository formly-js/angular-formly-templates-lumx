export default angular.module('shmck.formFields.dropdown', [])
  .service('dropdownFormFields', dropdownFormFields)
  .config(stateRoutes);

function dropdownFormFields() {
  this.contents = {
    title: 'Dropdown'
    //markdownFile: 'app/docs/dropdown.md'
  };

  this.formData = {
    dropdown: ''
  };

  this.fields = function() {
    return [{
      key: 'dropdown',
      type: 'lx-dropdown',
      templateOptions: {
        label: 'Select',
        className: 'btn--m btn--black btn--flat',
        options: [{
          text: 'Item 1',
          action: function() {
            alert('item1');
          }
        }, {
          text: 'Item 2',
          action: function() {
            alert('item2');
          }
        }, {
          text: 'Item 3',
          action: function() {
            alert('item3');
          }
        }]
      }
    }, {
      key: 'dropdown',
      type: 'lx-dropdown',
      templateOptions: {
        className: 'btn--m btn--black btn--icon',
        icon: 'dots-vertical',
        options: [{
          text: 'Item 1',
          action: function() {
            alert('item1');
          }
        }, {
          text: 'Item 2',
          action: function() {
            alert('item2');
          }
        }, {
          text: 'Item 3',
          action: function() {
            alert('item3');
          }
        }]
      }
    }];
  };
}

function stateRoutes($stateProvider) {
  $stateProvider
    .state('dropdown', {
      url: '/dropdown',
      views: {
        'form@': {
          template: require('../main/main.html'),
          controller: 'MainCtrl as vm',
          resolve: {
            formFields: function(dropdownFormFields) {
              return dropdownFormFields.fields;
            },
            contents: function(dropdownFormFields) {
              return dropdownFormFields.contents;
            },
            formData: function(dropdownFormFields) {
              return dropdownFormFields.formData;
            }
          }
        }
      }
    });
}
