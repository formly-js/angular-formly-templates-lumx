#1.0.0

## Breaking Changes
- new dependency: `angular-formly@3.0.*`
- `lx-text-field` shortened to `lx-text`
- `lx-radio-buttons` shortened to `lx-radio`
- removed `lx-subhead` in favor of new feature: 'wrappers'
- file structure changed: './src/modules/*'
- demo added './demo/app'
- all template related form-fields put into [templateOptions](https://github.com/formly-js/angular-formly#templateoptions-). See the example below:

```javascript
{
  'key': 'modelName',
  'templateOptions': {
    'fixedLabel': false, // [default = false (float label), true = fixed label]
    'type': 'text', // html input type values [text, email, password, url, number]
    'label': 'Some Label', // acts as a placeholder & label
    'theme': 'light', // sets text color [default = 'light', 'dark']
    'disabled': false, // ng-disabled
    'required': false, // ng-required
    'icon': 'account' //COMING SOON
  },
  validators: {},
  modelOptions: {}
}
```

## Features
- new [site with improved docs](https://github.com/formly-js/angular-formly-templates-lumx)
- see [changes to angular-formly](https://github.com/formly-js/angular-formly/blob/master/CHANGELOG.md)
- add ng-directives using [ngModelAttrs](https://github.com/formly-js/angular-formly#ngmodelattrs-object)


## In Progress
- `lx-wrapper-*`. Wrap data around your template for greater style control.
- `lx-flex` (flexbox feature)