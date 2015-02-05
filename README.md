angular-formly-lumx-templates
=============================

LumX Templates for Angular-Formly

# Introduction

Use JSON in Angular to create simple & elegant forms based on Google's Material Design specs. 

# Demo & Examples

See the [Demo](https://formly-lumx.herokuapp.com/ "Angular-Formly-Lumx Demo") for examples.


# Setup

## Bower

<pre><code>bower install angular-formly-templates-lumx</code></pre>

## Dependencies

1. Angular 1.3.x or greater
2. [Angular-Formly](https://github.com/formly-js/angular-formly "Angular-Formly") 
3. [LumX Framework](http://ui.lumapps.com/ "LumX Framework") 
4. [ngMessages](https://docs.angularjs.org/api/ngMessages/directive/ngMessages "ngMessages Docs")

## Getting Started

1. Install dependencies (for example, with Bower: <pre><code>bower install angular angular-messages angular-formly lumx angular-formly-templates-lumx</code></pre>)
2. Add the following dependencies to your Angular module:

<pre><code>angular.module('myAppName', [
    /* Dependencies */
    'angular'
    'ngMessages',
    'formly',
    'lumx',
    'formly.lumx'
  ])</code></pre>


 ## HTML

   Not much necessary. The form only requires the <code>formly-form</code> directive tag. For example:

 ```html
   <!-- formly-form directive generates templates -->
     <formly-form model="vm.formData" fields="vm.formFields" options="vm.formOptions"
                  ng-submit="vm.submit(form.$valid)" name="form">
       <!-- end of formly-form contents -->
       <br>
       <button class="btn btn--m btn--blue btn--raised" lx-ripple type="submit">Submit</button>
     </formly-form>
 ```

# Elements

## Wrappers
Handled by ngMessages

### Styles
- lx-wrapper-description
- lx-wrapper-card
- more coming soon...

### Error Handling
- lx-wrapper-error-required
- lx-wrapper-errors-text (general validation error messages)
- more coming soon...

### Flex-Box Grids
- lx-wrapper-grid (Coming soon!)

## Form-Fields

- lx-text-field (email, password, number, url)
- lx-textarea
- lx-switch
- lx-checkbox
- lx-date-picker
- lx-radio-buttons
- lx-select, lx-select-multiple
- lx-file-input
- lx-subhead

  
### Email & Password
  
  Create form fields by attaching a JSON object in the controller.
  
  <pre><code>$scope.formFields= [{
      key: 'email', // {
      type: 'lx-text-field', // formlyTemplate
      wrapper: 'lx-wrapper-errors-text', // error handling with ngMessages
      templateOptions: {
        type: 'email', // input type: [email, password, text, url, number]
        label: 'Email',
        required: true
       }
    },{
      key: 'password',
      type: 'lx-text-field',
      wrapper: 'lx-wrapper-errors-text',
      templateOptions: {
        type: 'password',
        label: 'Password',
        required: true,
        minlength: 4,
        maxlength: 16,
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
    }</code></pre>

### Subheads

Create Subheaders for your forms. Not in LumX, but a useful additional.

<pre><code>$scope.formFields = [{
      key: 'subEmail',
      type: 'lx-subhead',
      templateOptions: {
        subhead: 'Text Fields:',
        class: 'fs-headline',
        style: {
          'text-decoration': 'underline'
        }
      }
    }]</code></pre>
    
# Known Issues

LumX has a conflict with a simlarly complete framework, Bootstrap, resulting in errors for dropdowns including "lx-select" & "lx-multiple-select".
