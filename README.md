angular-formly-lumx-templates
=============================

LumX Templates for Angular-Formly. Modern & flexible forms made easy.

# Now 1.0.0

See the [changelog](https://github.com/formly-js/angular-formly-templates-lumx/blob/master/CHANGELOG.md "Templates-LumX Changes") for details.
See the [docs](https://github.com/formly-js/angular-formly-templates-lumx/tree/master/docs "Documentation") for template APIs.

# Demo & Examples

See the [Demo](https://formly-lumx.herokuapp.com/ "Angular-Formly-Lumx Demo") for examples.

# Setup

## Bower

`bower install angular angular-formly lumx angular-messages angular-formly-templates-lumx`

## Dependencies

1. Angular 1.3.x or greater
2. [Angular-Formly](https://github.com/formly-js/angular-formly "Angular-Formly") (@3.0.0+)
3. [LumX Framework](http://ui.lumapps.com/ "LumX Framework") (@0.3.*)
4. [ngMessages](https://docs.angularjs.org/api/ngMessages/directive/ngMessages "ngMessages Docs")

## Getting Started

1. Install dependencies (for example, with Bower: <pre><code>bower install angular angular-messages angular-formly lumx angular-formly-templates-lumx</code></pre>)
2. Add the following dependencies to your Angular module:

```javascript
angular.module('myAppName', [
    'angular'
    'ngMessages',
    'formly',
    'lumx',
    'formly.lumx'
  ])
```

## HTML

   Not much necessary. The form only requires the <code>formly-form</code> directive tag. For example:

```html
   <!-- formly-form directive generates templates -->
     <formly-form model="formData" fields="formFields" options="formOptions"
                  ng-submit="submit(form.$valid)" name="form">
       <!-- end of formly-form contents -->
       <br>
       <button class="btn btn--m btn--blue btn--raised" lx-ripple type="submit">Submit</button>
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
    'key': 'email',    // ng-model name, saved in formData
    'type': 'lx-text', // field
    'templateOptions: {  // in this case: 'lx-text' options
      'type': 'email'
      'label': 'Email'
    }
  }];
}
```

# Elements

Basic form elements.

## Fields
- [lx-text](https://github.com/formly-js/angular-formly-templates-lumx/tree/master/docs/text.md) (email, password, number, url)
- [lx-textarea](https://github.com/formly-js/angular-formly-templates-lumx/tree/master/docs/text.md)
- [lx-switch](https://github.com/formly-js/angular-formly-templates-lumx/tree/master/docs/option.md)
- [lx-checkbox](https://github.com/formly-js/angular-formly-templates-lumx/tree/master/docs/option.md)
- [lx-radio](https://github.com/formly-js/angular-formly-templates-lumx/tree/master/docs/option.md)
- [lx-date-picker](https://github.com/formly-js/angular-formly-templates-lumx/tree/master/docs/select.md)
- [lx-select](https://github.com/formly-js/angular-formly-templates-lumx/tree/master/docs/select.md), lx-select-multiple
- [lx-flex](https://github.com/formly-js/angular-formly-templates-lumx/tree/master/docs/flex.md) (coming soon)

## Wrappers (coming soon)

Wrap around the form field to add additional functionality.

### Styles
- [lx-wrapper-above](https://github.com/formly-js/angular-formly-templates-lumx/tree/master/docs/wrapper.md) (styled text above form field)
- [lx-wrapper-below](https://github.com/formly-js/angular-formly-templates-lumx/tree/master/docs/wrapper.md) (or below)
- more coming soon...

### Error Handling
- lx-wrapper-error-required
- lx-wrapper-errors-text (general validation error messages)
- more coming soon...

### Flex-Box Grids
- [lx-wrapper-flex-item](https://github.com/formly-js/angular-formly-templates-lumx/tree/master/docs/flex.md) (coming soon)

#### Example: Email & Password
  
  Create form fields by attaching a JSON object in the controller.
  
```javascript
$scope.formFields= [{
      key: 'email', // {
      type: 'lx-text',
      wrapper: 'lx-wrapper-errors-text', // error handling with ngMessages
      templateOptions: {
        type: 'email', // input type: [email | password | text | url | number]
        label: 'Email',
        required: true
       }
    },{
      key: 'password',
      type: 'lx-text',
      wrapper: 'lx-wrapper-errors-text',
      templateOptions: {
        type: 'password',
        label: 'Password',
        required: true,
      },
      ngModelAttrs: {
        bound: {
          'ng-minlength': 4,
          'ng-maxlength': 16
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
    
# Known Issues

LumX has a conflict with a simlarly complete framework, Bootstrap, resulting in errors for dropdowns including "lx-select" & "lx-multiple-select". Solution: choose one framework or the other.
