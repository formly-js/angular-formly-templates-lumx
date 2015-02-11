###lx-wrapper-errors

```javascript
{
  key: 'someKey',
  type: 'lx-input',
  wrapper: 'lx-wrapper-errors',
  templateOptions: {
    required: true,
    errors: [{
      name: required,
      message: 'This field is required.'
    }]
  },
  ngModelAttrs: {
    bound: {
      'minlength': 4
    }
  },
  modelOptions: {
       allowInvalid: true,
       updateOn: 'default blur keydown',
       debounce: {
          keydown: 800,
          default: 800,
          blur: 0
         }
      }
    }
}
```
