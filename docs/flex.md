### lx-wrapper-flex

```javascript
{
  'key': 'modelName',
  'type': 'lx-flex',
  'templateOptions': {
    'container': 'row', // row | column | row-reverse | column-reverse
    'wrap': 'nowrap', // nowrap | wrap | wrap-reverse
    'align': 'space-between', // flex-start | flex-end | center | space-between | space-around | stretch
    'className': 'bgc-red-500', // ng-class
    'style': 'height: 200px'
     'fields': [{
          'key': 'modelName',
          'type': 'lx-whatever-type'
          'templateOptions': {
              'flex-item': '1' // flex-value number, higher weights the space ratio more
              'flex-order': '1', // value for ordering boxes
        }
      }]
  },
}
```
Read more about [LumX flexbox](http://ui.lumapps.com/css/flexbox).