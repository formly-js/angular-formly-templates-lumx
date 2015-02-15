angular-formly-lumx-templates
=============================

LumX Templates for Angular-Formly. Modern & flexible forms configured easily in a JSON object.

# Now 1.0.10
- View [Demo](https://formly-lumx.herokuapp.com/ "Angular-Formly-Lumx Demo").
- See the [changelog](https://github.com/formly-js/angular-formly-templates-lumx/blob/master/CHANGELOG.md "Templates-LumX Changes") for details.
- See the [docs](https://github.com/formly-js/angular-formly-templates-lumx/tree/master/docs "Documentation") for template APIs.


# Setup

## Bower

`bower install angular angular-formly lumx angular-messages angular-formly-templates-lumx`

## Dependencies

1. Angular (@1.3+)
2. [Angular-Formly](https://github.com/formly-js/angular-formly "Angular-Formly") (@3.0+)
3. [LumX Framework](http://ui.lumapps.com/ "LumX Framework") (@0.3+)
4. [ngMessages](https://docs.angularjs.org/api/ngMessages/directive/ngMessages "ngMessages Docs") (@1.3+)

## Getting Started

1. Install dependencies (for example, with Bower (see Bower above)
2. Add the following dependencies to your Angular module:

```javascript
angular.module('myAppName', [
    'ngMessages',
    'formly',
    'lumx',
    'formlyLumx'
  ])
```

## Demo
Run the demo locally or on the [site](https://formly-lumx.herokuapp.com/ "Angular-Formly-Lumx Demo").
- Install (eg. with Bower). `bower install`
- Go into the demo directory `cd demo`
- Download packages `bower install && npm install`
- Run [Gulp](http://gulpjs.com/): `gulp serve` 

## View

Not much necessary. The form only requires the `formly-form` directive tag. For example:

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

- [lx-input](https://github.com/formly-js/angular-formly-templates-lumx/tree/master/docs/input.md) (text, email, password, number, url)
- [lx-textarea](https://github.com/formly-js/angular-formly-templates-lumx/tree/master/docs/textarea.md)
- [lx-switch](https://github.com/formly-js/angular-formly-templates-lumx/tree/master/docs/switch.md)
- [lx-checkbox](https://github.com/formly-js/angular-formly-templates-lumx/tree/master/docs/checkbox.md)
- [lx-radio](https://github.com/formly-js/angular-formly-templates-lumx/tree/master/docs/radio.md)
- [lx-date-picker](https://github.com/formly-js/angular-formly-templates-lumx/tree/master/docs/datePicker.md)
- [lx-select](https://github.com/formly-js/angular-formly-templates-lumx/tree/master/docs/select.md)
- [lx-flex](https://github.com/formly-js/angular-formly-templates-lumx/tree/master/docs/flex.md) (coming soon)

## Wrappers

Wrap around the form field to add additional functionality. See the [Angular-formly docs on wrappers](https://github.com/formly-js/angular-formly#wrapper-stringarray-of-strings "Wrappers").

### Error Handling (Changes soon to use angular-formly built in messages)
Use ngMessages to dynamically add an array of error messages. Read more about [lx-wrapper-errors](https://github.com/formly-js/angular-formly-templates-lumx/tree/master/docs/errors.md)

### Flex-Box Grids (coming soon)
Use containers & flexbox to arrange your form fields into flexible rows & columns. Read more about [lx-flex & lx-wrapper-flex-item](https://github.com/formly-js/angular-formly-templates-lumx/tree/master/docs/flex.md). 

# Example: Email & Password
  
  Create form fields by attaching a JSON object in the controller.
  
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
        messages: [{
          name: 'email',
          message: 'That doesn\'t look like a valid email.',
          }, {
          name: 'required',
          message: 'Your email is required.'
        }]
       }
    },{
      key: 'password',
      type: 'lx-input',
      wrapper: 'lx-wrapper-errors',
      templateOptions: {
        type: 'password',
        label: 'Password',
        required: true
      },
      validation: {
        messages: [{
          name: 'required',
          message: 'Your password is required'
          }, {
          name: 'minlength',
          message: 'Password must be between 4 & 16 characters.'
          }, {
          name: 'maxlength',
          message: 'Password must be between 4 & 16 characters.'
         }]
      },
      ngModelAttrs: {
        bound: {
          'minlength': 4,
          'maxlength': 16
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

##Roadmap
- Flexbox grids
- Requests (?)

    
## Known Issues

LumX has a conflict with a simlarly complete framework, Bootstrap, resulting in errors for dropdowns including "lx-select" & "lx-multiple-select". Solution: choose one framework or the other.
