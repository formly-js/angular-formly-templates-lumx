### lx-input

```javascript
{
  'key': 'modelName',
  'type': 'lx-input'
  'templateOptions': {
    'type': 'text', // html input type values [text, email, password, url, number]
    'label': 'Some Label', // acts as a placeholder & label
    'description': 'A description below',
    /** styles **/
    'fixedLabel': false, // [default = false (float label), true = fixed label]
    'icon': 'account',
    'theme': 'light', // sets text color [default = 'light', 'dark']
    /** fields **/
    'disabled': false, // ng-disabled
    'required': false, // ng-required
  }
}
```

Read more about [lx-text](http://ui.lumapps.com/directives/text-fields).
