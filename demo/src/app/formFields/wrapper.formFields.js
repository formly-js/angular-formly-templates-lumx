(function () {
  'use strict';

  angular.module('shmck.formFields.wrapper', [])
    .service('wrapperFormFields', wrapperFormFields)
    .config(stateRoutes);

  function wrapperFormFields() {
    this.fields = function () {
      return [{
        key: 'subCard',
        type: 'lx-subhead',
        templateOptions: {
          subhead: 'Box Wrappers:',
          class: 'fs-headline',
          style: {
            'text-decoration': 'underline'
          }
        }
      }, {
        key: 'card0',
        type: 'lx-radio-buttons',
        wrapper: 'lx-wrapper-card',
        templateOptions: {
          type: 'text',
          fixedLabel: true,
          label: 'How do you feel about kittens?',
          cardTitle: 'Card Wrapper Example',
          cardSubTitle: 'wrapper: \'lx-wrapper-card\'',
          cardImage: 'http://placekitten.com/g/200/300',
          cardImageTitle: 'Kittens!',
          options: [{
            name: 'Angry',
            value: 'Mad person'
          }, {
            name: 'Happy',
            value: 'Normal person'
          }, {
            name: 'Meow',
            value: 'kitten'
          }]
        }
      }, {
        key: 'subText',
        type: 'lx-subhead',
        templateOptions: {
          subhead: 'Info Wrappers',
          class: 'fs-headline',
          style: {
            'text-decoration': 'underline'
          }
        }
      }, {
        key: 'text0',
        type: 'lx-text-field',
        wrapper: 'lx-wrapper-description',
        templateOptions: {
          type: 'text',
          fixedLabel: true,
          label: 'Element with a description wrapper',
          description: 'Add "wrapper: \'lx-wrapper-description\'" to any field.'
        }
      }];
    };
  }

  function stateRoutes($stateProvider) {
    $stateProvider
      .state('wrapper', {
        url: '/wrapper',
        views: {
          'form@': {
            templateUrl: 'app/form/form.html',
            controller: 'FormCtrl as vm',
            resolve: {
              formFields: function (wrapperFormFields) {
                return wrapperFormFields.fields;
              }
            }
          }
        }
      });
  }


}());
