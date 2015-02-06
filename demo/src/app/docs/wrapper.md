### lx-wrapper-above API

```{
  'key': 'modelName',
  'type': 'lx-whatever-type'
  'wrapper': 'lx-wrapper-above', // <- add the wrapper
  'templateOptions': {
    'aboveText': 'Some Title',
    'aboveClass': '', // default class is 'fs-headline'
    'aboveStyle': { 'text-decoration': 'bold'},
    'aboveSpace': true // adds a space above
  }
}
```

### lx-wrapper-below API
```{
  'key': 'modelName',
  'type': 'lx-whatever-type'
  'wrapper': 'lx-wrapper-below', // <- add the wrapper
  'templateOptions': {
    'belowText': 'Some Description',
    'belowClass': '', // default class is 'p+'
    'belowStyle': { 'text-decoration': 'bold'},
    'belowSpace': true // adds a space below
  }
}
```

### wrapper
Use multiple wrappers by wrapping them in an ordered array.
```{
  'wrapper': ['lx-wrapper-errors-text', 'lx-wrapper-below', 'lx-wrapper-above']
}
```
