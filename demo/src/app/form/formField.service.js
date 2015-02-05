(function () {
  'use strict';
  angular.module('demo')
    .service('FormFieldService', FormFieldService);

  function FormFieldService() {
    var option = [{
      key: 'subCheckbox',
      type: 'lx-subhead',
      templateOptions: {
        subhead: 'Checkboxes:',
        style: {'text-decoration': 'underline'}
      }
    }, {
      key: 'checkbox0',
      type: 'lx-checkbox',
      value: false,
      templateOptions: {
        label: 'Show Missing Box'
      }
    }, {
      key: 'checkbox1',
      type: 'lx-checkbox',
      value: true,
      templateOptions: {
        label: 'Hidden Pre-checked Box',
        checked: true
      },
      hideExpression: '!checkbox0'
    }, {
      key: 'checkbox2',
      type: 'lx-checkbox',
      value: false,
      templateOptions: {
        label: 'Checkbox with Helper',
        help: 'Explaining a little more'
      }
    }, {
      key: 'checkbox3',
      type: 'lx-checkbox',
      value: true,
      templateOptions: {
        label: 'Disabled Box',
        disabled: true
      }
    }, {
      key: 'subSwitch',
      type: 'lx-subhead',
      templateOptions: {
        subhead: 'Switches:',
        style: {'text-decoration': 'underline'}
      }
    }, {
      key: 'switch0',
      type: 'lx-switch',
      templateOptions: {
        label: 'Untouched Switch'
      }
    }, {
      key: 'switch1',
      type: 'lx-switch',
      templateOptions: {
        label: 'Switched Switch',
        checked: true
      }
    }, {
      key: 'switch2',
      type: 'lx-switch',
      templateOptions: {
        label: 'Switch with Helper',
        help: 'Explaining a little more'
      }
    }, {
      key: 'switch3',
      type: 'lx-switch',
      templateOptions: {
        label: 'Disabled Switch',
        disabled: true
      }
    }, {
      key: 'subRadio',
      type: 'lx-subhead',
      templateOptions: {
        subhead: 'Radio Buttons:',
        style: {'text-decoration': 'underline'}
      }
    }, {
      key: 'radio0',
      type: 'lx-radio-buttons',
      templateOptions: {
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
      }
    }, {
      key: 'radio1',
      type: 'lx-radio-buttons',
      templateOptions: {
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
      }
    }];

    var select = [{
      key: 'subSelect',
      type: 'lx-subhead',
      templateOptions: {
        subhead: 'Selectors:',
        style: {'text-decoration': 'underline'}
      }
    }, {
      key: 'select',
      type: 'lx-select',
      templateOptions: {
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
      }
      }, {
      key: 'selectMultiple',
      type: 'lx-select-multiple',
      templateOptions: {
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
      }
    }, {
      key: 'subDatePicker',
      type: 'lx-subhead',
      templateOptions: {
        subhead: 'Date Picker',
        style: {'text-decoration': 'underline'}
      }
    }, {
      key: 'dob',
      type: 'lx-date-picker',
      templateOptions: {
        label: 'Pick a Date'
      }
    }, {
      key: 'subFileInput',
      type: 'lx-subhead',
      templateOptions: {
        subhead: 'File Input',
        style: {'text-decoration': 'underline'}
      }
    }, {
      key: 'fileInput0',
      type: 'lx-file-input',
      templateOptions: {
        fileLabel: 'Input a file...',
        label: 'Filename'
      }
    }];

    var text = [{
      key: 'subEmail',
      type: 'lx-subhead',
      templateOptions: {
        subhead: 'Text Fields:',
        class: 'fs-headline',
        style: {
          'text-decoration': 'underline'
        }
      }
    }, {
      key: 'email',
      type: 'lx-text-field',
      templateOptions: {
        mode: 'email',
        label: 'Email',
        required: true
      },
      wrapper: 'lx-wrapper-error-required',
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
      templateOptions: {
        mode: 'password',
        label: 'Password',
        required: true,
        minlength: 4,
        maxlength: 16
      },
      wrapper: 'lx-wrapper-error-required',
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
      templateOptions: {
        mode: 'text',
        label: 'This Label Doesn\'t Float',
        fixedLabel: true
      }
    }, {
      key: 'textArea',
      type: 'lx-textarea',
      templateOptions: {
        label: 'Textarea: Write as much as you\'d like'
      }
    }, {
      key: 'url0',
      type: 'lx-text-field',
      templateOptions: {
        mode: 'url',
        label: 'Write a proper URL',
        help: 'http://www.google.com'
      },
      wrapper: 'lx-wrapper-errors-text'
    }, {
      key: 'disabledText',
      type: 'lx-text-field',
      templateOptions: {
        mode: 'text',
        label: 'This Field is Disabled',
        disabled: true,
        fixedLabel: true
      }
    }, {
      key: 'textPattern',
      type: 'lx-text-field',
      templateOptions: {
        mode: 'text',
        label: 'Valid Four Letter Word Checker',
        pattern: /^[A-Za-z]{4}$/,
      },
      wrapper: 'lx-wrapper-errors-text',
      modelOptions: {
        allowInvalid: true,
        updateOn: 'default blur keydown',
        debounce: {
          keydown: 0,
          default: 0,
          blur: 0
        }
      }
    }];


    this.option = option;
    this.select = select;
    this.text = text;
  }

}());
