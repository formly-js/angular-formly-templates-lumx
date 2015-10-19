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
	      apiCheck: function apiCheck(check) {
	        return {
	          templateOptions: {
	            label: check.string,
	            description: check.string,
	            checked: check.boolean,
	            required: check.boolean
	          }
	        };
	      }
	    }, {
	      name: 'date-picker',
	      apiCheck: function apiCheck(check) {
	        return {
	          templateOptions: {
	            'label': check.string,
	            'required': check.boolean
	          }
	        };
	      }
	    }, {
	      name: 'input',
	      apiCheck: function apiCheck(check) {
	        return {
	          templateOptions: {
	            label: check.string,
	            icon: check.string,
	            fixedLabel: check.boolean,
	            disabled: check.boolean,
	            className: check.string,
	            theme: check.oneOf(['light', 'dark']),
	            type: check.oneOf(['text', 'number', 'email', 'password', 'url', 'tel']),
	            required: check.boolean
	          }
	        };
	      }
	    }, {
	      name: 'radio',
	      apiCheck: function apiCheck(check) {
	        return {
	          templateOptions: {
	            label: check.string,
	            description: check.string,
	            options: check.arrayOf({
	              name: check.string,
	              value: check.oneOfType([check.string, check.number]),
	              disabled: check.boolean
	            }),
	            inline: check.boolean,
	            required: check.boolean
	          }
	        };
	      }
	    }, {
	      name: 'select',
	      apiCheck: function apiCheck(check) {
	        return {
	          templateOptions: {
	            label: check.string,
	            placeholder: check.string,
	            'min-length': check.number,
	            'allow-clear': check.boolean,
	            'ng-attr-multiple': check.boolean,
	            selected: check.string,
	            selected2: check.string,
	            choice: check.string,
	            choice2: check.string,
	            choices: check.array,
	            required: check.boolean
	          }
	        };
	      }
	    }, {
	      name: 'switch',
	      apiCheck: function apiCheck(check) {
	        return {
	          templateOptions: {
	            label: check.string,
	            description: check.string,
	            checked: check.boolean,
	            required: check.boolean
	          }
	        };
	      }
	    }, {
	      name: 'textarea',
	      apiCheck: function apiCheck(check) {
	        return {
	          templateOptions: {
	            label: check.string,
	            icon: check.string,
	            theme: check.oneOf(['light', 'dark']),
	            required: check.boolean,
	            rows: check.number,
	            cols: check.number
	          }
	        };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzNlMWU0OTFjYzY5MGRlNTAzNjYiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZmllbGRzL2x4LWNoZWNrYm94Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vZmllbGRzL2x4LWRhdGUtcGlja2VyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vZmllbGRzL2x4LWRyb3Bkb3duLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vZmllbGRzL2x4LWZsZXguaHRtbCIsIndlYnBhY2s6Ly8vLi9maWVsZHMvbHgtaW5wdXQuaHRtbCIsIndlYnBhY2s6Ly8vLi9maWVsZHMvbHgtcmFkaW8uaHRtbCIsIndlYnBhY2s6Ly8vLi9maWVsZHMvbHgtc2VsZWN0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vZmllbGRzL2x4LXN3aXRjaC5odG1sIiwid2VicGFjazovLy8uL2ZpZWxkcy9seC10ZXh0YXJlYS5odG1sIiwid2VicGFjazovLy8uL3dyYXBwZXJzL2x4LXdyYXBwZXItZGl2Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vd3JhcHBlcnMvbHgtd3JhcHBlci1lcnJvcnMuaHRtbCIsIndlYnBhY2s6Ly8vLi93cmFwcGVycy9seC13cmFwcGVyLWZsZXguaHRtbCIsIndlYnBhY2s6Ly8vLi93cmFwcGVycy9seC13cmFwcGVyLWlubGluZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0MsY0FBWTtBQUNYLGVBQVksQ0FBQztBQUNiLE9BQUksZUFBZSxHQUFHLElBQUksQ0FBQztBQUMzQixPQUFJLHlCQUF5QixHQUFHLElBQUksQ0FB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SCxxQkFBcUIsb0xBQW9MLHNDQUFzQyx3QkFBd0IscUJBQXFCLCtDQUErQyxVQUFVLCtFQUErRSxpQkFBaUIsb0M7Ozs7OztBQ0FsdkIsMEZBQXlGLFVBQVUsR0FBRywwQkFBMEIsbUlBQW1JLGtCQUFrQixnSUFBZ0ksZUFBZSx5Q0FBeUMscUNBQXFDLEdBQUcsOERBQThELGdFQUFnRSwrQkFBK0IsR0FBRyx3REFBd0QsdUQ7Ozs7OztBQ0E3c0Isa01BQWlNLE1BQU0sMENBQTBDLFlBQVksS0FBSyxVQUFVLCtFQUErRSxrQkFBa0Isb0I7Ozs7OztBQ0E3VywrSUFBOEksV0FBVyw2QkFBNkIsWUFBWSw2QkFBNkIsVUFBVSxHQUFHLDBCQUEwQix5TEFBeUwsWUFBWSwyQkFBMkIsV0FBVyxZQUFZLFdBQVcseUM7Ozs7OztBQ0F4Z0IsMkk7Ozs7OztBQ0FBLDZSQUE0UixRQUFRLFdBQVcsOENBQThDLHVIQUF1SCwrQkFBK0Isc0I7Ozs7OztBQ0FuZiw2RkFBNEYsK0g7Ozs7OztBQ0E1Rix1RkFBc0Ysb0JBQW9CLHVJQUF1SSxtQkFBbUIsaUIiLCJmaWxlIjoiZm9ybWx5THVteC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMzNlMWU0OTFjYzY5MGRlNTAzNjZcbiAqKi8iLCIoZnVuY3Rpb24gKCkge1xuICAndXNlIHN0cmljdCc7XG4gIHZhciBVU0lOR19URU1QTEFURVMgPSB0cnVlO1xuICB2YXIgVVNJTkdfVEVNUExBVEVfVkFMSURBVElPTiA9IHRydWU7XG4gIC8qIEN1c3RvbSB2YWxpZGF0aW9uIG1lc3NhZ2UgZGVmYXVsdHMgaGVyZSAqL1xuICB2YXIgVkFMSURBVElPTl9NRVNTQUdFUyA9IFt7XG4gICAgbmFtZTogJ3JlcXVpcmVkJywgbWVzc2FnZTogJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnXG4gIH0sIHtcbiAgICBuYW1lOiAnbWF4bGVuZ3RoJywgbWVzc2FnZTogJ1RoaXMgZmllbGQgaXMgdG9vIGxvbmcuJ1xuICB9LCB7XG4gICAgbmFtZTogJ21pbmxlbmd0aCcsIG1lc3NhZ2U6ICdUaGlzIGZpZWxkIGlzIHRvbyBzaG9ydC4nXG4gIH1dO1xuICAvKiBNb2R1bGUgVGVtcGxhdGVzICsgRGF0YSAqL1xuICB2YXIgTU9EVUxFX05BTUUgPSAnZm9ybWx5THVteCc7XG4gIHZhciBQUkVGSVggPSAnbHgnO1xuICB2YXIgRklFTERTID0gW3tcbiAgICBuYW1lOiAnY2hlY2tib3gnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpZWxkcy9seC1jaGVja2JveC5odG1sJylcbiAgfSwge1xuICAgIG5hbWU6ICdkYXRlLXBpY2tlcicsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LWRhdGUtcGlja2VyLmh0bWwnKVxuICB9LCB7XG4gICAgbmFtZTogJ2Ryb3Bkb3duJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtZHJvcGRvd24uaHRtbCcpXG4gIH0sIHtcbiAgICBuYW1lOiAnZmxleCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LWZsZXguaHRtbCcpXG4gIH0sIHtcbiAgICBuYW1lOiAnaW5wdXQnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpZWxkcy9seC1pbnB1dC5odG1sJylcbiAgfSwge1xuICAgIG5hbWU6ICdyYWRpbycsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LXJhZGlvLmh0bWwnKVxuICB9LCB7XG4gICAgbmFtZTogJ3NlbGVjdCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LXNlbGVjdC5odG1sJylcbiAgICAvL30sIHtcbiAgICAvL1x0bmFtZTogJ3NlbGVjdC1hc3luYycsXG4gICAgLy9cdHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpZWxkcy9seC1zZWxlY3QtYXN5bmMuaHRtbCcpXG4gIH0sIHtcbiAgICBuYW1lOiAnc3dpdGNoJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtc3dpdGNoLmh0bWwnKVxuICB9LCB7XG4gICAgbmFtZTogJ3RleHRhcmVhJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtdGV4dGFyZWEuaHRtbCcpXG4gIH1dO1xuICB2YXIgV1JBUFBFUlMgPSBbe1xuICAgIG5hbWU6ICd3cmFwcGVyLWRpdicsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vd3JhcHBlcnMvbHgtd3JhcHBlci1kaXYuaHRtbCcpXG4gIH0sIHtcbiAgICBuYW1lOiAnd3JhcHBlci1lcnJvcnMnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3dyYXBwZXJzL2x4LXdyYXBwZXItZXJyb3JzLmh0bWwnKVxuICB9LCB7XG4gICAgbmFtZTogJ3dyYXBwZXItZmxleCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vd3JhcHBlcnMvbHgtd3JhcHBlci1mbGV4Lmh0bWwnKVxuICB9LCB7XG4gICAgbmFtZTogJ3dyYXBwZXItaW5saW5lJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93cmFwcGVycy9seC13cmFwcGVyLWlubGluZS5odG1sJylcbiAgfV07XG5cbiAgZnVuY3Rpb24gX3ByZWZpeGVyKG5hbWUpIHtcbiAgICByZXR1cm4gUFJFRklYICsgJy0nICsgbmFtZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF93cmFwcGVyVGVtcGxhdGVVcmwobmFtZSkge1xuICAgIHJldHVybiAnd3JhcHBlcnMvZm9ybWx5LXdyYXBwZXJzLScgKyBfcHJlZml4ZXIobmFtZSkgKyAnLmh0bWwnO1xuICB9XG5cbiAgZnVuY3Rpb24gX2ZpZWxkVGVtcGxhdGVVcmwobmFtZSkge1xuICAgIHJldHVybiAnZmllbGRzL2Zvcm1seS1maWVsZHMtJyArIF9wcmVmaXhlcihuYW1lKSArICcuaHRtbCc7XG4gIH1cblxuICAvKkBuZ0luamVjdCovXG4gIGZ1bmN0aW9uIHNldFdyYXBwZXJzKGZvcm1seUNvbmZpZ1Byb3ZpZGVyKSB7XG4gICAgaWYgKFVTSU5HX1RFTVBMQVRFUykge1xuICAgICAgV1JBUFBFUlMubWFwKGZ1bmN0aW9uICh3cmFwcGVyKSB7XG4gICAgICAgIGZvcm1seUNvbmZpZ1Byb3ZpZGVyLnNldFdyYXBwZXIoe1xuICAgICAgICAgIG5hbWU6IF9wcmVmaXhlcih3cmFwcGVyLm5hbWUpLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiBfd3JhcHBlclRlbXBsYXRlVXJsKHdyYXBwZXIubmFtZSlcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBfcHJlZml4ZXIod3JhcHBlci5uYW1lKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZEZpZWxkVmFsaWRhdGlvbk9wdGlvbnMoYXBpQ2hlY2spIHsgIC8qIHZhbGlkYXRpb24gdXNpbmcgYXBpQ2hlY2suanMgKi9cbiAgICB2YXIgQVBJQ0hFQ0tfVkFMSURBVElPTl9GSUVMRFMgPSBbe1xuICAgICAgbmFtZTogJ2NoZWNrYm94JyxcbiAgICAgIGFwaUNoZWNrOiBmdW5jdGlvbihjaGVjaykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xuICAgICAgICAgICAgbGFiZWw6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgICBjaGVja2VkOiBjaGVjay5ib29sZWFuLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IGNoZWNrLmJvb2xlYW5cbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbmFtZTogJ2RhdGUtcGlja2VyJyxcbiAgICAgIGFwaUNoZWNrOiBmdW5jdGlvbihjaGVjaykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xuICAgICAgICAgICAgJ2xhYmVsJzogY2hlY2suc3RyaW5nLFxuICAgICAgICAgICAgJ3JlcXVpcmVkJzogY2hlY2suYm9vbGVhblxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBuYW1lOiAnaW5wdXQnLFxuICAgICAgYXBpQ2hlY2s6IGZ1bmN0aW9uKGNoZWNrKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XG4gICAgICAgICAgICBsYWJlbDogY2hlY2suc3RyaW5nLFxuICAgICAgICAgICAgaWNvbjogY2hlY2suc3RyaW5nLFxuICAgICAgICAgICAgZml4ZWRMYWJlbDogY2hlY2suYm9vbGVhbixcbiAgICAgICAgICAgIGRpc2FibGVkOiBjaGVjay5ib29sZWFuLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgICB0aGVtZTogY2hlY2sub25lT2YoWydsaWdodCcsICdkYXJrJ10pLFxuICAgICAgICAgICAgdHlwZTogY2hlY2sub25lT2YoWyd0ZXh0JywgJ251bWJlcicsICdlbWFpbCcsICdwYXNzd29yZCcsICd1cmwnLCAndGVsJ10pLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IGNoZWNrLmJvb2xlYW5cbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbmFtZTogJ3JhZGlvJyxcbiAgICAgIGFwaUNoZWNrOiBmdW5jdGlvbihjaGVjaykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XG4gICAgICAgIGxhYmVsOiBjaGVjay5zdHJpbmcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBjaGVjay5zdHJpbmcsXG4gICAgICAgIG9wdGlvbnM6IGNoZWNrLmFycmF5T2Yoe1xuICAgICAgICAgIG5hbWU6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICB2YWx1ZTogY2hlY2sub25lT2ZUeXBlKFtjaGVjay5zdHJpbmcsIGNoZWNrLm51bWJlcl0pLFxuICAgICAgICAgIGRpc2FibGVkOiBjaGVjay5ib29sZWFuXG4gICAgICAgIH0pLFxuICAgICAgICBpbmxpbmU6IGNoZWNrLmJvb2xlYW4sXG4gICAgICAgIHJlcXVpcmVkOiBjaGVjay5ib29sZWFuXG4gICAgICB9XG4gICAgfTtcbiAgfVxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdzZWxlY3QnLFxuICAgICAgYXBpQ2hlY2s6IGZ1bmN0aW9uKGNoZWNrKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XG4gICAgICAgICAgICBsYWJlbDogY2hlY2suc3RyaW5nLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICAgICdtaW4tbGVuZ3RoJzogY2hlY2subnVtYmVyLFxuICAgICAgICAgICAgJ2FsbG93LWNsZWFyJzogY2hlY2suYm9vbGVhbixcbiAgICAgICAgICAgICduZy1hdHRyLW11bHRpcGxlJzogY2hlY2suYm9vbGVhbixcbiAgICAgICAgICAgIHNlbGVjdGVkOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgICBzZWxlY3RlZDI6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICAgIGNob2ljZTogY2hlY2suc3RyaW5nLFxuICAgICAgICAgICAgY2hvaWNlMjogY2hlY2suc3RyaW5nLFxuICAgICAgICAgICAgY2hvaWNlczogY2hlY2suYXJyYXksXG4gICAgICAgICAgICByZXF1aXJlZDogY2hlY2suYm9vbGVhblxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBuYW1lOiAnc3dpdGNoJyxcbiAgICAgIGFwaUNoZWNrOiBmdW5jdGlvbihjaGVjaykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xuICAgICAgICAgICAgbGFiZWw6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgICBjaGVja2VkOiBjaGVjay5ib29sZWFuLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IGNoZWNrLmJvb2xlYW5cbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbmFtZTogJ3RleHRhcmVhJyxcbiAgICAgIGFwaUNoZWNrOiBmdW5jdGlvbihjaGVjaykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xuICAgICAgICAgICAgbGFiZWw6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICAgIGljb246IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICAgIHRoZW1lOiBjaGVjay5vbmVPZihbJ2xpZ2h0JywgJ2RhcmsnXSksXG4gICAgICAgICAgICByZXF1aXJlZDogY2hlY2suYm9vbGVhbixcbiAgICAgICAgICAgIHJvd3M6IGNoZWNrLm51bWJlcixcbiAgICAgICAgICAgIGNvbHM6IGNoZWNrLm51bWJlclxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XTtcbiAgICBBUElDSEVDS19WQUxJREFUSU9OX0ZJRUxEUy5tYXAoZnVuY3Rpb24gKHZhbGlkYXRpb25GaWVsZCkge1xuICAgICAgRklFTERTLm1hcChmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgICAgaWYgKGZpZWxkLm5hbWUgPT09IHZhbGlkYXRpb25GaWVsZC5uYW1lKSB7XG4gICAgICAgICAgZmllbGQudmFsaWRhdGVPcHRpb25zID0gdmFsaWRhdGlvbkZpZWxkLnZhbGlkYXRlT3B0aW9ucztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKkBuZ0luamVjdCovXG4gIGZ1bmN0aW9uIHNldEZpZWxkcyhmb3JtbHlDb25maWcsIGZvcm1seUFwaUNoZWNrKSB7XG4gICAgaWYgKFVTSU5HX1RFTVBMQVRFUykge1xuICAgICAgaWYgKFVTSU5HX1RFTVBMQVRFX1ZBTElEQVRJT04pIHsgICAgICAgIC8qIHZhbGlkYXRlIG9wdGlvbnMgdXNpbmcgYXBpQ2hlY2sgdG8gcmVkdWNlIGRldmVsb3BlciBlcnJvcnMgKi9cbiAgICAgICAgYWRkRmllbGRWYWxpZGF0aW9uT3B0aW9ucyhmb3JtbHlBcGlDaGVjayk7XG4gICAgICAgIEZJRUxEUy5tYXAoZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICAgICAgZm9ybWx5Q29uZmlnLnNldFR5cGUoe1xuICAgICAgICAgICAgbmFtZTogX3ByZWZpeGVyKGZpZWxkLm5hbWUpLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6IF9maWVsZFRlbXBsYXRlVXJsKGZpZWxkLm5hbWUpLFxuICAgICAgICAgICAgdmFsaWRhdGVPcHRpb25zOiBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICAgICAgICBvcHRpb25zLmRhdGEuYXBpQ2hlY2sgPSBmb3JtbHlBcGlDaGVjay53YXJuKGZvcm1seUFwaUNoZWNrLnNoYXBlKHt0ZW1wbGF0ZU9wdGlvbnM6IGZvcm1seUFwaUNoZWNrLnNoYXBlKGZpZWxkLnRlbXBsYXRlT3B0aW9ucyB8fCB7fSkub3B0aW9uYWx9KSwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgeyAgICAgICAgLyogc2tpcCB2YWxpZGF0aW5nIG9wdGlvbnMgKi9cbiAgICAgICAgLy9hcGlDaGVjay5kaXNhYmxlKCk7XG4gICAgICAgIEZJRUxEUy5tYXAoZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICAgICAgZm9ybWx5Q29uZmlnLnNldFR5cGUoe25hbWU6IF9wcmVmaXhlcihmaWVsZC5uYW1lKSwgdGVtcGxhdGVVcmw6IF9maWVsZFRlbXBsYXRlVXJsKGZpZWxkLm5hbWUpfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldERlZmF1bHRzKGZvcm1seUNvbmZpZywgZm9ybWx5VmFsaWRhdGlvbk1lc3NhZ2VzKSB7XG4gICAgZm9ybWx5Q29uZmlnLmV4dHJhcy5uZ01vZGVsQXR0cnNNYW5pcHVsYXRvclByZWZlckJvdW5kID0gdHJ1ZTtcbiAgICBWQUxJREFUSU9OX01FU1NBR0VTLm1hcChmdW5jdGlvbiAodmFsaWRhdGlvbikge1xuICAgICAgZm9ybWx5VmFsaWRhdGlvbk1lc3NhZ2VzLmFkZFN0cmluZ01lc3NhZ2UodmFsaWRhdGlvbi5uYW1lLCB2YWxpZGF0aW9uLm1lc3NhZ2UpO1xuICAgIH0pO1xuICAgIGZvcm1seVZhbGlkYXRpb25NZXNzYWdlcy5tZXNzYWdlcy5wYXR0ZXJuID0gZnVuY3Rpb24gKHZpZXdWYWx1ZSwgbW9kZWxWYWx1ZSkge1xuICAgICAgcmV0dXJuICh2aWV3VmFsdWUgfHwgbW9kZWxWYWx1ZSkgKyAnIGlzIGludmFsaWQnO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBjYWNoZVRlbXBsYXRlcygkdGVtcGxhdGVDYWNoZSkge1xuICAgIGlmIChVU0lOR19URU1QTEFURVMpIHtcbiAgICAgIEZJRUxEUy5tYXAoZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICAgICR0ZW1wbGF0ZUNhY2hlLnB1dChfZmllbGRUZW1wbGF0ZVVybChmaWVsZC5uYW1lKSwgZmllbGQudGVtcGxhdGUpO1xuICAgICAgfSk7XG4gICAgICBXUkFQUEVSUy5tYXAoZnVuY3Rpb24gKHdyYXBwZXIpIHtcbiAgICAgICAgJHRlbXBsYXRlQ2FjaGUucHV0KF93cmFwcGVyVGVtcGxhdGVVcmwod3JhcHBlci5uYW1lKSwgd3JhcHBlci50ZW1wbGF0ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBhbmd1bGFyLm1vZHVsZShNT0RVTEVfTkFNRSwgW1xuICAgICdmb3JtbHknXG4gIF0pLmNvbmZpZyhzZXRXcmFwcGVycykucnVuKHNldEZpZWxkcykucnVuKHNldERlZmF1bHRzKS5ydW4oY2FjaGVUZW1wbGF0ZXMpO1xufSgpKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL34vanNoaW50LWxvYWRlciEuL2luZGV4LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNoZWNrYm94XFxcIj5cXG5cXHQ8aW5wdXQgbmctbW9kZWw9XFxcIm1vZGVsW29wdGlvbnMua2V5XVxcXCJcXG5cXHQgICAgICAgdHlwZT1cXFwiY2hlY2tib3hcXFwiXFxuXFx0ICAgICAgIHJvbGU9XFxcImNoZWNrYm94XFxcIlxcblxcdCAgICAgICBjbGFzcz1cXFwiY2hlY2tib3hfX2lucHV0XFxcIj5cXG5cXHQ8bGFiZWwgZm9yPXt7OjppZH19IGNsYXNzPVxcXCJjaGVja2JveF9fbGFiZWxcXFwiIGFyaWEtbGFiZWw9XFxcInt7Ojp0by5sYWJlbH19XFxcIj57e3RvLmxhYmVsfX08L2xhYmVsPlxcblxcdDxzcGFuIG5nLWlmPVxcXCI6OnRvLmRlc2NyaXB0aW9uXFxcIlxcblxcdCAgICAgIGNsYXNzPVxcXCJjaGVja2JveF9faGVscFxcXCI+e3s6OnRvLmRlc2NyaXB0aW9ufX08L3NwYW4+XFxuPC9kaXY+XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vZmllbGRzL2x4LWNoZWNrYm94Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGx4LWRhdGUtcGlja2VyIG1vZGVsPVxcXCJtb2RlbFtvcHRpb25zLmtleV1cXFwiXFxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XFxcInt7Ojp0by5sYWJlbH19XFxcIlxcbiAgICAgICAgICAgICAgICBsYWJlbD1cXFwie3s6OnRvLmxhYmVsfX0ge3s6OnRvLnJlcXVpcmVkID8gJyonIDogJyd9fVxcXCI+XFxuPC9seC1kYXRlLXBpY2tlcj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9maWVsZHMvbHgtZGF0ZS1waWNrZXIuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8bHgtZHJvcGRvd24+XFxuXFx0PGJ1dHRvbiBjbGFzcz1cXFwiYnRuXFxcIiBuZy1jbGFzcz1cXFwiOjp0by5jbGFzc05hbWUgfHwgJ2J0bi0tbSBidG4tLWJsYWNrIGJ0bi0tZmxhdCdcXFwiIGx4LXJpcHBsZSBseC1kcm9wZG93bi10b2dnbGUgYXJpYS1sYWJlbD1cXFwie3s6OnRvLmxhYmVsfX1cXFwiPlxcblxcdFxcdDxpIG5nLWlmPVxcXCI6OnRvLmljb25cXFwiIGNsYXNzPVxcXCJtZGkgbWRpLWRvdHMtdmVydGljYWxcXFwiPjwvaT5cXG5cXHRcXHR7e3RvLmxhYmVsfX1cXG5cXHQ8L2J1dHRvbj5cXG5cXHQ8bHgtZHJvcGRvd24tbWVudT5cXG5cXHRcXHQ8dWw+XFxuXFx0XFx0XFx0PGxpIG5nLXJlcGVhdD1cXFwibyBpbiA6OnRvLm9wdGlvbnNcXFwiPlxcblxcdFxcdFxcdFxcdDxhIGNsYXNzPVxcXCJkcm9wZG93bi1saW5rXFxcIiBuZy1jbGljaz1cXFwiby5hY3Rpb24oKVxcXCI+e3s6Om8udGV4dH19PC9hPlxcblxcdFxcdFxcdDwvbGk+XFxuXFx0XFx0PC91bD5cXG5cXHQ8L2x4LWRyb3Bkb3duLW1lbnU+XFxuPC9seC1kcm9wZG93bj5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9maWVsZHMvbHgtZHJvcGRvd24uaHRtbFxuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJhZnRsLWZsZXgtZmllbGRzXFxcIlxcbiAgICAgbW9kZWw9XFxcIiRwYXJlbnQubW9kZWxcXFwiXFxuICAgICBmbGV4LWNvbnRhaW5lcj1cXFwie3s6OnRvLmZsZXguY29udGFpbmVyIHx8ICdyb3cnfX1cXFwiXFxuICAgICBmbGV4LWFsaWduPVxcXCJ7ezo6dG8uZmxleC5hbGlnbiB8fCAnc3BhY2UtYmV0d2Vlbid9fVxcXCJcXG4gICAgIGZsZXgtZ3V0dGVyPVxcXCJ7ezo6dG8uZmxleC5ndXR0ZXIgfHwgJzI0J319XFxcIj5cXG5cXHQ8ZGl2IGZvcm1seS1maWVsZFxcblxcdCAgICAgbmctcmVwZWF0PVxcXCJmaWVsZCBpbiB0by5maWVsZHMgdHJhY2sgYnkgJGluZGV4XFxcIlxcblxcdCAgICAgbmctaWY9XFxcIiFmaWVsZC5oaWRlXFxcIlxcblxcdCAgICAgY2xhc3M9XFxcImZvcm1seS1maWVsZCB7ezo6ZmllbGQudHlwZSA/ICdmb3JtbHktZmllbGQtJyArIGZpZWxkLnR5cGUgOiAnJ319XFxcIlxcblxcdCAgICAgbmctc3R5bGU9XFxcIjo6dG8uZmxleC5zdHlsZVxcXCJcXG5cXHQgICAgIG9wdGlvbnM9XFxcImZpZWxkXFxcIlxcblxcdCAgICAgbW9kZWw9XFxcImZpZWxkLm1vZGVsIHx8IG1vZGVsXFxcIlxcblxcdCAgICAgZmllbGRzPVxcXCJmaWVsZHNcXFwiXFxuXFx0ICAgICBmb3JtPVxcXCJmb3JtXFxcIlxcblxcdCAgICAgZm9ybS1pZD1cXFwiZm9ybUlkXFxcIlxcblxcdCAgICAgZm9ybS1zdGF0ZT1cXFwib3B0aW9ucy5mb3JtU3RhdGVcXFwiXFxuXFx0ICAgICBpbmRleD1cXFwiJGluZGV4XFxcIlxcblxcdCAgICAgZmxleC1pdGVtPVxcXCJ7ezo6dG8uZmxleC5pdGVtIHx8ICcxJ319XFxcIlxcblxcdCAgICAgZmxleC1vcmRlcj1cXFwie3s6OnRvLmZsZXgub3JkZXJ9fVxcXCI+XFxuXFx0PC9kaXY+XFxuPC9kaXY+XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vZmllbGRzL2x4LWZsZXguaHRtbFxuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8bHgtdGV4dC1maWVsZCBkYXRhLW1vZGVsPVxcXCI6Om1vZGVsW29wdGlvbnMua2V5XVxcXCJcXG4gICAgICAgICAgICAgICBpY29uPVxcXCJ7ezo6dG8uaWNvbn19XFxcIlxcbiAgICAgICAgICAgICAgIGZpeGVkLWxhYmVsPVxcXCI6OnRvLmZpeGVkTGFiZWxcXFwiXFxuICAgICAgICAgICAgICAgdGhlbWU9XFxcInt7Ojp0by50aGVtZX19XFxcIlxcbiAgICAgICAgICAgICAgIGRpc2FibGVkPVxcXCJ0by5kaXNhYmxlZFxcXCJcXG4gICAgICAgICAgICAgICBsYWJlbD1cXFwie3t0by5sYWJlbH19IHt7Ojp0by5yZXF1aXJlZCA/ICcqJyA6ICcnfX1cXFwiXFxuICAgICAgICAgICAgICAgdmFsaWQ9XFxcImZjLiR2YWxpZCAmJiBmYy4kdG91Y2hlZFxcXCJcXG4gICAgICAgICAgICAgICBlcnJvcj1cXFwiZmMuJGludmFsaWQgJiYgZmMuJHRvdWNoZWRcXFwiPlxcblxcdDxpbnB1dCBuZy1tb2RlbD1cXFwibW9kZWxbb3B0aW9ucy5rZXldXFxcIlxcblxcdCAgICAgICB0eXBlPVxcXCJ7ezo6dG8udHlwZX19XFxcIlxcblxcdCAgICAgICBhcmlhLWxhYmVsPVxcXCJ7ezo6dG8ubGFiZWx9fVxcXCJcXG5cXHQgICAgICAgbmctY2xhc3M9XFxcIjo6dG8uY2xhc3NOYW1lXFxcIi8+XFxuPC9seC10ZXh0LWZpZWxkPlwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2ZpZWxkcy9seC1pbnB1dC5odG1sXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInJhZGlvLWdyb3VwXFxcIj5cXG5cXHQ8aDMgbmctaWY9XFxcIjo6dG8ubGFiZWxcXFwiPjxsYWJlbD57ezo6dG8ubGFiZWx9fTwvbGFiZWw+PC9oMz5cXG5cXG5cXHQ8ZGl2IGNsYXNzPVxcXCJyYWRpby1idXR0b25cXFwiXFxuXFx0ICAgICBuZy1jbGFzcz1cXFwieydyYWRpby1idXR0b25fX2lubGluZSc6IHRvLmlubGluZX1cXFwiXFxuXFx0ICAgICBuZy1yZXBlYXQ9XFxcIm8gaW4gdG8ub3B0aW9uc1xcXCI+XFxuXFx0XFx0PGlucHV0IG5nLW1vZGVsPVxcXCIkcGFyZW50Lm1vZGVsWyRwYXJlbnQub3B0aW9ucy5rZXldXFxcIlxcblxcdFxcdCAgICAgICBpZD1cXFwie3s6OmlkICsgJ18nICsgJGluZGV4fX1cXFwiXFxuXFx0XFx0ICAgICAgIHR5cGU9XFxcInJhZGlvXFxcIlxcblxcdFxcdCAgICAgICBuZy1kaXNhYmxlZD1cXFwiOjpvLmRpc2FibGVkXFxcIlxcblxcdFxcdCAgICAgICBjbGFzcz1cXFwicmFkaW8tYnV0dG9uX19pbnB1dFxcXCJcXG5cXHRcXHQgICAgICAgbmctdmFsdWU9XFxcIjo6by52YWx1ZVxcXCJcXG5cXHRcXHQgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVxcXCJ7ezo6aWQgKyAnXycgKyAkaW5kZXggKyAnX3JhZGlvQnV0dG9uJ319XFxcIj5cXG5cXHRcXHQ8bGFiZWwgZm9yPVxcXCJ7ezo6aWQgKyAnXycgKyAkaW5kZXh9fVxcXCJcXG5cXHRcXHQgICAgICAgY2xhc3M9XFxcInJhZGlvLWJ1dHRvbl9fbGFiZWxcXFwiPnt7OjpvLm5hbWV9fTwvbGFiZWw+XFxuICAgICAgPHNwYW4gbmctaWY9XFxcIjo6by5kZXNjcmlwdGlvblxcXCIgY2xhc3M9XFxcInJhZGlvLWJ1dHRvbl9faGVscFxcXCI+e3s6Om8uZGVzY3JpcHRpb259fVxcbiAgICAgIDwvc3Bhbj5cXG5cXHQ8L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9maWVsZHMvbHgtcmFkaW8uaHRtbFxuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJhZnRsLXNlbGVjdFxcXCI+XFxuXFx0PGgzIG5nLWlmPVxcXCI6OnRvLmxhYmVsXFxcIj48bGFiZWw+XFxuXFx0XFx0e3t0by5sYWJlbH19IHt7Ojp0by5yZXF1aXJlZCA/ICcqJyA6ICcnfX1cXG5cXHQ8L2xhYmVsPjwvaDM+XFxuXFx0PGx4LXNlbGVjdCBuZy1tb2RlbD1cXFwibW9kZWxbb3B0aW9ucy5rZXldXFxcIlxcblxcdCAgICAgICAgICAgY2hvaWNlcz1cXFwidG8ub3B0aW9uc1xcXCJcXG5cXHQgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJ7ezo6dG8ucGxhY2Vob2xkZXJ9fVxcXCJcXG5cXHQgICAgICAgICAgIG1pbi1sZW5ndGg9XFxcIjo6dG8ubWluTGVuZ3RoXFxcIlxcblxcdCAgICAgICAgICAgYWxsb3ctY2xlYXI9XFxcIjo6dG8uYWxsb3dDbGVhclxcXCJcXG5cXHQgICAgICAgICAgIG5nLWF0dHItbXVsdGlwbGU9XFxcInt7Ojp0by5tdWx0aXBsZX19XFxcIj5cXG5cXG5cXHRcXHQ8bHgtc2VsZWN0LXNlbGVjdGVkPlxcblxcdFxcdFxcdHt7JHNlbGVjdGVkW3RvLnNlbGVjdGVkXSB8fCAkc2VsZWN0ZWR9fSB7ezo6dG8uc2VsZWN0ZWQyID8gJyAtICcgK1xcblxcdFxcdFxcdCRzZWxlY3RlZFt0by5zZWxlY3RlZDJdIDogJyd9fVxcblxcdFxcdDwvbHgtc2VsZWN0LXNlbGVjdGVkPlxcblxcblxcdFxcdDxseC1zZWxlY3QtY2hvaWNlcz5cXG5cXHRcXHRcXHR7eyRjaG9pY2VbdG8uY2hvaWNlXSB8fCAkY2hvaWNlfX0ge3s6OnRvLmNob2ljZTIgPyAnIC0gJyArXFxuXFx0XFx0XFx0JGNob2ljZVt0by5jaG9pY2UyXSA6ICcnfX1cXG5cXHRcXHQ8L2x4LXNlbGVjdC1jaG9pY2VzPlxcblxcblxcdDwvbHgtc2VsZWN0PlxcbjwvZGl2PlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2ZpZWxkcy9seC1zZWxlY3QuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJzd2l0Y2hcXFwiPlxcblxcdDxpbnB1dCBuZy1tb2RlbD1cXFwibW9kZWxbb3B0aW9ucy5rZXldXFxcIlxcblxcdCAgICAgICB0eXBlPVxcXCJjaGVja2JveFxcXCJcXG5cXHQgICAgICAgcm9sZT1cXFwiY2hlY2tib3hcXFwiXFxuXFx0ICAgICAgIGNsYXNzPVxcXCJzd2l0Y2hfX2lucHV0XFxcIi8+XFxuXFx0PGxhYmVsIGZvcj1cXFwie3s6OmlkfX1cXFwiIGNsYXNzPVxcXCJzd2l0Y2hfX2xhYmVsXFxcIiBhcmlhLWxhYmVsPVxcXCJ7ezo6dG8ubGFiZWx9fVxcXCI+e3t0by5sYWJlbH19PC9sYWJlbD5cXG5cXHQ8c3BhbiBuZy1pZj1cXFwiOjp0by5kZXNjcmlwdGlvblxcXCJcXG5cXHQgICAgICBjbGFzcz1cXFwic3dpdGNoX19oZWxwXFxcIj57ezo6dG8uZGVzY3JpcHRpb259fTwvc3Bhbj5cXG48L2Rpdj5cXG5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9maWVsZHMvbHgtc3dpdGNoLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGx4LXRleHQtZmllbGQgZGF0YS1tb2RlbD1cXFwiOjptb2RlbFtvcHRpb25zLmtleV1cXFwiXFxuICAgICAgICAgICAgICAgZml4ZWQtbGFiZWw9XFxcIjo6dG8uZml4ZWRMYWJlbFxcXCJcXG4gICAgICAgICAgICAgICBpY29uPVxcXCJ7ezo6dG8uaWNvbn19XFxcIlxcbiAgICAgICAgICAgICAgIHRoZW1lPVxcXCJ7ezo6dG8udGhlbWV9fVxcXCJcXG4gICAgICAgICAgICAgICBsYWJlbD1cXFwie3t0by5sYWJlbH19IHt7Ojp0by5yZXF1aXJlZCA/ICcqJyA6ICcnfX1cXFwiXFxuICAgICAgICAgICAgICAgdmFsaWQ9XFxcImZjLiR2YWxpZCAmJiBmYy4kdG91Y2hlZFxcXCJcXG4gICAgICAgICAgICAgICBlcnJvcj1cXFwiZmMuJGludmFsaWQgJiYgZmMuJHRvdWNoZWRcXFwiPlxcbiAgICA8dGV4dGFyZWEgbmctbW9kZWw9XFxcIm1vZGVsW29wdGlvbnMua2V5XVxcXCJcXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XFxcInt7Ojp0by5sYWJlbH19XFxcIlxcbiAgICAgICAgICAgICAgcm93cz1cXFwie3s6OnRvLnJvd3N9fVxcXCIgY29scz1cXFwie3s6OnRvLmNvbHN9fVxcXCI+XFxuICAgIDwvdGV4dGFyZWE+XFxuPC9seC10ZXh0LWZpZWxkPlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2ZpZWxkcy9seC10ZXh0YXJlYS5odG1sXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgbmctY2xhc3M9XFxcIjo6dG8uZGl2LmNsYXNzTmFtZVxcXCJcXG5cXHRuZy1zdHlsZT1cXFwiOjp0by5kaXYuc3R5bGVcXFwiPlxcblxcdDxmb3JtbHktdHJhbnNjbHVkZT48L2Zvcm1seS10cmFuc2NsdWRlPlxcbjwvZGl2PlwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3dyYXBwZXJzL2x4LXdyYXBwZXItZGl2Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+XFxuXFx0PGZvcm1seS10cmFuc2NsdWRlPjwvZm9ybWx5LXRyYW5zY2x1ZGU+XFxuXFx0PHVsIGNsYXNzPVxcXCJmb3JtLWVycm9yXFxcIiBuZy1tZXNzYWdlcz1cXFwiZmMuJGVycm9yXFxcIlxcblxcdCAgICBuZy1zaG93PVxcXCJvcHRpb25zLnZhbGlkYXRpb24uZXJyb3JFeGlzdHNBbmRTaG91bGRCZVZpc2libGVcXFwiPlxcblxcdFxcdDxsaSBuZy1yZXBlYXQ9XFxcIihuYW1lLCBtZXNzYWdlKSBpbiA6Om9wdGlvbnMudmFsaWRhdGlvbi5tZXNzYWdlc1xcXCJcXG5cXHRcXHQgICAgbmctbWVzc2FnZT17ezo6bmFtZX19PlxcblxcdFxcdFxcdHt7bWVzc2FnZShmYy4kdmlld1ZhbHVlLCBmYy4kbW9kZWxWYWx1ZSwgdGhpcyl9fVxcblxcdFxcdDwvbGk+XFxuXFx0PC91bD5cXG5cXHQ8c3BhbiBjbGFzcz1cXFwiZm9ybS1wZW5kaW5nXFxcIlxcblxcdCAgICAgIG5nLWlmPVxcXCJ0by5wZW5kaW5nICYmIGZjLiRwZW5kaW5nICYmIGZjLiR0b3VjaGVkXFxcIj5cXG5cXHR7ezo6dG8ucGVuZGluZyB8fCAnQ2hlY2tpbmcuLi4nfX1cXG5cXHQ8L3NwYW4+XFxuPC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vd3JhcHBlcnMvbHgtd3JhcHBlci1lcnJvcnMuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBuZy1jbGFzcz1cXFwiOjp0by5kaXYuY2xhc3NOYW1lXFxcIlxcbiAgICAgbmctc3R5bGU9XFxcIjo6dG8uZGl2LnN0eWxlIHx8IHt9XFxcIlxcbiAgICAgZmxleC1pdGVtPVxcXCI6OnRvLmZsZXguaXRlbVxcXCJcXG4gICAgIGZsZXgtb3JkZXI9XFxcIjo6dG8uZmxleC1vcmRlclxcXCI+XFxuXFx0PGZvcm1seS10cmFuc2NsdWRlPjwvZm9ybWx5LXRyYW5zY2x1ZGU+XFxuPC9kaXY+XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vd3JhcHBlcnMvbHgtd3JhcHBlci1mbGV4Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzcGFuIGNsYXNzPVxcXCJpbmxpbmUtd3JhcHBlclxcXCI+XFxuXFx0PHNwYW4gY2xhc3M9XFxcImlubGluZS0tYmVmb3JlXFxcIj57ezo6dG8uaW5saW5lLmJlZm9yZX19PC9zcGFuPlxcblxcdDxzcGFuIGNsYXNzPVxcXCJpbmxpbmUtLWNvbnRlbnRcXFwiPlxcblxcdFxcdDxmb3JtbHktdHJhbnNjbHVkZT48L2Zvcm1seS10cmFuc2NsdWRlPlxcblxcdDwvc3Bhbj5cXG5cXHQ8c3BhbiBjbGFzcz1cXFwiaW5saW5lLS1hZnRlclxcXCI+e3s6OnRvLmlubGluZS5hZnRlcn19PC9zcGFuPlxcbjwvc3Bhbj5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi93cmFwcGVycy9seC13cmFwcGVyLWlubGluZS5odG1sXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=