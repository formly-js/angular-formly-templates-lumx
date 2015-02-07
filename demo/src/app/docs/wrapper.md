### lx-wrapper-above API

```{
  'key': 'modelName',
  'type': 'lx-whatever-type'
  'wrapper': 'lx-wrapper-above', // <- add the wrapper
  'templateOptions': {
    'above':{
      'space': true, // adds a <br/> above
      'text': 'Some Title',
      'class': '', // default class is 'fs-headline'
      'style': {
        'text-decoration': 'bold',
        'color': 'white'
      }
  }
}
```

### lx-wrapper-below API
```{
  'key': 'modelName',
  'type': 'lx-whatever-type'
  'wrapper': 'lx-wrapper-below', // <- add the wrapper
  'templateOptions': {
    'below': {
      'space': true, // adds a <br/> below
      'text': 'Some description',
      'class': '', // default class is 'p+'
      'style': {
        'text-decoration': 'bold'
      }
    }
  }
}
```

### wrapper
Use multiple wrappers by wrapping them in an ordered array.
```{
  'wrapper': ['lx-wrapper-errors-text', 'lx-wrapper-below', 'lx-wrapper-above']
}
```
