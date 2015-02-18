###lx-wrapper-errors

```javascript
{
  key: 'someKey',
  type: 'lx-input',
  wrapper: 'lx-wrapper-errors',
  templateOptions: {
    pending: 'Checking...',  // pending message for async validators
    required: true
  },
  validation: {
    messages: [{
      name: 'required',
      message: 'This field is required.'
    }]
  },
  ngModelAttrs: {
    bound: {
      'ng-minlength': 4
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
