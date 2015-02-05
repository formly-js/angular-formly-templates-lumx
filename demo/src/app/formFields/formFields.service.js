(function () {
  'use strict';
  angular.module('shmck.formFields', [
    'shmck.formFields.option',
    'shmck.formFields.select',
    'shmck.formFields.text'
  ])
    .service('FormFieldService', FormFieldService);

  function FormFieldService(optionFormFields, selectFormFields, textFormFields) {
    this.option = optionFormFields.fields;
    this.select = selectFormFields.fields;
    this.text = textFormFields.fields;
  }

}());
