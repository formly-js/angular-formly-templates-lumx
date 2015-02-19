(function () {
  'use strict';
  angular.module('shmck.formFields', [
    /* TYPES */
    'shmck.formFields.checkbox',
    'shmck.formFields.switch',
    'shmck.formFields.radio',
    'shmck.formFields.select',
    'shmck.formFields.datePicker',
    'shmck.formFields.input',
    'shmck.formFields.dropdown',
    /* WRAPPERS */
    'shmck.formFields.themes',
    'shmck.formFields.flex',
    'shmck.formFields.error',
    /* FEATURES */
    'shmck.formFields.modelOptions',
    'shmck.formFields.validators',
    'shmck.formFields.expression',
    'shmck.formFields.ngModelAttrs',
    'shmck.formFields.ctrlLink',
    'shmck.formFields.watcher'
  ]);
}());
