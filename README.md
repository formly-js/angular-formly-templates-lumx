FormlyLumx
==========

[![Join the chat at https://gitter.im/formly-js/angular-formly-templates-lumx](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/formly-js/angular-formly-templates-lumx?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

LumX Templates for Angular-Formly. Modern & flexible forms configured easily in a JSON object.

# Currently 1.5.2
- View [demo](https://af-lumx.herokuapp.com/ "Angular-Formly-Lumx Demo").
- See the [docs](https://github.com/formly-js/angular-formly-templates-lumx/tree/master/docs "Documentation") for template APIs.
- See the [changelog](https://github.com/formly-js/angular-formly-templates-lumx/blob/master/CHANGELOG.md "Templates-LumX Changes") for details.


# Setup

## Bower

`bower install angular angular-formly lumx angular-messages angular-aria angular-formly-templates-lumx`

## Dependencies

1. Angular (@1.3+)
2. [Angular-Formly](https://github.com/formly-js/angular-formly "Angular-Formly") (@4.0)
3. [LumX Framework](http://ui.lumapps.com/ "LumX Framework") (@0.3+)
4. [ngMessages](https://docs.angularjs.org/api/ngMessages/directive/ngMessages "ngMessages Docs") (@1.3+)

## Getting Started

1. Install dependencies (for example, with Bower (see Bower above)
2. Add the following dependencies to your Angular module:

```javascript
angular.module('myAppName', [
    'ngMessages',
    'ngAria',
    'formly',
    'lumx',
    'formlyLumx'
  ])
```

It's also recommended to add a link to `./styles/angular-formly-templates-lumx.css`.

## Demo
Run the demo locally or view it on the [site](https://formly-lumx.herokuapp.com/ "Angular-Formly-Lumx Demo").
- clone this github repo
- go into the demo directory `cd demo`
- download packages `bower install && npm install`
- run Webpack `npm start`. On windows: `npm-start-win`

## View

Not much necessary. The form just requires the `<formly-form>` directive tag. For example:

#####Basic Setup
```html
  <!-- formly-form directive generates templates -->
  <formly-form model="formData" fields="formFields"></formly-form>
```

#####With Submit & Options
```html
     <formly-form model="formData" fields="formFields" options="formOptions">
       <br>
       <button ng-click="submit()">Submit</button>
     </formly-form>
```

## Controller

Add your formData & formFields onto a controller.

```javascript
angular.module('myAppName').controller('FormCtrl', FormCtrl);
function FormCtrl ($scope) {
  $scope.formData = {};  // the data object
  $scope.formOptions = {}; // optional form parameters
  $scope.formFields = [{ // an array holding all form fields
    key: 'email',    // ng-model name, saved in formData
    type: 'lx-input', // field
    templateOptions: {  // in this case: 'lx-input' options
      type: 'email'
      label: 'Email'
    }
  }];
}
```

# Components

## Fields

Basic form elements.

- [lx-input](https://github.com/formly-js/angular-formly-templates-lumx/tree/master/docs/input.md) (text | email | password | number | url)
- [lx-textarea](https://github.com/formly-js/angular-formly-templates-lumx/tree/master/docs/textarea.md)
- [lx-switch](https://github.com/formly-js/angular-formly-templates-lumx/tree/master/docs/switch.md)
- [lx-checkbox](https://github.com/formly-js/angular-formly-templates-lumx/tree/master/docs/checkbox.md)
- [lx-radio](https://github.com/formly-js/angular-formly-templates-lumx/tree/master/docs/radio.md)
- [lx-date-picker](https://github.com/formly-js/angular-formly-templates-lumx/tree/master/docs/datePicker.md)
- [lx-select](https://github.com/formly-js/angular-formly-templates-lumx/tree/master/docs/select.md)
- [lx-flex](https://github.com/formly-js/angular-formly-templates-lumx/tree/master/docs/flex.md)
- [lx-title](https://github.com/formly-js/angular-formly-templates-lumx/tree/master/docs/title.md)

## Wrappers

Wrap around the form field to add additional functionality. See the [Angular-formly docs on wrappers](https://github.com/formly-js/angular-formly#wrapper-stringarray-of-strings "Wrappers").

### Error Handling
Use ngMessages to dynamically add an array of error messages.
```javascript
$scope.formFields = {
  validation: {
    messages: [{
      name: 'required',
      message: 'This field is required.'
    }]
  }
};
```

Read more about [lx-wrapper-errors](https://github.com/formly-js/angular-formly-templates-lumx/tree/master/docs/errors.md)


### Flex-Box Grids
Use containers & flex-box to arrange your form fields into flexible rows & columns.
See docs on [lx-flex & lx-wrapper-flex-item](https://github.com/formly-js/angular-formly-templates-lumx/tree/master/docs/flex.md).

# Example: Email & Password
  
  Create form fields by attaching a JSON-like object in the controller.
  
```javascript
$scope.formFields= [{
      key: 'email', // {
      type: 'lx-input',
      wrapper: 'lx-wrapper-errors', // error handling with ngMessages
      templateOptions: {
        type: 'email', // input type: [email | password | text | url | number]
        label: 'Email',
        required: true
       },
       validation: {
        messages: {
          email: function (viewValue, modelValue, scope) {
            return 'That doesn\'t look like a valid email.'
          }
        }
       }
    },{
      key: 'password',
      type: 'lx-input',
      wrapper: 'lx-wrapper-errors',
      templateOptions: {
        type: 'password',
        label: 'Password',
        minlength: 4,
        maxlength: 16,
        required: true
      },
      ngModelAttrs: {
        minlength: {
          bound: 'ng-minlength',
          attribute: 'minlength'
        },
        maxlength: {
          bound: 'ng-maxlength',
          attribute: 'maxlength'
        }
      },
      modelOptions: { 
        allowInvalid: true,
        updateOn: 'default blur keydown',
        debounce: {
          keydown: 0,
          default: 0,
          blur: 0
        }
      }
    }
```

## ApiCheck Validation (new with 1.2)
Formly will now warn you in the console if you enter invalid data into your field options.
Read more about [apiCheck](https://github.com/kentcdodds/apiCheck.js).

## Validation Message Defaults (new with 1.2)
Validation messages can be set as defaults in the module file.

```javascript
 var VALIDATION_MESSAGES = [{
 		name: 'required',
 		message: 'This field is required'
}
```


##Roadmap
- e2e tests
- Requests (?). Post an issue.

    
## Known Issues

LumX has a conflict with a similarly complete framework, Bootstrap, resulting in errors for dropdowns including "lx-select" & "lx-multiple-select". Solution: choose one css framework or the other.
