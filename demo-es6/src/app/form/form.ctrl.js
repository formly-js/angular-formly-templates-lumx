
  'use strict';



  class FormCtrl {
    constructor (formFields, contents, LxDialogService) {
      this.contents = contents;
      this.formData = {};
      this.formFields = formFields();
      this.prettyJson = formFields();
      this.openDialog = function () {
        LxDialogService.open('docsModal');
      };
    }

  }

  FormCtrl.$inject = ['formFields', 'contents', 'LxDialogService'];

export default angular.module('demo')
  .controller('FormCtrl', FormCtrl);
