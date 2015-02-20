Creating a grid in Angular-Formly is currently kind of a hack.

* Start with a field with a type of `lx-flex`. 
* Inside of the `templateOptions`, you can add `fields: [ ... ]`
* Give each field a `wrapper` of `lx-wrapper-flex-item`

For greater styling control, use `flex.className` to change classes inside of your inner fields.


