### lx-wrapper-flex

```javascript
{
  'key': 'modelName',
  'type': 'lx-flex',
  'templateOptions': {
    'flex': {
      'container': 'row', // row | column | row-reverse | column-reverse
          'wrap': 'nowrap', // nowrap | wrap | wrap-reverse
          'align': 'space-between', // flex-start | flex-end | center | space-between | space-around | stretch
          'item': 5  // width (between 1 & 12)
    }
    'className': 'bgc-red-500', // ng-class
    'style': 'height: 200px'
     'fields': [{
          'key': 'modelName',
          'type': 'lx-whatever-type',
          'wrapper': 'lx-wrapper-flex',
          'templateOptions': {
              'flex' {
                item': '1' // 1-12, if different from default
                'flex-order': '1', // value for ordering boxes
              }
              'label': 'Some Label'
        }
      }]
  },
}
```
Read more about [LumX flexbox](http://ui.lumapps.com/css/flexbox).