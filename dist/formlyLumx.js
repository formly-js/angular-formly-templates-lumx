/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	(function () {
	  'use strict';
	  var USING_TEMPLATES = true;
	  var USING_TEMPLATE_VALIDATION = true;
	  /* Custom validation message defaults here */
	  var VALIDATION_MESSAGES = [{
	    name: 'required', message: 'This field is required'
	  }, {
	    name: 'maxlength', message: 'This field is too long.'
	  }, {
	    name: 'minlength', message: 'This field is too short.'
	  }];
	  /* Module Templates + Data */
	  var MODULE_NAME = 'formlyLumx';
	  var PREFIX = 'lx';
	  var FIELDS = [{
	    name: 'checkbox',
	    template: __webpack_require__(1)
	  }, {
	    name: 'date-picker',
	    template: __webpack_require__(2)
	  }, {
	    name: 'dropdown',
	    template: __webpack_require__(3)
	  }, {
	    name: 'flex',
	    template: __webpack_require__(4)
	  }, {
	    name: 'input',
	    template: __webpack_require__(5)
	  }, {
	    name: 'radio',
	    template: __webpack_require__(6)
	  }, {
	    name: 'select',
	    template: __webpack_require__(7)
	    //}, {
	    //	name: 'select-async',
	    //	template: require('./fields/lx-select-async.html')
	  }, {
	    name: 'switch',
	    template: __webpack_require__(8)
	  }, {
	    name: 'textarea',
	    template: __webpack_require__(9)
	  }];
	  var WRAPPERS = [{
	    name: 'wrapper-div',
	    template: __webpack_require__(10)
	  }, {
	    name: 'wrapper-errors',
	    template: __webpack_require__(11)
	  }, {
	    name: 'wrapper-flex',
	    template: __webpack_require__(12)
	  }, {
	    name: 'wrapper-inline',
	    template: __webpack_require__(13)
	  }];
	
	  function _prefixer(name) {
	    return PREFIX + '-' + name;
	  }
	
	  function _wrapperTemplateUrl(name) {
	    return 'wrappers/formly-wrappers-' + _prefixer(name) + '.html';
	  }
	
	  function _fieldTemplateUrl(name) {
	    return 'fields/formly-fields-' + _prefixer(name) + '.html';
	  }
	
	  /*@ngInject*/
	  function setWrappers(formlyConfigProvider) {
	    if (USING_TEMPLATES) {
	      WRAPPERS.map(function (wrapper) {
	        formlyConfigProvider.setWrapper({
	          name: _prefixer(wrapper.name),
	          templateUrl: _wrapperTemplateUrl(wrapper.name)
	        });
	        return _prefixer(wrapper.name);
	      });
	    }
	  }
	  setWrappers.$inject = ["formlyConfigProvider"];
	
	  function addFieldValidationOptions(apiCheck) {
	    /* validation using apiCheck.js */
	    var APICHECK_VALIDATION_FIELDS = [{
	      name: 'checkbox',
	      validateOptions: {
	        label: apiCheck.string,
	        description: apiCheck.string,
	        checked: apiCheck.boolean,
	        required: apiCheck.boolean
	      }
	    }, {
	      name: 'date-picker',
	      validateOptions: { 'label': apiCheck.string, 'required': apiCheck.boolean }
	    }, {
	      name: 'input',
	      validateOptions: {
	        label: apiCheck.string,
	        icon: apiCheck.string,
	        fixedLabel: apiCheck.boolean,
	        disabled: apiCheck.boolean,
	        className: apiCheck.string,
	        theme: apiCheck.oneOf(['light', 'dark']),
	        type: apiCheck.oneOf(['text', 'number', 'email', 'password', 'url', 'tel']),
	        required: apiCheck.boolean
	      }
	    }, {
	      name: 'radio',
	      validateOptions: {
	        label: apiCheck.string,
	        description: apiCheck.string,
	        options: apiCheck.arrayOf({
	          name: apiCheck.string,
	          value: apiCheck.oneOfType([apiCheck.string, apiCheck.number]),
	          disabled: apiCheck.boolean
	        }),
	        inline: apiCheck.boolean,
	        required: apiCheck.boolean
	      }
	    }, {
	      name: 'select',
	      validateOptions: {
	        label: apiCheck.string,
	        placeholder: apiCheck.string,
	        'min-length': apiCheck.number,
	        'allow-clear': apiCheck.boolean,
	        'ng-attr-multiple': apiCheck.boolean,
	        selected: apiCheck.string,
	        selected2: apiCheck.string,
	        choice: apiCheck.string,
	        choice2: apiCheck.string,
	        choices: apiCheck.array,
	        required: apiCheck.boolean
	      }
	    }, {
	      name: 'switch',
	      validateOptions: {
	        label: apiCheck.string,
	        description: apiCheck.string,
	        checked: apiCheck.boolean,
	        required: apiCheck.boolean
	      }
	    }, {
	      name: 'textarea',
	      validateOptions: {
	        label: apiCheck.string,
	        icon: apiCheck.string,
	        theme: apiCheck.oneOf(['light', 'dark']),
	        required: apiCheck.boolean,
	        rows: apiCheck.number,
	        cols: apiCheck.number
	      }
	    }];
	    APICHECK_VALIDATION_FIELDS.map(function (validationField) {
	      FIELDS.map(function (field) {
	        if (field.name === validationField.name) {
	          field.validateOptions = validationField.validateOptions;
	        }
	      });
	    });
	  }
	
	  /*@ngInject*/
	  function setFields(formlyConfig, formlyApiCheck) {
	    if (USING_TEMPLATES) {
	      if (USING_TEMPLATE_VALIDATION) {
	        /* validate options using apiCheck to reduce developer errors */
	        addFieldValidationOptions(formlyApiCheck);
	        FIELDS.map(function (field) {
	          formlyConfig.setType({
	            name: _prefixer(field.name),
	            templateUrl: _fieldTemplateUrl(field.name),
	            validateOptions: function validateOptions(options) {
	              options.data.apiCheck = formlyApiCheck.warn(formlyApiCheck.shape({ templateOptions: formlyApiCheck.shape(field.templateOptions || {}).optional }), arguments);
	            }
	          });
	        });
	      } else {
	        /* skip validating options */
	        //apiCheck.disable();
	        FIELDS.map(function (field) {
	          formlyConfig.setType({ name: _prefixer(field.name), templateUrl: _fieldTemplateUrl(field.name) });
	        });
	      }
	    }
	  }
	  setFields.$inject = ["formlyConfig", "formlyApiCheck"];
	
	  function setDefaults(formlyConfig, formlyValidationMessages) {
	    formlyConfig.extras.ngModelAttrsManipulatorPreferBound = true;
	    VALIDATION_MESSAGES.map(function (validation) {
	      formlyValidationMessages.addStringMessage(validation.name, validation.message);
	    });
	    formlyValidationMessages.messages.pattern = function (viewValue, modelValue) {
	      return (viewValue || modelValue) + ' is invalid';
	    };
	  }
	  setDefaults.$inject = ["formlyConfig", "formlyValidationMessages"];
	
	  function cacheTemplates($templateCache) {
	    if (USING_TEMPLATES) {
	      FIELDS.map(function (field) {
	        $templateCache.put(_fieldTemplateUrl(field.name), field.template);
	      });
	      WRAPPERS.map(function (wrapper) {
	        $templateCache.put(_wrapperTemplateUrl(wrapper.name), wrapper.template);
	      });
	    }
	  }
	  cacheTemplates.$inject = ["$templateCache"];

	  angular.module(MODULE_NAME, ['formly']).config(setWrappers).run(setFields).run(setDefaults).run(cacheTemplates);
	})();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"checkbox\">\n\t<input ng-model=\"model[options.key]\"\n\t       type=\"checkbox\"\n\t       role=\"checkbox\"\n\t       class=\"checkbox__input\">\n\t<label for={{::id}} class=\"checkbox__label\" aria-label=\"{{::to.label}}\">{{to.label}}</label>\n\t<span ng-if=\"::to.description\"\n\t      class=\"checkbox__help\">{{::to.description}}</span>\n</div>"

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<lx-date-picker model=\"model[options.key]\"\n                aria-label=\"{{::to.label}}\"\n                label=\"{{::to.label}} {{::to.required ? '*' : ''}}\">\n</lx-date-picker>\n"

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<lx-dropdown>\n\t<button class=\"btn\" ng-class=\"::to.className || 'btn--m btn--black btn--flat'\" lx-ripple lx-dropdown-toggle aria-label=\"{{::to.label}}\">\n\t\t<i ng-if=\"::to.icon\" class=\"mdi mdi-dots-vertical\"></i>\n\t\t{{to.label}}\n\t</button>\n\t<lx-dropdown-menu>\n\t\t<ul>\n\t\t\t<li ng-repeat=\"o in ::to.options\">\n\t\t\t\t<a class=\"dropdown-link\" ng-click=\"o.action()\">{{::o.text}}</a>\n\t\t\t</li>\n\t\t</ul>\n\t</lx-dropdown-menu>\n</lx-dropdown>"

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"aftl-flex-fields\"\n     model=\"$parent.model\"\n     flex-container=\"{{::to.flex.container || 'row'}}\"\n     flex-align=\"{{::to.flex.align || 'space-between'}}\"\n     flex-gutter=\"{{::to.flex.gutter || '24'}}\">\n\t<div formly-field\n\t     ng-repeat=\"field in to.fields track by $index\"\n\t     ng-if=\"!field.hide\"\n\t     class=\"formly-field {{::field.type ? 'formly-field-' + field.type : ''}}\"\n\t     ng-style=\"::to.flex.style\"\n\t     options=\"field\"\n\t     model=\"field.model || model\"\n\t     fields=\"fields\"\n\t     form=\"form\"\n\t     form-id=\"formId\"\n\t     form-state=\"options.formState\"\n\t     index=\"$index\"\n\t     flex-item=\"{{::to.flex.item || '1'}}\"\n\t     flex-order=\"{{::to.flex.order}}\">\n\t</div>\n</div>"

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<lx-text-field data-model=\"::model[options.key]\"\n               icon=\"{{::to.icon}}\"\n               fixed-label=\"::to.fixedLabel\"\n               theme=\"{{::to.theme}}\"\n               disabled=\"to.disabled\"\n               label=\"{{to.label}} {{::to.required ? '*' : ''}}\"\n               valid=\"fc.$valid && fc.$touched\"\n               error=\"fc.$invalid && fc.$touched\">\n\t<input ng-model=\"model[options.key]\"\n\t       type=\"{{::to.type}}\"\n\t       aria-label=\"{{::to.label}}\"\n\t       ng-class=\"::to.className\"/>\n</lx-text-field>"

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"radio-group\">\n\t<h3 ng-if=\"::to.label\"><label>{{::to.label}}</label></h3>\n\n\t<div class=\"radio-button\"\n\t     ng-class=\"{'radio-button__inline': to.inline}\"\n\t     ng-repeat=\"o in to.options\">\n\t\t<input ng-model=\"$parent.model[$parent.options.key]\"\n\t\t       id=\"{{::id + '_' + $index}}\"\n\t\t       type=\"radio\"\n\t\t       ng-disabled=\"::o.disabled\"\n\t\t       class=\"radio-button__input\"\n\t\t       ng-value=\"::o.value\"\n\t\t       aria-labelledby=\"{{::id + '_' + $index + '_radioButton'}}\">\n\t\t<label for=\"{{::id + '_' + $index}}\"\n\t\t       class=\"radio-button__label\">{{::o.name}}</label>\n      <span ng-if=\"::o.description\" class=\"radio-button__help\">{{::o.description}}\n      </span>\n\t</div>\n</div>\n"

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"aftl-select\">\n\t<h3 ng-if=\"::to.label\"><label>\n\t\t{{to.label}} {{::to.required ? '*' : ''}}\n\t</label></h3>\n\t<lx-select ng-model=\"model[options.key]\"\n\t           choices=\"to.options\"\n\t           placeholder=\"{{::to.placeholder}}\"\n\t           min-length=\"::to.minLength\"\n\t           allow-clear=\"::to.allowClear\"\n\t           ng-attr-multiple=\"{{::to.multiple}}\">\n\n\t\t<lx-select-selected>\n\t\t\t{{$selected[to.selected] || $selected}} {{::to.selected2 ? ' - ' +\n\t\t\t$selected[to.selected2] : ''}}\n\t\t</lx-select-selected>\n\n\t\t<lx-select-choices>\n\t\t\t{{$choice[to.choice] || $choice}} {{::to.choice2 ? ' - ' +\n\t\t\t$choice[to.choice2] : ''}}\n\t\t</lx-select-choices>\n\n\t</lx-select>\n</div>\n"

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"switch\">\n\t<input ng-model=\"model[options.key]\"\n\t       type=\"checkbox\"\n\t       role=\"checkbox\"\n\t       class=\"switch__input\"/>\n\t<label for=\"{{::id}}\" class=\"switch__label\" aria-label=\"{{::to.label}}\">{{to.label}}</label>\n\t<span ng-if=\"::to.description\"\n\t      class=\"switch__help\">{{::to.description}}</span>\n</div>\n\n"

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<lx-text-field data-model=\"::model[options.key]\"\n               fixed-label=\"::to.fixedLabel\"\n               icon=\"{{::to.icon}}\"\n               theme=\"{{::to.theme}}\"\n               label=\"{{to.label}} {{::to.required ? '*' : ''}}\"\n               valid=\"fc.$valid && fc.$touched\"\n               error=\"fc.$invalid && fc.$touched\">\n    <textarea ng-model=\"model[options.key]\"\n              aria-label=\"{{::to.label}}\"\n              rows=\"{{::to.rows}}\" cols=\"{{::to.cols}}\">\n    </textarea>\n</lx-text-field>\n"

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div ng-class=\"::to.div.className\"\n\tng-style=\"::to.div.style\">\n\t<formly-transclude></formly-transclude>\n</div>"

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div>\n\t<formly-transclude></formly-transclude>\n\t<ul class=\"form-error\" ng-messages=\"fc.$error\"\n\t    ng-show=\"options.validation.errorExistsAndShouldBeVisible\">\n\t\t<li ng-repeat=\"(name, message) in ::options.validation.messages\"\n\t\t    ng-message={{::name}}>\n\t\t\t{{message(fc.$viewValue, fc.$modelValue, this)}}\n\t\t</li>\n\t</ul>\n\t<span class=\"form-pending\"\n\t      ng-if=\"to.pending && fc.$pending && fc.$touched\">\n\t{{::to.pending || 'Checking...'}}\n\t</span>\n</div>\n"

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div ng-class=\"::to.div.className\"\n     ng-style=\"::to.div.style || {}\"\n     flex-item=\"::to.flex.item\"\n     flex-order=\"::to.flex-order\">\n\t<formly-transclude></formly-transclude>\n</div>"

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<span class=\"inline-wrapper\">\n\t<span class=\"inline--before\">{{::to.inline.before}}</span>\n\t<span class=\"inline--content\">\n\t\t<formly-transclude></formly-transclude>\n\t</span>\n\t<span class=\"inline--after\">{{::to.inline.after}}</span>\n</span>"

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjJhYTQyNTkwOTk2MWYyOTI5MzIiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZmllbGRzL2x4LWNoZWNrYm94Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vZmllbGRzL2x4LWRhdGUtcGlja2VyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vZmllbGRzL2x4LWRyb3Bkb3duLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vZmllbGRzL2x4LWZsZXguaHRtbCIsIndlYnBhY2s6Ly8vLi9maWVsZHMvbHgtaW5wdXQuaHRtbCIsIndlYnBhY2s6Ly8vLi9maWVsZHMvbHgtcmFkaW8uaHRtbCIsIndlYnBhY2s6Ly8vLi9maWVsZHMvbHgtc2VsZWN0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vZmllbGRzL2x4LXN3aXRjaC5odG1sIiwid2VicGFjazovLy8uL2ZpZWxkcy9seC10ZXh0YXJlYS5odG1sIiwid2VicGFjazovLy8uL3dyYXBwZXJzL2x4LXdyYXBwZXItZGl2Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vd3JhcHBlcnMvbHgtd3JhcHBlci1lcnJvcnMuaHRtbCIsIndlYnBhY2s6Ly8vLi93cmFwcGVycy9seC13cmFwcGVyLWZsZXguaHRtbCIsIndlYnBhY2s6Ly8vLi93cmFwcGVycy9seC13cmFwcGVyLWlubGluZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0MsY0FBWTtBQUNYLGVBQVksQ0FBQztBQUNiLE9BQUksZUFBZSxHQUFHLElBQUksQ0FBQztBQUMzQixPQUFJLHlCQUF5QixHQUFHLElBQUksQ0FB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SDs7Ozs7O0FDQTVGLHVGQUFzRixvQkFBb0IsdUlBQXVJLG1CQUFtQixpQiIsImZpbGUiOiJmb3JtbHlMdW14LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA2MmFhNDI1OTA5OTYxZjI5MjkzMlxuICoqLyIsIihmdW5jdGlvbiAoKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgdmFyIFVTSU5HX1RFTVBMQVRFUyA9IHRydWU7XG4gIHZhciBVU0lOR19URU1QTEFURV9WQUxJREFUSU9OID0gdHJ1ZTtcbiAgLyogQ3VzdG9tIHZhbGlkYXRpb24gbWVzc2FnZSBkZWZhdWx0cyBoZXJlICovXG4gIHZhciBWQUxJREFUSU9OX01FU1NBR0VTID0gW3tcbiAgICBuYW1lOiAncmVxdWlyZWQnLCBtZXNzYWdlOiAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCdcbiAgfSwge1xuICAgIG5hbWU6ICdtYXhsZW5ndGgnLCBtZXNzYWdlOiAnVGhpcyBmaWVsZCBpcyB0b28gbG9uZy4nXG4gIH0sIHtcbiAgICBuYW1lOiAnbWlubGVuZ3RoJywgbWVzc2FnZTogJ1RoaXMgZmllbGQgaXMgdG9vIHNob3J0LidcbiAgfV07XG4gIC8qIE1vZHVsZSBUZW1wbGF0ZXMgKyBEYXRhICovXG4gIHZhciBNT0RVTEVfTkFNRSA9ICdmb3JtbHlMdW14JztcbiAgdmFyIFBSRUZJWCA9ICdseCc7XG4gIHZhciBGSUVMRFMgPSBbe1xuICAgIG5hbWU6ICdjaGVja2JveCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LWNoZWNrYm94Lmh0bWwnKVxuICB9LCB7XG4gICAgbmFtZTogJ2RhdGUtcGlja2VyJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtZGF0ZS1waWNrZXIuaHRtbCcpXG4gIH0sIHtcbiAgICBuYW1lOiAnZHJvcGRvd24nLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpZWxkcy9seC1kcm9wZG93bi5odG1sJylcbiAgfSwge1xuICAgIG5hbWU6ICdmbGV4JyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtZmxleC5odG1sJylcbiAgfSwge1xuICAgIG5hbWU6ICdpbnB1dCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LWlucHV0Lmh0bWwnKVxuICB9LCB7XG4gICAgbmFtZTogJ3JhZGlvJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtcmFkaW8uaHRtbCcpXG4gIH0sIHtcbiAgICBuYW1lOiAnc2VsZWN0JyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtc2VsZWN0Lmh0bWwnKVxuICAgIC8vfSwge1xuICAgIC8vXHRuYW1lOiAnc2VsZWN0LWFzeW5jJyxcbiAgICAvL1x0dGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LXNlbGVjdC1hc3luYy5odG1sJylcbiAgfSwge1xuICAgIG5hbWU6ICdzd2l0Y2gnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpZWxkcy9seC1zd2l0Y2guaHRtbCcpXG4gIH0sIHtcbiAgICBuYW1lOiAndGV4dGFyZWEnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpZWxkcy9seC10ZXh0YXJlYS5odG1sJylcbiAgfV07XG4gIHZhciBXUkFQUEVSUyA9IFt7XG4gICAgbmFtZTogJ3dyYXBwZXItZGl2JyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93cmFwcGVycy9seC13cmFwcGVyLWRpdi5odG1sJylcbiAgfSwge1xuICAgIG5hbWU6ICd3cmFwcGVyLWVycm9ycycsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vd3JhcHBlcnMvbHgtd3JhcHBlci1lcnJvcnMuaHRtbCcpXG4gIH0sIHtcbiAgICBuYW1lOiAnd3JhcHBlci1mbGV4JyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93cmFwcGVycy9seC13cmFwcGVyLWZsZXguaHRtbCcpXG4gIH0sIHtcbiAgICBuYW1lOiAnd3JhcHBlci1pbmxpbmUnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3dyYXBwZXJzL2x4LXdyYXBwZXItaW5saW5lLmh0bWwnKVxuICB9XTtcblxuICBmdW5jdGlvbiBfcHJlZml4ZXIobmFtZSkge1xuICAgIHJldHVybiBQUkVGSVggKyAnLScgKyBuYW1lO1xuICB9XG5cbiAgZnVuY3Rpb24gX3dyYXBwZXJUZW1wbGF0ZVVybChuYW1lKSB7XG4gICAgcmV0dXJuICd3cmFwcGVycy9mb3JtbHktd3JhcHBlcnMtJyArIF9wcmVmaXhlcihuYW1lKSArICcuaHRtbCc7XG4gIH1cblxuICBmdW5jdGlvbiBfZmllbGRUZW1wbGF0ZVVybChuYW1lKSB7XG4gICAgcmV0dXJuICdmaWVsZHMvZm9ybWx5LWZpZWxkcy0nICsgX3ByZWZpeGVyKG5hbWUpICsgJy5odG1sJztcbiAgfVxuXG4gIC8qQG5nSW5qZWN0Ki9cbiAgZnVuY3Rpb24gc2V0V3JhcHBlcnMoZm9ybWx5Q29uZmlnUHJvdmlkZXIpIHtcbiAgICBpZiAoVVNJTkdfVEVNUExBVEVTKSB7XG4gICAgICBXUkFQUEVSUy5tYXAoZnVuY3Rpb24gKHdyYXBwZXIpIHtcbiAgICAgICAgZm9ybWx5Q29uZmlnUHJvdmlkZXIuc2V0V3JhcHBlcih7XG4gICAgICAgICAgbmFtZTogX3ByZWZpeGVyKHdyYXBwZXIubmFtZSksXG4gICAgICAgICAgdGVtcGxhdGVVcmw6IF93cmFwcGVyVGVtcGxhdGVVcmwod3JhcHBlci5uYW1lKVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIF9wcmVmaXhlcih3cmFwcGVyLm5hbWUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYWRkRmllbGRWYWxpZGF0aW9uT3B0aW9ucyhhcGlDaGVjaykgeyAgLyogdmFsaWRhdGlvbiB1c2luZyBhcGlDaGVjay5qcyAqL1xuICAgIHZhciBBUElDSEVDS19WQUxJREFUSU9OX0ZJRUxEUyA9IFt7XG4gICAgICBuYW1lOiAnY2hlY2tib3gnLFxuICAgICAgdmFsaWRhdGVPcHRpb25zOiB7XG4gICAgICAgIGxhYmVsOiBhcGlDaGVjay5zdHJpbmcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBhcGlDaGVjay5zdHJpbmcsXG4gICAgICAgIGNoZWNrZWQ6IGFwaUNoZWNrLmJvb2xlYW4sXG4gICAgICAgIHJlcXVpcmVkOiBhcGlDaGVjay5ib29sZWFuXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbmFtZTogJ2RhdGUtcGlja2VyJyxcbiAgICAgIHZhbGlkYXRlT3B0aW9uczogeydsYWJlbCc6IGFwaUNoZWNrLnN0cmluZywgJ3JlcXVpcmVkJzogYXBpQ2hlY2suYm9vbGVhbn1cbiAgICB9LCB7XG4gICAgICBuYW1lOiAnaW5wdXQnLFxuICAgICAgdmFsaWRhdGVPcHRpb25zOiB7XG4gICAgICAgIGxhYmVsOiBhcGlDaGVjay5zdHJpbmcsXG4gICAgICAgIGljb246IGFwaUNoZWNrLnN0cmluZyxcbiAgICAgICAgZml4ZWRMYWJlbDogYXBpQ2hlY2suYm9vbGVhbixcbiAgICAgICAgZGlzYWJsZWQ6IGFwaUNoZWNrLmJvb2xlYW4sXG4gICAgICAgIGNsYXNzTmFtZTogYXBpQ2hlY2suc3RyaW5nLFxuICAgICAgICB0aGVtZTogYXBpQ2hlY2sub25lT2YoWydsaWdodCcsICdkYXJrJ10pLFxuICAgICAgICB0eXBlOiBhcGlDaGVjay5vbmVPZihbJ3RleHQnLCAnbnVtYmVyJywgJ2VtYWlsJywgJ3Bhc3N3b3JkJywgJ3VybCcsICd0ZWwnXSksXG4gICAgICAgIHJlcXVpcmVkOiBhcGlDaGVjay5ib29sZWFuXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbmFtZTogJ3JhZGlvJyxcbiAgICAgIHZhbGlkYXRlT3B0aW9uczoge1xuICAgICAgICBsYWJlbDogYXBpQ2hlY2suc3RyaW5nLFxuICAgICAgICBkZXNjcmlwdGlvbjogYXBpQ2hlY2suc3RyaW5nLFxuICAgICAgICBvcHRpb25zOiBhcGlDaGVjay5hcnJheU9mKHtcbiAgICAgICAgICBuYW1lOiBhcGlDaGVjay5zdHJpbmcsXG4gICAgICAgICAgdmFsdWU6IGFwaUNoZWNrLm9uZU9mVHlwZShbYXBpQ2hlY2suc3RyaW5nLCBhcGlDaGVjay5udW1iZXJdKSxcbiAgICAgICAgICBkaXNhYmxlZDogYXBpQ2hlY2suYm9vbGVhblxuICAgICAgICB9KSxcbiAgICAgICAgaW5saW5lOiBhcGlDaGVjay5ib29sZWFuLFxuICAgICAgICByZXF1aXJlZDogYXBpQ2hlY2suYm9vbGVhblxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdzZWxlY3QnLFxuICAgICAgdmFsaWRhdGVPcHRpb25zOiB7XG4gICAgICAgIGxhYmVsOiBhcGlDaGVjay5zdHJpbmcsXG4gICAgICAgIHBsYWNlaG9sZGVyOiBhcGlDaGVjay5zdHJpbmcsXG4gICAgICAgICdtaW4tbGVuZ3RoJzogYXBpQ2hlY2subnVtYmVyLFxuICAgICAgICAnYWxsb3ctY2xlYXInOiBhcGlDaGVjay5ib29sZWFuLFxuICAgICAgICAnbmctYXR0ci1tdWx0aXBsZSc6IGFwaUNoZWNrLmJvb2xlYW4sXG4gICAgICAgIHNlbGVjdGVkOiBhcGlDaGVjay5zdHJpbmcsXG4gICAgICAgIHNlbGVjdGVkMjogYXBpQ2hlY2suc3RyaW5nLFxuICAgICAgICBjaG9pY2U6IGFwaUNoZWNrLnN0cmluZyxcbiAgICAgICAgY2hvaWNlMjogYXBpQ2hlY2suc3RyaW5nLFxuICAgICAgICBjaG9pY2VzOiBhcGlDaGVjay5hcnJheSxcbiAgICAgICAgcmVxdWlyZWQ6IGFwaUNoZWNrLmJvb2xlYW5cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBuYW1lOiAnc3dpdGNoJyxcbiAgICAgIHZhbGlkYXRlT3B0aW9uczoge1xuICAgICAgICBsYWJlbDogYXBpQ2hlY2suc3RyaW5nLFxuICAgICAgICBkZXNjcmlwdGlvbjogYXBpQ2hlY2suc3RyaW5nLFxuICAgICAgICBjaGVja2VkOiBhcGlDaGVjay5ib29sZWFuLFxuICAgICAgICByZXF1aXJlZDogYXBpQ2hlY2suYm9vbGVhblxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICd0ZXh0YXJlYScsXG4gICAgICB2YWxpZGF0ZU9wdGlvbnM6IHtcbiAgICAgICAgbGFiZWw6IGFwaUNoZWNrLnN0cmluZyxcbiAgICAgICAgaWNvbjogYXBpQ2hlY2suc3RyaW5nLFxuICAgICAgICB0aGVtZTogYXBpQ2hlY2sub25lT2YoWydsaWdodCcsICdkYXJrJ10pLFxuICAgICAgICByZXF1aXJlZDogYXBpQ2hlY2suYm9vbGVhbixcbiAgICAgICAgcm93czogYXBpQ2hlY2subnVtYmVyLFxuICAgICAgICBjb2xzOiBhcGlDaGVjay5udW1iZXJcbiAgICAgIH1cbiAgICB9XTtcbiAgICBBUElDSEVDS19WQUxJREFUSU9OX0ZJRUxEUy5tYXAoZnVuY3Rpb24gKHZhbGlkYXRpb25GaWVsZCkge1xuICAgICAgRklFTERTLm1hcChmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgICAgaWYgKGZpZWxkLm5hbWUgPT09IHZhbGlkYXRpb25GaWVsZC5uYW1lKSB7XG4gICAgICAgICAgZmllbGQudmFsaWRhdGVPcHRpb25zID0gdmFsaWRhdGlvbkZpZWxkLnZhbGlkYXRlT3B0aW9ucztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKkBuZ0luamVjdCovXG4gIGZ1bmN0aW9uIHNldEZpZWxkcyhmb3JtbHlDb25maWcsIGZvcm1seUFwaUNoZWNrKSB7XG4gICAgaWYgKFVTSU5HX1RFTVBMQVRFUykge1xuICAgICAgaWYgKFVTSU5HX1RFTVBMQVRFX1ZBTElEQVRJT04pIHsgICAgICAgIC8qIHZhbGlkYXRlIG9wdGlvbnMgdXNpbmcgYXBpQ2hlY2sgdG8gcmVkdWNlIGRldmVsb3BlciBlcnJvcnMgKi9cbiAgICAgICAgYWRkRmllbGRWYWxpZGF0aW9uT3B0aW9ucyhmb3JtbHlBcGlDaGVjayk7XG4gICAgICAgIEZJRUxEUy5tYXAoZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICAgICAgZm9ybWx5Q29uZmlnLnNldFR5cGUoe1xuICAgICAgICAgICAgbmFtZTogX3ByZWZpeGVyKGZpZWxkLm5hbWUpLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6IF9maWVsZFRlbXBsYXRlVXJsKGZpZWxkLm5hbWUpLFxuICAgICAgICAgICAgdmFsaWRhdGVPcHRpb25zOiBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICAgICAgICBvcHRpb25zLmRhdGEuYXBpQ2hlY2sgPSBmb3JtbHlBcGlDaGVjay53YXJuKGZvcm1seUFwaUNoZWNrLnNoYXBlKHt0ZW1wbGF0ZU9wdGlvbnM6IGZvcm1seUFwaUNoZWNrLnNoYXBlKGZpZWxkLnRlbXBsYXRlT3B0aW9ucyB8fCB7fSkub3B0aW9uYWx9KSwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgeyAgICAgICAgLyogc2tpcCB2YWxpZGF0aW5nIG9wdGlvbnMgKi9cbiAgICAgICAgLy9hcGlDaGVjay5kaXNhYmxlKCk7XG4gICAgICAgIEZJRUxEUy5tYXAoZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICAgICAgZm9ybWx5Q29uZmlnLnNldFR5cGUoe25hbWU6IF9wcmVmaXhlcihmaWVsZC5uYW1lKSwgdGVtcGxhdGVVcmw6IF9maWVsZFRlbXBsYXRlVXJsKGZpZWxkLm5hbWUpfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldERlZmF1bHRzKGZvcm1seUNvbmZpZywgZm9ybWx5VmFsaWRhdGlvbk1lc3NhZ2VzKSB7XG4gICAgZm9ybWx5Q29uZmlnLmV4dHJhcy5uZ01vZGVsQXR0cnNNYW5pcHVsYXRvclByZWZlckJvdW5kID0gdHJ1ZTtcbiAgICBWQUxJREFUSU9OX01FU1NBR0VTLm1hcChmdW5jdGlvbiAodmFsaWRhdGlvbikge1xuICAgICAgZm9ybWx5VmFsaWRhdGlvbk1lc3NhZ2VzLmFkZFN0cmluZ01lc3NhZ2UodmFsaWRhdGlvbi5uYW1lLCB2YWxpZGF0aW9uLm1lc3NhZ2UpO1xuICAgIH0pO1xuICAgIGZvcm1seVZhbGlkYXRpb25NZXNzYWdlcy5tZXNzYWdlcy5wYXR0ZXJuID0gZnVuY3Rpb24gKHZpZXdWYWx1ZSwgbW9kZWxWYWx1ZSkge1xuICAgICAgcmV0dXJuICh2aWV3VmFsdWUgfHwgbW9kZWxWYWx1ZSkgKyAnIGlzIGludmFsaWQnO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBjYWNoZVRlbXBsYXRlcygkdGVtcGxhdGVDYWNoZSkge1xuICAgIGlmIChVU0lOR19URU1QTEFURVMpIHtcbiAgICAgIEZJRUxEUy5tYXAoZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICAgICR0ZW1wbGF0ZUNhY2hlLnB1dChfZmllbGRUZW1wbGF0ZVVybChmaWVsZC5uYW1lKSwgZmllbGQudGVtcGxhdGUpO1xuICAgICAgfSk7XG4gICAgICBXUkFQUEVSUy5tYXAoZnVuY3Rpb24gKHdyYXBwZXIpIHtcbiAgICAgICAgJHRlbXBsYXRlQ2FjaGUucHV0KF93cmFwcGVyVGVtcGxhdGVVcmwod3JhcHBlci5uYW1lKSwgd3JhcHBlci50ZW1wbGF0ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBhbmd1bGFyLm1vZHVsZShNT0RVTEVfTkFNRSwgW1xuICAgICdmb3JtbHknXG4gIF0pLmNvbmZpZyhzZXRXcmFwcGVycykucnVuKHNldEZpZWxkcykucnVuKHNldERlZmF1bHRzKS5ydW4oY2FjaGVUZW1wbGF0ZXMpO1xufSgpKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL34vanNoaW50LWxvYWRlciEuL2luZGV4LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNoZWNrYm94XFxcIj5cXG5cXHQ8aW5wdXQgbmctbW9kZWw9XFxcIm1vZGVsW29wdGlvbnMua2V5XVxcXCJcXG5cXHQgICAgICAgdHlwZT1cXFwiY2hlY2tib3hcXFwiXFxuXFx0ICAgICAgIHJvbGU9XFxcImNoZWNrYm94XFxcIlxcblxcdCAgICAgICBjbGFzcz1cXFwiY2hlY2tib3hfX2lucHV0XFxcIj5cXG5cXHQ8bGFiZWwgZm9yPXt7OjppZH19IGNsYXNzPVxcXCJjaGVja2JveF9fbGFiZWxcXFwiIGFyaWEtbGFiZWw9XFxcInt7Ojp0by5sYWJlbH19XFxcIj57e3RvLmxhYmVsfX08L2xhYmVsPlxcblxcdDxzcGFuIG5nLWlmPVxcXCI6OnRvLmRlc2NyaXB0aW9uXFxcIlxcblxcdCAgICAgIGNsYXNzPVxcXCJjaGVja2JveF9faGVscFxcXCI+e3s6OnRvLmRlc2NyaXB0aW9ufX08L3NwYW4+XFxuPC9kaXY+XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vZmllbGRzL2x4LWNoZWNrYm94Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGx4LWRhdGUtcGlja2VyIG1vZGVsPVxcXCJtb2RlbFtvcHRpb25zLmtleV1cXFwiXFxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XFxcInt7Ojp0by5sYWJlbH19XFxcIlxcbiAgICAgICAgICAgICAgICBsYWJlbD1cXFwie3s6OnRvLmxhYmVsfX0ge3s6OnRvLnJlcXVpcmVkID8gJyonIDogJyd9fVxcXCI+XFxuPC9seC1kYXRlLXBpY2tlcj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9maWVsZHMvbHgtZGF0ZS1waWNrZXIuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8bHgtZHJvcGRvd24+XFxuXFx0PGJ1dHRvbiBjbGFzcz1cXFwiYnRuXFxcIiBuZy1jbGFzcz1cXFwiOjp0by5jbGFzc05hbWUgfHwgJ2J0bi0tbSBidG4tLWJsYWNrIGJ0bi0tZmxhdCdcXFwiIGx4LXJpcHBsZSBseC1kcm9wZG93bi10b2dnbGUgYXJpYS1sYWJlbD1cXFwie3s6OnRvLmxhYmVsfX1cXFwiPlxcblxcdFxcdDxpIG5nLWlmPVxcXCI6OnRvLmljb25cXFwiIGNsYXNzPVxcXCJtZGkgbWRpLWRvdHMtdmVydGljYWxcXFwiPjwvaT5cXG5cXHRcXHR7e3RvLmxhYmVsfX1cXG5cXHQ8L2J1dHRvbj5cXG5cXHQ8bHgtZHJvcGRvd24tbWVudT5cXG5cXHRcXHQ8dWw+XFxuXFx0XFx0XFx0PGxpIG5nLXJlcGVhdD1cXFwibyBpbiA6OnRvLm9wdGlvbnNcXFwiPlxcblxcdFxcdFxcdFxcdDxhIGNsYXNzPVxcXCJkcm9wZG93bi1saW5rXFxcIiBuZy1jbGljaz1cXFwiby5hY3Rpb24oKVxcXCI+e3s6Om8udGV4dH19PC9hPlxcblxcdFxcdFxcdDwvbGk+XFxuXFx0XFx0PC91bD5cXG5cXHQ8L2x4LWRyb3Bkb3duLW1lbnU+XFxuPC9seC1kcm9wZG93bj5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9maWVsZHMvbHgtZHJvcGRvd24uaHRtbFxuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJhZnRsLWZsZXgtZmllbGRzXFxcIlxcbiAgICAgbW9kZWw9XFxcIiRwYXJlbnQubW9kZWxcXFwiXFxuICAgICBmbGV4LWNvbnRhaW5lcj1cXFwie3s6OnRvLmZsZXguY29udGFpbmVyIHx8ICdyb3cnfX1cXFwiXFxuICAgICBmbGV4LWFsaWduPVxcXCJ7ezo6dG8uZmxleC5hbGlnbiB8fCAnc3BhY2UtYmV0d2Vlbid9fVxcXCJcXG4gICAgIGZsZXgtZ3V0dGVyPVxcXCJ7ezo6dG8uZmxleC5ndXR0ZXIgfHwgJzI0J319XFxcIj5cXG5cXHQ8ZGl2IGZvcm1seS1maWVsZFxcblxcdCAgICAgbmctcmVwZWF0PVxcXCJmaWVsZCBpbiB0by5maWVsZHMgdHJhY2sgYnkgJGluZGV4XFxcIlxcblxcdCAgICAgbmctaWY9XFxcIiFmaWVsZC5oaWRlXFxcIlxcblxcdCAgICAgY2xhc3M9XFxcImZvcm1seS1maWVsZCB7ezo6ZmllbGQudHlwZSA/ICdmb3JtbHktZmllbGQtJyArIGZpZWxkLnR5cGUgOiAnJ319XFxcIlxcblxcdCAgICAgbmctc3R5bGU9XFxcIjo6dG8uZmxleC5zdHlsZVxcXCJcXG5cXHQgICAgIG9wdGlvbnM9XFxcImZpZWxkXFxcIlxcblxcdCAgICAgbW9kZWw9XFxcImZpZWxkLm1vZGVsIHx8IG1vZGVsXFxcIlxcblxcdCAgICAgZmllbGRzPVxcXCJmaWVsZHNcXFwiXFxuXFx0ICAgICBmb3JtPVxcXCJmb3JtXFxcIlxcblxcdCAgICAgZm9ybS1pZD1cXFwiZm9ybUlkXFxcIlxcblxcdCAgICAgZm9ybS1zdGF0ZT1cXFwib3B0aW9ucy5mb3JtU3RhdGVcXFwiXFxuXFx0ICAgICBpbmRleD1cXFwiJGluZGV4XFxcIlxcblxcdCAgICAgZmxleC1pdGVtPVxcXCJ7ezo6dG8uZmxleC5pdGVtIHx8ICcxJ319XFxcIlxcblxcdCAgICAgZmxleC1vcmRlcj1cXFwie3s6OnRvLmZsZXgub3JkZXJ9fVxcXCI+XFxuXFx0PC9kaXY+XFxuPC9kaXY+XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vZmllbGRzL2x4LWZsZXguaHRtbFxuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8bHgtdGV4dC1maWVsZCBkYXRhLW1vZGVsPVxcXCI6Om1vZGVsW29wdGlvbnMua2V5XVxcXCJcXG4gICAgICAgICAgICAgICBpY29uPVxcXCJ7ezo6dG8uaWNvbn19XFxcIlxcbiAgICAgICAgICAgICAgIGZpeGVkLWxhYmVsPVxcXCI6OnRvLmZpeGVkTGFiZWxcXFwiXFxuICAgICAgICAgICAgICAgdGhlbWU9XFxcInt7Ojp0by50aGVtZX19XFxcIlxcbiAgICAgICAgICAgICAgIGRpc2FibGVkPVxcXCJ0by5kaXNhYmxlZFxcXCJcXG4gICAgICAgICAgICAgICBsYWJlbD1cXFwie3t0by5sYWJlbH19IHt7Ojp0by5yZXF1aXJlZCA/ICcqJyA6ICcnfX1cXFwiXFxuICAgICAgICAgICAgICAgdmFsaWQ9XFxcImZjLiR2YWxpZCAmJiBmYy4kdG91Y2hlZFxcXCJcXG4gICAgICAgICAgICAgICBlcnJvcj1cXFwiZmMuJGludmFsaWQgJiYgZmMuJHRvdWNoZWRcXFwiPlxcblxcdDxpbnB1dCBuZy1tb2RlbD1cXFwibW9kZWxbb3B0aW9ucy5rZXldXFxcIlxcblxcdCAgICAgICB0eXBlPVxcXCJ7ezo6dG8udHlwZX19XFxcIlxcblxcdCAgICAgICBhcmlhLWxhYmVsPVxcXCJ7ezo6dG8ubGFiZWx9fVxcXCJcXG5cXHQgICAgICAgbmctY2xhc3M9XFxcIjo6dG8uY2xhc3NOYW1lXFxcIi8+XFxuPC9seC10ZXh0LWZpZWxkPlwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2ZpZWxkcy9seC1pbnB1dC5odG1sXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInJhZGlvLWdyb3VwXFxcIj5cXG5cXHQ8aDMgbmctaWY9XFxcIjo6dG8ubGFiZWxcXFwiPjxsYWJlbD57ezo6dG8ubGFiZWx9fTwvbGFiZWw+PC9oMz5cXG5cXG5cXHQ8ZGl2IGNsYXNzPVxcXCJyYWRpby1idXR0b25cXFwiXFxuXFx0ICAgICBuZy1jbGFzcz1cXFwieydyYWRpby1idXR0b25fX2lubGluZSc6IHRvLmlubGluZX1cXFwiXFxuXFx0ICAgICBuZy1yZXBlYXQ9XFxcIm8gaW4gdG8ub3B0aW9uc1xcXCI+XFxuXFx0XFx0PGlucHV0IG5nLW1vZGVsPVxcXCIkcGFyZW50Lm1vZGVsWyRwYXJlbnQub3B0aW9ucy5rZXldXFxcIlxcblxcdFxcdCAgICAgICBpZD1cXFwie3s6OmlkICsgJ18nICsgJGluZGV4fX1cXFwiXFxuXFx0XFx0ICAgICAgIHR5cGU9XFxcInJhZGlvXFxcIlxcblxcdFxcdCAgICAgICBuZy1kaXNhYmxlZD1cXFwiOjpvLmRpc2FibGVkXFxcIlxcblxcdFxcdCAgICAgICBjbGFzcz1cXFwicmFkaW8tYnV0dG9uX19pbnB1dFxcXCJcXG5cXHRcXHQgICAgICAgbmctdmFsdWU9XFxcIjo6by52YWx1ZVxcXCJcXG5cXHRcXHQgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVxcXCJ7ezo6aWQgKyAnXycgKyAkaW5kZXggKyAnX3JhZGlvQnV0dG9uJ319XFxcIj5cXG5cXHRcXHQ8bGFiZWwgZm9yPVxcXCJ7ezo6aWQgKyAnXycgKyAkaW5kZXh9fVxcXCJcXG5cXHRcXHQgICAgICAgY2xhc3M9XFxcInJhZGlvLWJ1dHRvbl9fbGFiZWxcXFwiPnt7OjpvLm5hbWV9fTwvbGFiZWw+XFxuICAgICAgPHNwYW4gbmctaWY9XFxcIjo6by5kZXNjcmlwdGlvblxcXCIgY2xhc3M9XFxcInJhZGlvLWJ1dHRvbl9faGVscFxcXCI+e3s6Om8uZGVzY3JpcHRpb259fVxcbiAgICAgIDwvc3Bhbj5cXG5cXHQ8L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9maWVsZHMvbHgtcmFkaW8uaHRtbFxuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJhZnRsLXNlbGVjdFxcXCI+XFxuXFx0PGgzIG5nLWlmPVxcXCI6OnRvLmxhYmVsXFxcIj48bGFiZWw+XFxuXFx0XFx0e3t0by5sYWJlbH19IHt7Ojp0by5yZXF1aXJlZCA/ICcqJyA6ICcnfX1cXG5cXHQ8L2xhYmVsPjwvaDM+XFxuXFx0PGx4LXNlbGVjdCBuZy1tb2RlbD1cXFwibW9kZWxbb3B0aW9ucy5rZXldXFxcIlxcblxcdCAgICAgICAgICAgY2hvaWNlcz1cXFwidG8ub3B0aW9uc1xcXCJcXG5cXHQgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJ7ezo6dG8ucGxhY2Vob2xkZXJ9fVxcXCJcXG5cXHQgICAgICAgICAgIG1pbi1sZW5ndGg9XFxcIjo6dG8ubWluTGVuZ3RoXFxcIlxcblxcdCAgICAgICAgICAgYWxsb3ctY2xlYXI9XFxcIjo6dG8uYWxsb3dDbGVhclxcXCJcXG5cXHQgICAgICAgICAgIG5nLWF0dHItbXVsdGlwbGU9XFxcInt7Ojp0by5tdWx0aXBsZX19XFxcIj5cXG5cXG5cXHRcXHQ8bHgtc2VsZWN0LXNlbGVjdGVkPlxcblxcdFxcdFxcdHt7JHNlbGVjdGVkW3RvLnNlbGVjdGVkXSB8fCAkc2VsZWN0ZWR9fSB7ezo6dG8uc2VsZWN0ZWQyID8gJyAtICcgK1xcblxcdFxcdFxcdCRzZWxlY3RlZFt0by5zZWxlY3RlZDJdIDogJyd9fVxcblxcdFxcdDwvbHgtc2VsZWN0LXNlbGVjdGVkPlxcblxcblxcdFxcdDxseC1zZWxlY3QtY2hvaWNlcz5cXG5cXHRcXHRcXHR7eyRjaG9pY2VbdG8uY2hvaWNlXSB8fCAkY2hvaWNlfX0ge3s6OnRvLmNob2ljZTIgPyAnIC0gJyArXFxuXFx0XFx0XFx0JGNob2ljZVt0by5jaG9pY2UyXSA6ICcnfX1cXG5cXHRcXHQ8L2x4LXNlbGVjdC1jaG9pY2VzPlxcblxcblxcdDwvbHgtc2VsZWN0PlxcbjwvZGl2PlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2ZpZWxkcy9seC1zZWxlY3QuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJzd2l0Y2hcXFwiPlxcblxcdDxpbnB1dCBuZy1tb2RlbD1cXFwibW9kZWxbb3B0aW9ucy5rZXldXFxcIlxcblxcdCAgICAgICB0eXBlPVxcXCJjaGVja2JveFxcXCJcXG5cXHQgICAgICAgcm9sZT1cXFwiY2hlY2tib3hcXFwiXFxuXFx0ICAgICAgIGNsYXNzPVxcXCJzd2l0Y2hfX2lucHV0XFxcIi8+XFxuXFx0PGxhYmVsIGZvcj1cXFwie3s6OmlkfX1cXFwiIGNsYXNzPVxcXCJzd2l0Y2hfX2xhYmVsXFxcIiBhcmlhLWxhYmVsPVxcXCJ7ezo6dG8ubGFiZWx9fVxcXCI+e3t0by5sYWJlbH19PC9sYWJlbD5cXG5cXHQ8c3BhbiBuZy1pZj1cXFwiOjp0by5kZXNjcmlwdGlvblxcXCJcXG5cXHQgICAgICBjbGFzcz1cXFwic3dpdGNoX19oZWxwXFxcIj57ezo6dG8uZGVzY3JpcHRpb259fTwvc3Bhbj5cXG48L2Rpdj5cXG5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9maWVsZHMvbHgtc3dpdGNoLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGx4LXRleHQtZmllbGQgZGF0YS1tb2RlbD1cXFwiOjptb2RlbFtvcHRpb25zLmtleV1cXFwiXFxuICAgICAgICAgICAgICAgZml4ZWQtbGFiZWw9XFxcIjo6dG8uZml4ZWRMYWJlbFxcXCJcXG4gICAgICAgICAgICAgICBpY29uPVxcXCJ7ezo6dG8uaWNvbn19XFxcIlxcbiAgICAgICAgICAgICAgIHRoZW1lPVxcXCJ7ezo6dG8udGhlbWV9fVxcXCJcXG4gICAgICAgICAgICAgICBsYWJlbD1cXFwie3t0by5sYWJlbH19IHt7Ojp0by5yZXF1aXJlZCA/ICcqJyA6ICcnfX1cXFwiXFxuICAgICAgICAgICAgICAgdmFsaWQ9XFxcImZjLiR2YWxpZCAmJiBmYy4kdG91Y2hlZFxcXCJcXG4gICAgICAgICAgICAgICBlcnJvcj1cXFwiZmMuJGludmFsaWQgJiYgZmMuJHRvdWNoZWRcXFwiPlxcbiAgICA8dGV4dGFyZWEgbmctbW9kZWw9XFxcIm1vZGVsW29wdGlvbnMua2V5XVxcXCJcXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XFxcInt7Ojp0by5sYWJlbH19XFxcIlxcbiAgICAgICAgICAgICAgcm93cz1cXFwie3s6OnRvLnJvd3N9fVxcXCIgY29scz1cXFwie3s6OnRvLmNvbHN9fVxcXCI+XFxuICAgIDwvdGV4dGFyZWE+XFxuPC9seC10ZXh0LWZpZWxkPlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2ZpZWxkcy9seC10ZXh0YXJlYS5odG1sXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgbmctY2xhc3M9XFxcIjo6dG8uZGl2LmNsYXNzTmFtZVxcXCJcXG5cXHRuZy1zdHlsZT1cXFwiOjp0by5kaXYuc3R5bGVcXFwiPlxcblxcdDxmb3JtbHktdHJhbnNjbHVkZT48L2Zvcm1seS10cmFuc2NsdWRlPlxcbjwvZGl2PlwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3dyYXBwZXJzL2x4LXdyYXBwZXItZGl2Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+XFxuXFx0PGZvcm1seS10cmFuc2NsdWRlPjwvZm9ybWx5LXRyYW5zY2x1ZGU+XFxuXFx0PHVsIGNsYXNzPVxcXCJmb3JtLWVycm9yXFxcIiBuZy1tZXNzYWdlcz1cXFwiZmMuJGVycm9yXFxcIlxcblxcdCAgICBuZy1zaG93PVxcXCJvcHRpb25zLnZhbGlkYXRpb24uZXJyb3JFeGlzdHNBbmRTaG91bGRCZVZpc2libGVcXFwiPlxcblxcdFxcdDxsaSBuZy1yZXBlYXQ9XFxcIihuYW1lLCBtZXNzYWdlKSBpbiA6Om9wdGlvbnMudmFsaWRhdGlvbi5tZXNzYWdlc1xcXCJcXG5cXHRcXHQgICAgbmctbWVzc2FnZT17ezo6bmFtZX19PlxcblxcdFxcdFxcdHt7bWVzc2FnZShmYy4kdmlld1ZhbHVlLCBmYy4kbW9kZWxWYWx1ZSwgdGhpcyl9fVxcblxcdFxcdDwvbGk+XFxuXFx0PC91bD5cXG5cXHQ8c3BhbiBjbGFzcz1cXFwiZm9ybS1wZW5kaW5nXFxcIlxcblxcdCAgICAgIG5nLWlmPVxcXCJ0by5wZW5kaW5nICYmIGZjLiRwZW5kaW5nICYmIGZjLiR0b3VjaGVkXFxcIj5cXG5cXHR7ezo6dG8ucGVuZGluZyB8fCAnQ2hlY2tpbmcuLi4nfX1cXG5cXHQ8L3NwYW4+XFxuPC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vd3JhcHBlcnMvbHgtd3JhcHBlci1lcnJvcnMuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBuZy1jbGFzcz1cXFwiOjp0by5kaXYuY2xhc3NOYW1lXFxcIlxcbiAgICAgbmctc3R5bGU9XFxcIjo6dG8uZGl2LnN0eWxlIHx8IHt9XFxcIlxcbiAgICAgZmxleC1pdGVtPVxcXCI6OnRvLmZsZXguaXRlbVxcXCJcXG4gICAgIGZsZXgtb3JkZXI9XFxcIjo6dG8uZmxleC1vcmRlclxcXCI+XFxuXFx0PGZvcm1seS10cmFuc2NsdWRlPjwvZm9ybWx5LXRyYW5zY2x1ZGU+XFxuPC9kaXY+XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vd3JhcHBlcnMvbHgtd3JhcHBlci1mbGV4Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzcGFuIGNsYXNzPVxcXCJpbmxpbmUtd3JhcHBlclxcXCI+XFxuXFx0PHNwYW4gY2xhc3M9XFxcImlubGluZS0tYmVmb3JlXFxcIj57ezo6dG8uaW5saW5lLmJlZm9yZX19PC9zcGFuPlxcblxcdDxzcGFuIGNsYXNzPVxcXCJpbmxpbmUtLWNvbnRlbnRcXFwiPlxcblxcdFxcdDxmb3JtbHktdHJhbnNjbHVkZT48L2Zvcm1seS10cmFuc2NsdWRlPlxcblxcdDwvc3Bhbj5cXG5cXHQ8c3BhbiBjbGFzcz1cXFwiaW5saW5lLS1hZnRlclxcXCI+e3s6OnRvLmlubGluZS5hZnRlcn19PC9zcGFuPlxcbjwvc3Bhbj5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi93cmFwcGVycy9seC13cmFwcGVyLWlubGluZS5odG1sXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=