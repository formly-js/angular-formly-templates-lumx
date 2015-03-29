Using flex-box grids for form elements is easy:

* Start with a field with a type of `lx-flex`. 
* Inside of the `templateOptions`, you can add `fields: [ ... ]`

For greater styling control, use `flex.className` to change classes inside of your inner fields.

Flex-box options include:

* `flex.container` - row | column
* `flex.align` - space-between | space-around | center
* `flex.gutter` - the width in pixels between fields. Default: '24'.
 
Elements can have their own flex characters

* `flex.item` - the size of the element in proportion to others, default is 1.
* `flex.order` - the order in which elements are organized, starting at 1.

