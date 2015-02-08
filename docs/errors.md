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