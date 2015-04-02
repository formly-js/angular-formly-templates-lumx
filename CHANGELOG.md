#1.5.2
- inline radio buttons

#1.5.1
- formlyLumx.js re-written in webpack
- you can now more easily edit and customize your own templates. Compile them by running "webpack" in the console.

#1.4.0
- demo re-written using ES6 & Webpack
- updated advanced form layouts
- new: `lx-wrapper-inline` for inline styles.

## Breaking Changes
- rewritten `lx-flex` to handle previous functionality.
- `lx-wrapper-flex` no longer necessary for most cases. Just set the default flex in the `lx-flex` parent

#1.3.3
- less strict bower dependencies

#1.3.2
- allow simpler `lx-select` templates. For example: `options: ['a', 'b']`
- files in `dist` folder. Shortened titles to `formlyLumx`.
- removed `lx-title`. Use `template: <h1>Some Title</h1><br/>` or other custom titles instead.

#1.2.2
#Features
- Improved accessibility with ngAria

#Fixes
- Dependency issue with apiCheck

#1.2.0
##Features
- set default `VALIDATION_MESSAGES` in the module file easily. For example:
```javascript
/* angular-formly-templates-lumx.js */
var VALIDATION_MESSAGES = [{
  name: 'required',
  message: 'Aren\'t you forgetting something?'
}];
```
- added template validation using [apiCheck.js](https://github.com/kentcdodds/apiCheck.js). Read more about validateOptions [here](https://github.com/formly-js/angular-formly#validateoptions-function).
In other words, if you put invalid data into the template, you get a warning in the console.
- set `USING_TEMPLATE_VALIDATION` to `false` in the src/modules/angular-formly-tempaltes-lumx.js file to skip validation. You may want to do this for deployment.
- updated to `angular-formly@4.0`

##Breaking Changes
- No more validation.messages as an array. This parallels a more dynamic way of doing validation.messages in angular-formly.
```javascript
/* Old */
validation: {
  messages: [{name: 'required', message: 'This field is required.'}]
}
/* New */
validation: {
  required: function(viewValue, modelValue, scope) {
    return scope.to.label + ' is required';
  }
}
```
- Validators have changed. See the examples in the demo, or view a [validators example](http://formly-js.github.io/angular-formly/#/example/advanced/validators) from the angular-formly docs


#1.1.2
- module config/run updated to work with angular-formly@3.2+
- take advantage of [extends](https://github.com/formly-js/angular-formly#extends-string)

#1.1.1
- `lx-wrapper-errors` bugfix
- `lx-dropdown` added
- styles fixes

#1.1.0
- added `styles/angular-formly-templates-lumx.css` for spacing and error styles
- updates for new version of lumx
- `lx-input` now can use `icons`

#1.0.15
- dropped one-way bindings on `label`s, can now be dynamic
- reduced template/config size with `angular-formly@3.1.5` updates

#1.0.14
- added `pending` to `lx-wrapper-errors` for use with async validators. See demo for an example.
- `lx-input` `disabled` and `validators` improved

#1.0.13
- flexbox grid working.
- flexbox still requires style fixes for `lx-select` with flexbox. See example in demo.

#1.0.10
- errors now handled by new `validation.messages` pipeline in `angular-formly@3.0.9`. See examples in demo under "Errors"
##Breaking Changes (less of these in the near future!)
- dropped `templateOptions.errors` in `lx-wrapper-errors`

#1.0.9
- `aria-describedby` & `description` added dynamically with templateManipulators
##Breaking Changes
- all `help` attributes changed to `description`

#1.0.7
##Features
- dynamic error handling with `lx-wrapper-errors`
- fixed issue with wrappers

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
  <formly-form model="formData" fields="formFields"></formly-form">
```

- `lx-radio-buttons` shortened to `lx-radio`
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
      'maxlength': 10,
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

## Inner changes
- Gulpfile to easily generate templates from fields
- Many ng-directives removed from templates in favor of ngModelAttrs
- Some custom select attributes removed
- `aria-labeledby` changed to `aria-describedby`
- `ngModel[options.key || $index]` simplified to `ngModel[options.key]`
- `formly-dynamic-name` dropped
