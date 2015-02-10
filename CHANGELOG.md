#1.0.6
##Breaking Changes
- removed `lx-subhead` renamed `lx-title`
- `lx-select-multiple` dropped. Now add `templateOptions.multiple: true` to `lx-select`
- `lx-text-field` more accurately renamed `lx-input`

##Inner Changes
- template shrunken

#1.0.0

## Breaking Changes
- module name changed from `formly.lumx` to `formlyLumx`.
- new dependency: `angular-formly@3.0.*`
- `<formly-form>` attribute `result` changed to `model`. See example below:

```html
  <formly-form model="formData" fields="formFields"></formly-form"
```

- `lx-radio-buttons` shortened to `lx-radio`
- `lx-wrapper-description` added for descriptions below
- `class` properties renamed `className` to avoid need for quotes
- file structure changed: './src/modules/*'
- demo added './demo/app'
- all template related form-fields put into [templateOptions](https://github.com/formly-js/angular-formly#templateoptions-). See the example below:

```javascript
{
  'key': 'someKey',
  'templateOptions': {
    'type': 'text', // html input type values [text, email, password, url, number]
    'label': 'Some Label', // acts as a placeholder & label
    'fixedLabel': false, // [default = false (float label), true = fixed label]
    /* all template related fields here */
  },
  validators: {},
  modelOptions: {}
}
```

## Features
- new [site with improved docs](https://github.com/formly-js/angular-formly-templates-lumx)
- docs folder added './docs'
- see [changes to angular-formly](https://github.com/formly-js/angular-formly/blob/master/CHANGELOG.md)
- add ng-directives using `bound` on [ngModelAttrs](https://github.com/formly-js/angular-formly#ngmodelattrs-object)
- other directives can be added to templates using `unbound` on ngModelAttrs
- ngModelAttrs can be manipulated using `expressionProperties`. See example below:

```javascript
{
  'key': 'item1',
  'type': 'lx-checkbox',
  'tempateOptions': {
    'value': false
  }
},
{
  'key': 'item2',
  'type': 'lx-input',
  'ngModelAttrs': {
    'bound': {
      /* adds ng-directive to field input */
      'ng-pattern': /[A-Za-z]/,
      'ng-disabled': false,
      'ng-maxlength': 10,
      'ng-required': true
    },
    'unbound': {
       /* add other/custom directives here */
    }
  },
  expressionProperties: {
    'ngModelAttrs.bound['ng-disabled']: 'model.item1'
  }
}
```


## In Progress
- `lx-wrapper-*`. Wrap data around your template for greater style control.
- `lx-flex` (flexbox feature)

## Inner changes
- Gulpfile to easily generate templates from fields
- Many ng-directives removed from templates in favor of ngModelAttrs
- Some custom select attributes removed
- `aria-labeledby` changed to `aria-describedby`
- `ngModel[options.key || $index]` simplified to `ngModel[options.key]`
- `formly-dynamic-name` dropped
