(function () {
  'use strict';

  angular.module('shmck.formFields.ngModelAttrs', [])
    .service('ngModelAttrsFormFields', ngModelAttrsFormFields)
    .config(stateRoutes);

  function ngModelAttrsFormFields() {
    this.contents = {
      title: 'ngModelAttrs',
      subhead: 'coming soon',
      description: '',
      markdownFile: 'app/docs/ngModelAttrs.md'
    };


    this.fields = function () {
      return [{
        //key: 'ngClickExample',
        //type: 'lx-checkbox',
        //templateOptions: {
        //  label: 'ng-click example'
        //},
        //ngModelAttrs: {
        // //
        //}
      }];
    };
  }

  function stateRoutes($stateProvider) {
    $stateProvider
      .state('ngModelAttrs', {
        url: '/ngModelAttrs',
        views: {
          'form@': {
            templateUrl: 'app/form/form.html',
            controller: 'FormCtrl as vm',
            resolve: {
              formFields: function (ngModelAttrsFormFields) {
                return ngModelAttrsFormFields.fields;
              },
              contents: function (ngModelAttrsFormFields) {
                return ngModelAttrsFormFields.contents;
              }
            }
          }
        }
      });
  }

}());
