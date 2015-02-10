###lx-wrapper-description
Adds a description below the form-field.
```javascript
{
  key: 'someKey',
  type: 'someType',
  wrapper: 'lx-wrapper-description',
  templateOptions: {
    description: {
      text: 'Describing the form field.',
      className: 'fs-headline', // default is 'p+',
      style: {
        'font-weight': 'bold'
      },
      space: true // adds a <br/> below
    }
  }
}
```
