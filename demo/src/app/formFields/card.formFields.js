(function () {
  'use strict';

  angular.module('shmck.formFields.card', [])
    .service('cardFormFields', cardFormFields)
    .config(stateRoutes);

  function cardFormFields() {
    this.contents = {
      title: 'Card Wrappers',
      subhead: '',
      description: ''
    };

    this.fields = function () {
      return [{
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
      }];
    };
  }

  function stateRoutes($stateProvider) {
    $stateProvider
      .state('card', {
        url: '/card',
        views: {
          'form@': {
            templateUrl: 'app/form/form.html',
            controller: 'FormCtrl as vm',
            resolve: {
              formFields: function (cardFormFields) {
                return cardFormFields.fields;
              },
              contents: function (cardFormFields) {
                return cardFormFields.contents;
              }
            }
          }
        }
      });
  }


}());
