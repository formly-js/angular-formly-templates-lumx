const name = 'dropdown';

function fields() {
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
    .state(`${name}`, {
      url: `/${name}`,
      views: {
        'form@': {
          template: require('main/main.html'),
          controller: 'MainCtrl as vm',
          resolve: {
            formFields: function(dropdownFF) {
              return dropdownFF.fields;
            },
            contents: function(dropdownFF) {
              return dropdownFF.contents;
            },
            formData: function(dropdownFF) {
              return dropdownFF.formData;
            }
          }
        }
      }
    });
}
export default angular.module(`shmck.formFields.${name}`, [])
  .service(`${name}FF`, fields)
  .config(stateRoutes);
