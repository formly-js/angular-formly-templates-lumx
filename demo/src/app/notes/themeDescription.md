#####Backgrounds
Theme backgrounds can be set with a `class` in two places:

* On the root formly-form element as a `class`:
```markup
  &lt;formly-form class="bgc-red-100"&gt;&lt;/formly-form&gt;
```
* By styling with a `wrapper: lx-div-wrapper`:
```javascript
  wrapper: 'lx-div-wrapper',
  templateOptions: {
    div: {
      className: 'bgc-red-100'
    }
  }
```

#####Themes

* Themes default to `templateOptions.theme: light`.
* For readability, dark colored backgrounds should set the `templateOptions.theme: dark`.

