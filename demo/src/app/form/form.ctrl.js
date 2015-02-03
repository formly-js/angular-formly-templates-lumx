'use strict';
/*jshint esnext: true */

class FormCtrl {
  constructor() {
    this.formData = {};
    this.formOptions = {
      uniqueFormId: 'testForm'
    };
    this.formFields = [{
      key: 'subEmail',
      type: 'lx-subhead',
      subhead: 'Text Fields:',
      class: 'fs-headline',
      style: {
        'text-decoration': 'underline'
      }
    }, {
      key: 'email',
      type: 'lx-text-field',
      mode: 'email',
      label: 'Email',
      required: true,
      modelOptions: {
        allowInvalid: true,
        updateOn: 'default blur keydown',
        debounce: {
          keydown: 500,
          default: 500,
          blur: 0
        }
      }
    }, {
      key: 'password',
      type: 'lx-text-field',
      mode: 'password',
      label: 'Password',
      required: true,
      minlength: 4,
      maxlength: 16,
      modelOptions: {
        allowInvalid: true,
        updateOn: 'default blur keydown',
        debounce: {
          keydown: 500,
          default: 500,
          blur: 0
        }
      }
    }, {
      key: 'fixedLabel',
      type: 'lx-text-field',
      mode: 'text',
      label: 'This Label Doesn\'t Float',
      fixedLabel: true
    }, {
      key: 'disabledText',
      type: 'lx-text-field',
      mode: 'text',
      label: 'This Field is Disabled',
      disabled: true,
      fixedLabel: true
    }, {
      key: 'textPattern',
      type: 'lx-text-field',
      mode: 'text',
      label: 'Valid Four Letter Word Checker',
      pattern: /^[A-Za-z]{4}$/,
      modelOptions: {
        allowInvalid: true,
        updateOn: 'default blur keydown',
        debounce: {
          keydown: 0,
          default: 0,
          blur: 0
        }
      }
    }, {
      key: 'textArea',
      type: 'lx-textarea',
      label: 'Write as much as you\'d like'
    }, {
      key: 'url0',
      type: 'lx-text-field',
      mode: 'url',
      label: 'Write a proper URL',
      help: 'http://www.google.com'
    }, {
      key: 'subNumber',
      type: 'lx-subhead',
      subhead: 'Number Picker',
      style: {'text-decoration': 'underline'}
    }, {
      key: 'number0',
      type: 'lx-text-field',
      mode: 'number',
      label: 'Pick a number between 3 & 7',
      min: 3,
      max: 7
    }, {
      key: 'subCheckbox',
      type: 'lx-subhead',
      subhead: 'Checkboxes:',
      style: {'text-decoration': 'underline'}
    }, {
      key: 'checkbox0',
      type: 'lx-checkbox',
      value: false,
      label: 'Show Missing Box'
    }, {
      key: 'checkbox1',
      type: 'lx-checkbox',
      label: 'Hidden Pre-checked Box',
      value: true,
      checked: true,
      hideExpression: '!checkbox0'
    }, {
      key: 'checkbox2',
      type: 'lx-checkbox',
      label: 'Checkbox with Helper',
      value: false,
      help: 'Explaining a little more'
    }, {
      key: 'checkbox3',
      type: 'lx-checkbox',
      label: 'Disabled Box',
      value: true,
      disabled: true

    }, {
      key: 'subSwitch',
      type: 'lx-subhead',
      subhead: 'Switches:',
      style: {'text-decoration': 'underline'}
    }, {
      key: 'switch0',
      type: 'lx-switch',
      label: 'Untouched Switch'
    }, {
      key: 'switch1',
      type: 'lx-switch',
      label: 'Switched Switch',
      checked: true
    }, {
      key: 'switch2',
      type: 'lx-switch',
      label: 'Switch with Helper',
      help: 'Explaining a little more'
    }, {
      key: 'switch3',
      type: 'lx-switch',
      label: 'Disabled Switch',
      disabled: true
    }, {
      key: 'subRadio',
      type: 'lx-subhead',
      subhead: 'Radio Buttons:',
      style: {'text-decoration': 'underline'}
    }, {
      key: 'radio0',
      type: 'lx-radio-buttons',
      label: 'What\'s your favorite number?',
      options: [{
        name: 'One',
        value: 1
      }, {
        name: 'Seven',
        value: 7
      }, {
        name: 'Thirteen',
        value: 13,
        disabled: true
      }]
    }, {
      key: 'radio1',
      type: 'lx-radio-buttons',
      label: 'What\'s your least favorite number?',
      options: [{
        name: 'One',
        value: 1,
        help: 'The First'
      }, {
        name: 'Seven',
        value: 7,
        help: 'The Lucky One'
      }, {
        name: 'Thirteen',
        value: 13,
        help: 'The Unlucky One',
        disabled: true
      }]
    }, {
      key: 'subSelect',
      type: 'lx-subhead',
      subhead: 'Selectors:',
      style: {'text-decoration': 'underline'}
    }, {
      key: 'select',
      type: 'lx-select',
      label: 'Single Select',
      placeholder: 'Choose an Email',
      allowClear: true,
      selected: 'name',
      selected2: 'age',
      choice: 'email',
      choice2: 'age',
      choices: [
        {name: 'Adam', email: 'adam@email.com', age: 10},
        {name: 'Amalie', email: 'amalie@email.com', age: 12},
        {name: 'Wladimir', email: 'wladimir@email.com', age: 30},
        {name: 'Samantha', email: 'samantha@email.com', age: 31},
        {name: 'Estefanía', email: 'estefanía@email.com', age: 16},
        {name: 'Natasha', email: 'natasha@email.com', age: 54},
        {name: 'Nicole', email: 'nicole@email.com', age: 43},
        {name: 'Adrian', email: 'adrian@email.com', age: 21}
      ]
    }, {
      key: 'selectMultiple',
      type: 'lx-select-multiple',
      label: 'Multiple Select',
      placeholder: 'Choose an Email',
      selected: 'name',
      choice: 'email',
      choices: [
        {name: 'Adam', email: 'adam@email.com', age: 10},
        {name: 'Amalie', email: 'amalie@email.com', age: 12},
        {name: 'Wladimir', email: 'wladimir@email.com', age: 30},
        {name: 'Samantha', email: 'samantha@email.com', age: 31},
        {name: 'Estefanía', email: 'estefanía@email.com', age: 16},
        {name: 'Natasha', email: 'natasha@email.com', age: 54},
        {name: 'Nicole', email: 'nicole@email.com', age: 43},
        {name: 'Adrian', email: 'adrian@email.com', age: 21}
      ]
    }, {
      key: 'subDatePicker',
      type: 'lx-subhead',
      subhead: 'Date Picker',
      style: {'text-decoration': 'underline'}
    }, {
      key: 'dob',
      type: 'lx-date-picker',
      label: 'Pick a Date'
    }, {
      key: 'subFileInput',
      type: 'lx-subhead',
      subhead: 'File Input',
      style: {'text-decoration': 'underline'}
    }, {
      key: 'fileInput0',
      type: 'lx-file-input',
      fileLabel: 'Input a file...',
      label: 'Filename'
    }];
  }

  submit(isValid) {
    if (isValid) {
      console.log('submitted');
    }
  }

  prettyJson() {
    return angular.toJson(this.formFields);
  }
}

export default FormCtrl;
