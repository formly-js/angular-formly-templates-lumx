###lx-wrapper-errors

```javascript
{
  key: 'someKey',
  type: 'lx-whatever-type',
  wrapper: 'lx-wrapper-errors',
  templateOptions: {
    required: true,
    errors: [{
      name: required,
      message: 'This field is required.'
    }]
  }
}
```

###modelOptions
Get more flexibility out of your form validation with ng-model-options. 
Read more about it at the [Angular Docs](https://docs.angularjs.org/api/ng/directive/ngModelOptions "ngModelOptions")

1. allowInvalid
2. updateOn
3. debounce: 
  3.1 default: any amount of time
  3.2 keydown: update on key press
  3.3 blur: update when a user leaves the field
4. getterSetter
5. timezone
  
```javascript
{
  key: 'whatever-key',
  type: 'lx-whatever-type',
  wrapper: 'lx-whatever-wrapper',
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
