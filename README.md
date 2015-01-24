angular-formly-lumx-templates
=============================

LumX Templates for Angular-Formly

# Introduction

Use JSON in Angular to create simple & elegant forms based on Google's Material Design specs. 

# Demo

See the [Demo](https://formly-lumx.herokuapp.com/ "Angular-Formly-Lumx Demo") for examples.

## Dependencies

1. Angular 1.3.x or greater
2. [Angular-Formly](https://github.com/formly-js/angular-formly "Angular-Formly") 
3. [LumX Framework](http://ui.lumapps.com/ "LumX Framework") 
4. [ngMessages](https://docs.angularjs.org/api/ngMessages/directive/ngMessages "ngMessages Docs") 

<pre><code>bower install formly lumx ngMessages</code></pre>

## Getting Started

1. Install dependencies (for example, with Bower)
2. Add 'Angular-formly-lumx.config.js' to your project.
2. Simply link to the file with a script tag.
3. Add the dependencies to your Angular module

<pre><code>angular.module('myAppName', [
    /* Dependencies */
    'ngMessages',
    'formly',
    'lumx',
    'formly.lumx' // template module (angular-formly.config.js)
  ])</code></pre>
  
## Available Form-Fields

- lx-text-field (email, password, number, url)
- lx-textarea
- lx-switch
- lx-checkbox
- lx-date-picker
- lx-radio-buttons
- lx-select, lx-select-multiple
- lx-file-input
- lx-subhead
  
## Examples
  
  Examples are copied from the [Demo](https://formly-lumx.herokuapp.com/ "Angular-Formly-Lumx Demo").
  
#### HTML
  
  Not much necessary. The form only requires the <code>formly-form</code> directive tag. For example:
  
```html
  <!-- formly-form directive generates templates -->
    <formly-form result="vm.formData" fields="vm.formFields" options="vm.formOptions"
                 ng-submit="vm.submit(form.$valid)" name="form">
      <!-- end of formly-form contents -->
      <br>
      <button class="btn btn--m btn--blue btn--raised" lx-ripple type="submit">Submit</button>
    </formly-form>
```
  
#### Email & Password
  
  Create form fields by attaching a JSON object in the controller.
  
  <pre><code>$scope.formFields= [{
      key: 'email', // {
      type: 'lx-text-field', // formlyTemplate
      mode: 'email', // input type: [email, password, text, url, number]
      label: 'Email',
      required: true
    },{
      key: 'password',
      type: 'lx-text-field',
      mode: 'password',
      label: 'Password',
      required: true,
      minlength: 4,
      maxlength: 16,
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

#### Subheads

Create Subheaders for your forms. Not in LumX, but a useful additional.

<pre><code>$scope.formFields = [{
      key: 'subEmail',
      type: 'lx-subhead',
      subhead: 'Text Fields:',
      class: 'fs-headline',
      style: {
        'text-decoration': 'underline'
      },
    }]</code></pre>
    
## Known Issues

LumX has a conflict with a simlarly complete framework, Bootstrap, resulting in errors for dropdowns including "lx-select" & "lx-multiple-select".
