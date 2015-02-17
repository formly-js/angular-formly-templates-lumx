### lx-wrapper-flex-container

```javascript
{
  'key': 'modelName',
  'type': 'lx-wrapper-flex-container',
  'templateOptions': {
    'container': 'row', // row | column | row-reverse | column-reverse
    'wrap': 'nowrap', // nowrap | wrap | wrap-reverse
    'align': 'space-between', // flex-start | flex-end | center | space-between | space-around | stretch
    'className': 'bgc-red-500', // ng-class
    'style': 'height: 200px'
     'fields': [{
        {
          'key': 'modelName',
          'type': 'lx-whatever-type'
          'wrapper': 'lx-wrapper-flex-item', // <- add the wrapper
          'templateOptions': {
            'flex': {
              'item': '1' // flex-value number, higher weights the space ratio more 
              'order': '1', // value for ordering boxes
              'className': 'bgc-red-500' // ng-class
            }
          }
        }
      }]
  },
}
```
Read more about [LumX flexbox](http://ui.lumapps.com/css/flexbox).
