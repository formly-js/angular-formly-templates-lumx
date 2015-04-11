### Method 1: Style the `&lt;formly-form&gt;` element

```html
&lt;formly-form model="vm.formData" fields="vm.formFields" class="bgc-blue-grey-500"&gt;&lt;/formly-form&gt;
```
Read more about [LumX color styles](http://ui.lumapps.com/css/colors).

### Method 2: Style the formly-field div with `lx-wrapper-div`
  
```javascript
{ key: 'key', 
    type: 'lx-text',
    wrapper: 'lx-wrapper-div' // <- div wrapper
    templateOptions: {
      div: {
        className: 'bgc-blue-grey-500' // <- div background color
      },
      type: 'text',
      label: 'Name',
      theme: 'dark' // <- add if background color is dark for lighter text
   }
}
```
Read more about [stlying LumX text fields](http://ui.lumapps.com/directives/text-fields).
