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
  }
}
```
