### lx-text-field API

```{
  'key': 'modelName',
  'templateOptions': {
    'fixedLabel': false, // [default = false (float label), true = fixed label]
    'type': 'text', // html input type values [text, email, password, url, number]
    'label': 'Some Label', // acts as a placeholder & label
    'theme': 'light', // sets text color [default = 'light', 'dark']
    'icon': 'account' // CURRENTLY NOT WORKING
    'disabled': false, // ng-disabled
    /* validation */
    'required': false, // ng-required
    'pattern': /^[A-Za-z]{4}$/, // ng-pattern regex value
    'minlength': 4, // ng-minlength
    'maxlength: 12, // ng-maxlength
    'min': '6', // ng-min (type: numbers only)
    'max: '50', // ng-max (type: numbers only)
  }, 
  validators: {},
  modelOptions: {}
}
```

Read more about [lx-text-field](http://ui.lumapps.com/directives/text-fields).
