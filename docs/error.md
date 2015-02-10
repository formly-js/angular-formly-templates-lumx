#lx-wrapper-errors-required

```javascript
{
  key: 'someKey',
  type: 'lx-whatever-type',
  wrapper: 'lx-wrapper-errors-required',
  templateOptions: {
      msg: {
        required: 'Field is required.' // default: "Aren't you forgetting something?"
      }
  }
}
```

#lx-wrapper-errors-text

```javascript
{
  key: 'someKey',
  type: 'lx-whatever-type',
  wrapper: 'lx-wrapper-errors-text',
  templateOptions: {
      msg: {
        required: 'Field is required.' // default: "Aren't you forgetting something?"
        email: 'This doesn't look right.', // default "Not a valid email."
        pattern: 'Not a match.' // default: "That doesn't look right."
      }
  }
}
```
#lx-wrapper-errors-number

```javascript
{
  key: 'someKey',
  type: 'lx-wrapper-errors-number',
  templateOptions: {
    msg: {
      required: 'A number is required.', // default: "Aren't you forgetting something?"
      number: 'Oops!' // default: "Not a valid number."
    }
  }
}
```


#lx-wrapper-errors-custom

```javascript
{
  key: 'someKey',
  type: 'lx-whatever-type',
  wrapper: 'lx-wrapper-errors-custom',
  templateOptions: {
      msg: {
        custom: {
          name: 'iceCream',
          text: 'Not a valid flavor'
        }
      }
  }
}
```

#modelOptions
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
