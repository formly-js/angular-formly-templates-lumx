angular-formly-lumx-templates
=============================

LumX Templates for Angular-Formly

# Introduction

Use JSON to create elegant form templates based on Material Design. 

# Demo

[Demo](https://formly-lumx.herokuapp.com/ "Angular-Formly-Lumx Demo") 

See the demo for examples.

## Dependencies

1. [Angular-Formly](https://github.com/formly-js/angular-formly "Angular-Formly") 
2. [LumX Framework](http://ui.lumapps.com/ "LumX Framework") 
3. [ngMessages](https://docs.angularjs.org/api/ngMessages/directive/ngMessages "ngMessages Docs") 

<pre><code>bower install formly lumx ngMessages</code></pre>

## Getting Started

1. Install dependencies (for example, with Bower)
2. Add 'Angular-formly-lumx.config.js' to your project.
2. Simply link to the file with a script tag.
3. Add the dependencies to your Angular module

<pre><code>angular.module('myAppName', [
    /* Dependencies */
    'ngMessages',
    'formly',
    'lumx',
    'formly.lumx' // templates loaded here
  ])</code></pre>
