### lx-date-picker
```javascript
{
  'key': 'modelName',
  'type': 'lx-date-picker'
  'templateOptions': {
    'label': 'A checkbox label',
    'required': false, // ng-required
    'disabled': false // ng-disabled
  }
}
```
Read more about [lx-date-picker](http://ui.lumapps.com/directives/date-picker).

### lx-select & lx-select-multiple
```javascript
{
  'key': 'modelName',
  'type': 'lx-select' // 'lx-select-multiple'
  'templateOptions': {
    'label': 'The label', // default: 'Select'
    'placeholder': 'The placeholder',
    'required': false, // ng-required
    'disabled': false, // ng-disabled
    'selected': 'A', // displays current selected property as placeholder
    'selected2': 'B', // optional second placeholder display
    'choice': 'A', // dropdown choice display
    'choice2': 'C', // optional second choice display
    'choices': [{
      'A': 1,
      'B': 2,
      'C': 3
    }, {
      'A': '4',
      'B': '5',
      'C': '6',
      'D': '7'
    }],
    'minLength': 2,
    'allowClear': false
  }
}
```
Read more about [lx-select](http://ui.lumapps.com/directives/selects).
