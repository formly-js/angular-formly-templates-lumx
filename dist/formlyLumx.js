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
	    template: __webpack_require__(1),
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
	    template: __webpack_require__(2),
	    apiCheck: function apiCheck(check) {
	      return {
	        templateOptions: {
	          'label': check.string,
	          'required': check.boolean
	        }
	      };
	    }
	    //}, {
	    //  name: 'dropdown',
	    //  template: require('./fields/lx-dropdown.html')
	  }, {
	    name: 'flex',
	    template: __webpack_require__(3),
	    apiCheck: function apiCheck(check) {
	      return {
	        templateOptions: {}
	      };
	    }
	  }, {
	    name: 'input',
	    template: __webpack_require__(4),
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
	    template: __webpack_require__(5),
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
	    template: __webpack_require__(6),
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
	    //}, {
	    //	name: 'select-async',
	    //	template: require('./fields/lx-select-async.html')
	  }, {
	    name: 'switch',
	    template: __webpack_require__(7),
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
	    template: __webpack_require__(8),
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
	  var WRAPPERS = [{
	    name: 'wrapper-div',
	    template: __webpack_require__(9)
	  }, {
	    name: 'wrapper-errors',
	    template: __webpack_require__(10)
	  }, {
	    name: 'wrapper-flex',
	    template: __webpack_require__(11)
	  }, {
	    name: 'wrapper-inline',
	    template: __webpack_require__(12)
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
	
	  /*@ngInject*/
	  function setFields(formlyConfig, formlyApiCheck) {
	    var c = formlyApiCheck;
	    if (USING_TEMPLATES) {
	      FIELDS.map(function (field) {
	        formlyConfig.setType({
	          name: _prefixer(field.name),
	          templateUrl: _fieldTemplateUrl(field.name)
						//,
	          //apiCheck: function (c) {
	          //  return field.apiCheck(c);
	          //}
	        });
	      });
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
/***/ function(module, exports) {

	module.exports = "<div class=\"checkbox\">\n\t<input ng-model=\"model[options.key]\"\n\t       type=\"checkbox\"\n\t       role=\"checkbox\"\n\t       class=\"checkbox__input\">\n\t<label for={{::id}} class=\"checkbox__label\" aria-label=\"{{::to.label}}\">{{to.label}}</label>\n\t<span ng-if=\"::to.description\"\n\t      class=\"checkbox__help\">{{::to.description}}</span>\n</div>"

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = "<lx-date-picker model=\"model[options.key]\"\n                aria-label=\"{{::to.label}}\"\n                label=\"{{::to.label}} {{::to.required ? '*' : ''}}\">\n</lx-date-picker>\n"

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<div class=\"aftl-flex-fields\"\n     model=\"$parent.model\"\n     flex-container=\"{{::to.flex.container || 'row'}}\"\n     flex-align=\"{{::to.flex.align || 'space-between'}}\"\n     flex-gutter=\"{{::to.flex.gutter || '24'}}\">\n\t<div formly-field\n\t     ng-repeat=\"field in to.fields track by $index\"\n\t     ng-if=\"!field.hide\"\n\t     class=\"formly-field {{::field.type ? 'formly-field-' + field.type : ''}}\"\n\t     ng-style=\"::to.flex.style\"\n\t     options=\"field\"\n\t     model=\"field.model || model\"\n\t     fields=\"fields\"\n\t     form=\"form\"\n\t     form-id=\"formId\"\n\t     form-state=\"options.formState\"\n\t     index=\"$index\"\n\t     flex-item=\"{{::to.flex.item || '1'}}\"\n\t     flex-order=\"{{::to.flex.order}}\">\n\t</div>\n</div>"

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = "<lx-text-field data-model=\"::model[options.key]\"\n               icon=\"{{::to.icon}}\"\n               fixed-label=\"::to.fixedLabel\"\n               theme=\"{{::to.theme}}\"\n               disabled=\"to.disabled\"\n               label=\"{{to.label}} {{::to.required ? '*' : ''}}\"\n               valid=\"fc.$valid && fc.$touched\"\n               error=\"fc.$invalid && fc.$touched\">\n\t<input ng-model=\"model[options.key]\"\n\t       type=\"{{::to.type}}\"\n\t       aria-label=\"{{::to.label}}\"\n\t       ng-class=\"::to.className\"/>\n</lx-text-field>"

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "<div class=\"radio-group\">\n\t<h3 ng-if=\"::to.label\"><label>{{::to.label}}</label></h3>\n\n\t<div class=\"radio-button\"\n\t     ng-class=\"{'radio-button__inline': to.inline}\"\n\t     ng-repeat=\"o in to.options\">\n\t\t<input ng-model=\"$parent.model[$parent.options.key]\"\n\t\t       id=\"{{::id + '_' + $index}}\"\n\t\t       type=\"radio\"\n\t\t       ng-disabled=\"::o.disabled\"\n\t\t       class=\"radio-button__input\"\n\t\t       ng-value=\"::o.value\"\n\t\t       aria-labelledby=\"{{::id + '_' + $index + '_radioButton'}}\">\n\t\t<label for=\"{{::id + '_' + $index}}\"\n\t\t       class=\"radio-button__label\">{{::o.name}}</label>\n      <span ng-if=\"::o.description\" class=\"radio-button__help\">{{::o.description}}\n      </span>\n\t</div>\n</div>\n"

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "<div class=\"aftl-select\">\n\t<h3 ng-if=\"::to.label\"><label>\n\t\t{{to.label}} {{::to.required ? '*' : ''}}\n\t</label></h3>\n\t<lx-select ng-model=\"model[options.key]\"\n\t           choices=\"to.options\"\n\t           placeholder=\"{{::to.placeholder}}\"\n\t           min-length=\"::to.minLength\"\n\t           allow-clear=\"::to.allowClear\"\n\t           ng-attr-multiple=\"{{::to.multiple}}\">\n\n\t\t<lx-select-selected>\n\t\t\t{{$selected[to.selected] || $selected}} {{::to.selected2 ? ' - ' +\n\t\t\t$selected[to.selected2] : ''}}\n\t\t</lx-select-selected>\n\n\t\t<lx-select-choices>\n\t\t\t{{$choice[to.choice] || $choice}} {{::to.choice2 ? ' - ' +\n\t\t\t$choice[to.choice2] : ''}}\n\t\t</lx-select-choices>\n\n\t</lx-select>\n</div>\n"

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "<div class=\"switch\">\n\t<input ng-model=\"model[options.key]\"\n\t       type=\"checkbox\"\n\t       role=\"checkbox\"\n\t       class=\"switch__input\"/>\n\t<label for=\"{{::id}}\" class=\"switch__label\" aria-label=\"{{::to.label}}\">{{to.label}}</label>\n\t<span ng-if=\"::to.description\"\n\t      class=\"switch__help\">{{::to.description}}</span>\n</div>\n\n"

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<lx-text-field data-model=\"::model[options.key]\"\n               fixed-label=\"::to.fixedLabel\"\n               icon=\"{{::to.icon}}\"\n               theme=\"{{::to.theme}}\"\n               label=\"{{to.label}} {{::to.required ? '*' : ''}}\"\n               valid=\"fc.$valid && fc.$touched\"\n               error=\"fc.$invalid && fc.$touched\">\n    <textarea ng-model=\"model[options.key]\"\n              aria-label=\"{{::to.label}}\"\n              rows=\"{{::to.rows}}\" cols=\"{{::to.cols}}\">\n    </textarea>\n</lx-text-field>\n"

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<div ng-class=\"::to.div.className\"\n\tng-style=\"::to.div.style\">\n\t<formly-transclude></formly-transclude>\n</div>"

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<div>\n\t<formly-transclude></formly-transclude>\n\t<ul class=\"form-error\" ng-messages=\"fc.$error\"\n\t    ng-show=\"options.validation.errorExistsAndShouldBeVisible\">\n\t\t<li ng-repeat=\"(name, message) in ::options.validation.messages\"\n\t\t    ng-message={{::name}}>\n\t\t\t{{message(fc.$viewValue, fc.$modelValue, this)}}\n\t\t</li>\n\t</ul>\n\t<span class=\"form-pending\"\n\t      ng-if=\"to.pending && fc.$pending && fc.$touched\">\n\t{{::to.pending || 'Checking...'}}\n\t</span>\n</div>\n"

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "<div ng-class=\"::to.div.className\"\n     ng-style=\"::to.div.style || {}\"\n     flex-item=\"::to.flex.item\"\n     flex-order=\"::to.flex-order\">\n\t<formly-transclude></formly-transclude>\n</div>"

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "<span class=\"inline-wrapper\">\n\t<span class=\"inline--before\">{{::to.inline.before}}</span>\n\t<span class=\"inline--content\">\n\t\t<formly-transclude></formly-transclude>\n\t</span>\n\t<span class=\"inline--after\">{{::to.inline.after}}</span>\n</span>"

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjRjM2I2MDg2YjFmNWEzMzEzMjciLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanM/MzA5MCIsIndlYnBhY2s6Ly8vLi9maWVsZHMvbHgtY2hlY2tib3guaHRtbCIsIndlYnBhY2s6Ly8vLi9maWVsZHMvbHgtZGF0ZS1waWNrZXIuaHRtbCIsIndlYnBhY2s6Ly8vLi9maWVsZHMvbHgtZmxleC5odG1sIiwid2VicGFjazovLy8uL2ZpZWxkcy9seC1pbnB1dC5odG1sIiwid2VicGFjazovLy8uL2ZpZWxkcy9seC1yYWRpby5odG1sIiwid2VicGFjazovLy8uL2ZpZWxkcy9seC1zZWxlY3QuaHRtbCIsIndlYnBhY2s6Ly8vLi9maWVsZHMvbHgtc3dpdGNoLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vZmllbGRzL2x4LXRleHRhcmVhLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vd3JhcHBlcnMvbHgtd3JhcHBlci1kaXYuaHRtbCIsIndlYnBhY2s6Ly8vLi93cmFwcGVycy9seC13cmFwcGVyLWVycm9ycy5odG1sIiwid2VicGFjazovLy8uL3dyYXBwZXJzL2x4LXdyYXBwZXItZmxleC5odG1sIiwid2VicGFjazovLy8uL3dyYXBwZXJzL2x4LXdyYXBwZXItaW5saW5lLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0E7O0FDQUEsRUFBQyxZQUFZO0dBQ1g7R0FDQSxJQUFJLGtCQUFrQjs7R0FFdEIsSUFBSSxzQkFBc0IsQ0FBQztLQUN6QixNQUFNLFlBQVksU0FBUztNQUMxQjtLQUNE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SUFBK0ksa0RBQWtELDRRQUE0USx1QkFBdUIsMEJBQTBCLGlCQUFpQixzQjs7Ozs7O0FDQXJ3QiwrRkFBOEYsV0FBVyw2RUFBNkUsWUFBWSxzRUFBc0UsVUFBVSxHQUFHLDBCQUEwQix5S0FBeUssV0FBVyw0QkFBNEIsWUFBWSw2RDs7Ozs7O0FDQTNnQixvRkFBbUYsWUFBWSxtRUFBbUUsa0NBQWtDLHlIQUF5SCxxQkFBcUIsb0xBQW9MLHNDQUFzQyx3QkFBd0IscUJBQXFCLCtDQUErQyxVQUFVLCtFQUErRSxpQkFBaUIsb0M7Ozs7OztBQ0FsdkIsMEZBQXlGLFVBQVUsR0FBRywwQkFBMEIsbUlBQW1JLGtCQUFrQixnSUFBZ0ksZUFBZSx5Q0FBeUMscUNBQXFDLEdBQUcsOERBQThELGdFQUFnRSwrQkFBK0IsR0FBRyx3REFBd0QsdUQ7Ozs7OztBQ0E3c0Isa01BQWlNLE1BQU0sMENBQTBDLFlBQVksS0FBSyxVQUFVLCtFQUErRSxrQkFBa0Isb0I7Ozs7OztBQ0E3VywrSUFBOEksV0FBVyw2QkFBNkIsWUFBWSw2QkFBNkIsVUFBVSxHQUFHLDBCQUEwQix5TEFBeUwsWUFBWSwyQkFBMkIsV0FBVyxZQUFZLFdBQVcseUM7Ozs7OztBQ0F4Z0IsMkk7Ozs7OztBQ0FBLDZSQUE0UixRQUFRLFdBQVcsOENBQThDLHVIQUF1SCwrQkFBK0Isc0I7Ozs7OztBQ0FuZiw2RkFBNEYsK0g7Ozs7OztBQ0E1Rix1RkFBc0Ysb0JBQW9CLHVJQUF1SSxtQkFBbUIsaUIiLCJmaWxlIjoiZm9ybWx5THVteC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgZjRjM2I2MDg2YjFmNWEzMzEzMjdcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbiAoKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgdmFyIFVTSU5HX1RFTVBMQVRFUyA9IHRydWU7XG4gIC8qIEN1c3RvbSB2YWxpZGF0aW9uIG1lc3NhZ2UgZGVmYXVsdHMgaGVyZSAqL1xuICB2YXIgVkFMSURBVElPTl9NRVNTQUdFUyA9IFt7XG4gICAgbmFtZTogJ3JlcXVpcmVkJywgbWVzc2FnZTogJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnXG4gIH0sIHtcbiAgICBuYW1lOiAnbWF4bGVuZ3RoJywgbWVzc2FnZTogJ1RoaXMgZmllbGQgaXMgdG9vIGxvbmcuJ1xuICB9LCB7XG4gICAgbmFtZTogJ21pbmxlbmd0aCcsIG1lc3NhZ2U6ICdUaGlzIGZpZWxkIGlzIHRvbyBzaG9ydC4nXG4gIH1dO1xuICAvKiBNb2R1bGUgVGVtcGxhdGVzICsgRGF0YSAqL1xuICB2YXIgTU9EVUxFX05BTUUgPSAnZm9ybWx5THVteCc7XG4gIHZhciBQUkVGSVggPSAnbHgnO1xuICB2YXIgRklFTERTID0gW3tcbiAgICBuYW1lOiAnY2hlY2tib3gnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpZWxkcy9seC1jaGVja2JveC5odG1sJyksXG4gICAgYXBpQ2hlY2s6IGZ1bmN0aW9uIGFwaUNoZWNrKGNoZWNrKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcbiAgICAgICAgICBsYWJlbDogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgY2hlY2tlZDogY2hlY2suYm9vbGVhbixcbiAgICAgICAgICByZXF1aXJlZDogY2hlY2suYm9vbGVhblxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIG5hbWU6ICdkYXRlLXBpY2tlcicsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LWRhdGUtcGlja2VyLmh0bWwnKSxcbiAgICBhcGlDaGVjazogZnVuY3Rpb24gYXBpQ2hlY2soY2hlY2spIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xuICAgICAgICAgICdsYWJlbCc6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICAncmVxdWlyZWQnOiBjaGVjay5ib29sZWFuXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIC8vfSwge1xuICAgIC8vICBuYW1lOiAnZHJvcGRvd24nLFxuICAgIC8vICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtZHJvcGRvd24uaHRtbCcpXG4gIH0sIHtcbiAgICBuYW1lOiAnZmxleCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LWZsZXguaHRtbCcpLFxuICAgIGFwaUNoZWNrOiBmdW5jdGlvbiBhcGlDaGVjayhjaGVjaykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7fVxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBuYW1lOiAnaW5wdXQnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpZWxkcy9seC1pbnB1dC5odG1sJyksXG4gICAgYXBpQ2hlY2s6IGZ1bmN0aW9uIGFwaUNoZWNrKGNoZWNrKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcbiAgICAgICAgICBsYWJlbDogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIGljb246IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICBmaXhlZExhYmVsOiBjaGVjay5ib29sZWFuLFxuICAgICAgICAgIGRpc2FibGVkOiBjaGVjay5ib29sZWFuLFxuICAgICAgICAgIGNsYXNzTmFtZTogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIHRoZW1lOiBjaGVjay5vbmVPZihbJ2xpZ2h0JywgJ2RhcmsnXSksXG4gICAgICAgICAgdHlwZTogY2hlY2sub25lT2YoWyd0ZXh0JywgJ251bWJlcicsICdlbWFpbCcsICdwYXNzd29yZCcsICd1cmwnLCAndGVsJ10pLFxuICAgICAgICAgIHJlcXVpcmVkOiBjaGVjay5ib29sZWFuXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAgbmFtZTogJ3JhZGlvJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtcmFkaW8uaHRtbCcpLFxuICAgIGFwaUNoZWNrOiBmdW5jdGlvbiBhcGlDaGVjayhjaGVjaykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XG4gICAgICAgICAgbGFiZWw6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIG9wdGlvbnM6IGNoZWNrLmFycmF5T2Yoe1xuICAgICAgICAgICAgbmFtZTogY2hlY2suc3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6IGNoZWNrLm9uZU9mVHlwZShbY2hlY2suc3RyaW5nLCBjaGVjay5udW1iZXJdKSxcbiAgICAgICAgICAgIGRpc2FibGVkOiBjaGVjay5ib29sZWFuXG4gICAgICAgICAgfSksXG4gICAgICAgICAgaW5saW5lOiBjaGVjay5ib29sZWFuLFxuICAgICAgICAgIHJlcXVpcmVkOiBjaGVjay5ib29sZWFuXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAgbmFtZTogJ3NlbGVjdCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LXNlbGVjdC5odG1sJyksXG4gICAgYXBpQ2hlY2s6IGZ1bmN0aW9uIGFwaUNoZWNrKGNoZWNrKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcbiAgICAgICAgICBsYWJlbDogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgJ21pbi1sZW5ndGgnOiBjaGVjay5udW1iZXIsXG4gICAgICAgICAgJ2FsbG93LWNsZWFyJzogY2hlY2suYm9vbGVhbixcbiAgICAgICAgICAnbmctYXR0ci1tdWx0aXBsZSc6IGNoZWNrLmJvb2xlYW4sXG4gICAgICAgICAgc2VsZWN0ZWQ6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICBzZWxlY3RlZDI6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICBjaG9pY2U6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICBjaG9pY2UyOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgY2hvaWNlczogY2hlY2suYXJyYXksXG4gICAgICAgICAgcmVxdWlyZWQ6IGNoZWNrLmJvb2xlYW5cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gICAgLy99LCB7XG4gICAgLy9cdG5hbWU6ICdzZWxlY3QtYXN5bmMnLFxuICAgIC8vXHR0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtc2VsZWN0LWFzeW5jLmh0bWwnKVxuICB9LCB7XG4gICAgbmFtZTogJ3N3aXRjaCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LXN3aXRjaC5odG1sJyksXG4gICAgYXBpQ2hlY2s6IGZ1bmN0aW9uIGFwaUNoZWNrKGNoZWNrKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcbiAgICAgICAgICBsYWJlbDogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgY2hlY2tlZDogY2hlY2suYm9vbGVhbixcbiAgICAgICAgICByZXF1aXJlZDogY2hlY2suYm9vbGVhblxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIG5hbWU6ICd0ZXh0YXJlYScsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LXRleHRhcmVhLmh0bWwnKSxcbiAgICBhcGlDaGVjazogZnVuY3Rpb24gYXBpQ2hlY2soY2hlY2spIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xuICAgICAgICAgIGxhYmVsOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgaWNvbjogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIHRoZW1lOiBjaGVjay5vbmVPZihbJ2xpZ2h0JywgJ2RhcmsnXSksXG4gICAgICAgICAgcmVxdWlyZWQ6IGNoZWNrLmJvb2xlYW4sXG4gICAgICAgICAgcm93czogY2hlY2subnVtYmVyLFxuICAgICAgICAgIGNvbHM6IGNoZWNrLm51bWJlclxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfV07XG4gIHZhciBXUkFQUEVSUyA9IFt7XG4gICAgbmFtZTogJ3dyYXBwZXItZGl2JyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93cmFwcGVycy9seC13cmFwcGVyLWRpdi5odG1sJylcbiAgfSwge1xuICAgIG5hbWU6ICd3cmFwcGVyLWVycm9ycycsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vd3JhcHBlcnMvbHgtd3JhcHBlci1lcnJvcnMuaHRtbCcpXG4gIH0sIHtcbiAgICBuYW1lOiAnd3JhcHBlci1mbGV4JyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93cmFwcGVycy9seC13cmFwcGVyLWZsZXguaHRtbCcpXG4gIH0sIHtcbiAgICBuYW1lOiAnd3JhcHBlci1pbmxpbmUnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3dyYXBwZXJzL2x4LXdyYXBwZXItaW5saW5lLmh0bWwnKVxuICB9XTtcblxuICBmdW5jdGlvbiBfcHJlZml4ZXIobmFtZSkge1xuICAgIHJldHVybiBQUkVGSVggKyAnLScgKyBuYW1lO1xuICB9XG5cbiAgZnVuY3Rpb24gX3dyYXBwZXJUZW1wbGF0ZVVybChuYW1lKSB7XG4gICAgcmV0dXJuICd3cmFwcGVycy9mb3JtbHktd3JhcHBlcnMtJyArIF9wcmVmaXhlcihuYW1lKSArICcuaHRtbCc7XG4gIH1cblxuICBmdW5jdGlvbiBfZmllbGRUZW1wbGF0ZVVybChuYW1lKSB7XG4gICAgcmV0dXJuICdmaWVsZHMvZm9ybWx5LWZpZWxkcy0nICsgX3ByZWZpeGVyKG5hbWUpICsgJy5odG1sJztcbiAgfVxuXG4gIC8qQG5nSW5qZWN0Ki9cbiAgZnVuY3Rpb24gc2V0V3JhcHBlcnMoZm9ybWx5Q29uZmlnUHJvdmlkZXIpIHtcbiAgICBpZiAoVVNJTkdfVEVNUExBVEVTKSB7XG4gICAgICBXUkFQUEVSUy5tYXAoZnVuY3Rpb24gKHdyYXBwZXIpIHtcbiAgICAgICAgZm9ybWx5Q29uZmlnUHJvdmlkZXIuc2V0V3JhcHBlcih7XG4gICAgICAgICAgbmFtZTogX3ByZWZpeGVyKHdyYXBwZXIubmFtZSksXG4gICAgICAgICAgdGVtcGxhdGVVcmw6IF93cmFwcGVyVGVtcGxhdGVVcmwod3JhcHBlci5uYW1lKVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIF9wcmVmaXhlcih3cmFwcGVyLm5hbWUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLypAbmdJbmplY3QqL1xuICBmdW5jdGlvbiBzZXRGaWVsZHMoZm9ybWx5Q29uZmlnLCBmb3JtbHlBcGlDaGVjaykge1xuICAgIHZhciBjID0gZm9ybWx5QXBpQ2hlY2s7XG4gICAgaWYgKFVTSU5HX1RFTVBMQVRFUykge1xuICAgICAgRklFTERTLm1hcChmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgICAgZm9ybWx5Q29uZmlnLnNldFR5cGUoe1xuICAgICAgICAgIG5hbWU6IF9wcmVmaXhlcihmaWVsZC5uYW1lKSxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogX2ZpZWxkVGVtcGxhdGVVcmwoZmllbGQubmFtZSkgLy8sXG4gICAgICAgICAgLy9hcGlDaGVjazogZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAvLyAgcmV0dXJuIGZpZWxkLmFwaUNoZWNrKGMpO1xuICAgICAgICAgIC8vfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldERlZmF1bHRzKGZvcm1seUNvbmZpZywgZm9ybWx5VmFsaWRhdGlvbk1lc3NhZ2VzKSB7XG4gICAgZm9ybWx5Q29uZmlnLmV4dHJhcy5uZ01vZGVsQXR0cnNNYW5pcHVsYXRvclByZWZlckJvdW5kID0gdHJ1ZTtcbiAgICBWQUxJREFUSU9OX01FU1NBR0VTLm1hcChmdW5jdGlvbiAodmFsaWRhdGlvbikge1xuICAgICAgZm9ybWx5VmFsaWRhdGlvbk1lc3NhZ2VzLmFkZFN0cmluZ01lc3NhZ2UodmFsaWRhdGlvbi5uYW1lLCB2YWxpZGF0aW9uLm1lc3NhZ2UpO1xuICAgIH0pO1xuICAgIGZvcm1seVZhbGlkYXRpb25NZXNzYWdlcy5tZXNzYWdlcy5wYXR0ZXJuID0gZnVuY3Rpb24gKHZpZXdWYWx1ZSwgbW9kZWxWYWx1ZSkge1xuICAgICAgcmV0dXJuICh2aWV3VmFsdWUgfHwgbW9kZWxWYWx1ZSkgKyAnIGlzIGludmFsaWQnO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBjYWNoZVRlbXBsYXRlcygkdGVtcGxhdGVDYWNoZSkge1xuICAgIGlmIChVU0lOR19URU1QTEFURVMpIHtcbiAgICAgIEZJRUxEUy5tYXAoZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICAgICR0ZW1wbGF0ZUNhY2hlLnB1dChfZmllbGRUZW1wbGF0ZVVybChmaWVsZC5uYW1lKSwgZmllbGQudGVtcGxhdGUpO1xuICAgICAgfSk7XG4gICAgICBXUkFQUEVSUy5tYXAoZnVuY3Rpb24gKHdyYXBwZXIpIHtcbiAgICAgICAgJHRlbXBsYXRlQ2FjaGUucHV0KF93cmFwcGVyVGVtcGxhdGVVcmwod3JhcHBlci5uYW1lKSwgd3JhcHBlci50ZW1wbGF0ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBhbmd1bGFyLm1vZHVsZShNT0RVTEVfTkFNRSwgWydmb3JtbHknXSkuY29uZmlnKHNldFdyYXBwZXJzKS5ydW4oc2V0RmllbGRzKS5ydW4oc2V0RGVmYXVsdHMpLnJ1bihjYWNoZVRlbXBsYXRlcyk7XG59KSgpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaW5kZXguanNcbiAqKi8iLCIoZnVuY3Rpb24gKCkge1xuICAndXNlIHN0cmljdCc7XG4gIHZhciBVU0lOR19URU1QTEFURVMgPSB0cnVlO1xuICAvKiBDdXN0b20gdmFsaWRhdGlvbiBtZXNzYWdlIGRlZmF1bHRzIGhlcmUgKi9cbiAgdmFyIFZBTElEQVRJT05fTUVTU0FHRVMgPSBbe1xuICAgIG5hbWU6ICdyZXF1aXJlZCcsIG1lc3NhZ2U6ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJ1xuICB9LCB7XG4gICAgbmFtZTogJ21heGxlbmd0aCcsIG1lc3NhZ2U6ICdUaGlzIGZpZWxkIGlzIHRvbyBsb25nLidcbiAgfSwge1xuICAgIG5hbWU6ICdtaW5sZW5ndGgnLCBtZXNzYWdlOiAnVGhpcyBmaWVsZCBpcyB0b28gc2hvcnQuJ1xuICB9XTtcbiAgLyogTW9kdWxlIFRlbXBsYXRlcyArIERhdGEgKi9cbiAgdmFyIE1PRFVMRV9OQU1FID0gJ2Zvcm1seUx1bXgnO1xuICB2YXIgUFJFRklYID0gJ2x4JztcbiAgdmFyIEZJRUxEUyA9IFt7XG4gICAgbmFtZTogJ2NoZWNrYm94JyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtY2hlY2tib3guaHRtbCcpLFxuICAgIGFwaUNoZWNrOiBmdW5jdGlvbihjaGVjaykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XG4gICAgICAgICAgbGFiZWw6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIGNoZWNrZWQ6IGNoZWNrLmJvb2xlYW4sXG4gICAgICAgICAgcmVxdWlyZWQ6IGNoZWNrLmJvb2xlYW5cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBuYW1lOiAnZGF0ZS1waWNrZXInLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpZWxkcy9seC1kYXRlLXBpY2tlci5odG1sJyksXG4gICAgYXBpQ2hlY2s6IGZ1bmN0aW9uKGNoZWNrKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcbiAgICAgICAgICAnbGFiZWwnOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgJ3JlcXVpcmVkJzogY2hlY2suYm9vbGVhblxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgLy99LCB7XG4gIC8vICBuYW1lOiAnZHJvcGRvd24nLFxuICAvLyAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LWRyb3Bkb3duLmh0bWwnKVxuICB9LCB7XG4gICAgbmFtZTogJ2ZsZXgnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpZWxkcy9seC1mbGV4Lmh0bWwnKSxcbiAgICBhcGlDaGVjazogZnVuY3Rpb24oY2hlY2spIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczoge31cbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAgbmFtZTogJ2lucHV0JyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtaW5wdXQuaHRtbCcpLFxuICAgIGFwaUNoZWNrOiBmdW5jdGlvbihjaGVjaykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XG4gICAgICAgICAgbGFiZWw6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICBpY29uOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgZml4ZWRMYWJlbDogY2hlY2suYm9vbGVhbixcbiAgICAgICAgICBkaXNhYmxlZDogY2hlY2suYm9vbGVhbixcbiAgICAgICAgICBjbGFzc05hbWU6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICB0aGVtZTogY2hlY2sub25lT2YoWydsaWdodCcsICdkYXJrJ10pLFxuICAgICAgICAgIHR5cGU6IGNoZWNrLm9uZU9mKFsndGV4dCcsICdudW1iZXInLCAnZW1haWwnLCAncGFzc3dvcmQnLCAndXJsJywgJ3RlbCddKSxcbiAgICAgICAgICByZXF1aXJlZDogY2hlY2suYm9vbGVhblxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIG5hbWU6ICdyYWRpbycsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LXJhZGlvLmh0bWwnKSxcbiAgICBhcGlDaGVjazogZnVuY3Rpb24gKGNoZWNrKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcbiAgICAgICAgICBsYWJlbDogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgb3B0aW9uczogY2hlY2suYXJyYXlPZih7XG4gICAgICAgICAgICBuYW1lOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogY2hlY2sub25lT2ZUeXBlKFtjaGVjay5zdHJpbmcsIGNoZWNrLm51bWJlcl0pLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IGNoZWNrLmJvb2xlYW5cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBpbmxpbmU6IGNoZWNrLmJvb2xlYW4sXG4gICAgICAgICAgcmVxdWlyZWQ6IGNoZWNrLmJvb2xlYW5cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBuYW1lOiAnc2VsZWN0JyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtc2VsZWN0Lmh0bWwnKSxcbiAgICBhcGlDaGVjazogZnVuY3Rpb24oY2hlY2spIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xuICAgICAgICAgIGxhYmVsOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICAnbWluLWxlbmd0aCc6IGNoZWNrLm51bWJlcixcbiAgICAgICAgICAnYWxsb3ctY2xlYXInOiBjaGVjay5ib29sZWFuLFxuICAgICAgICAgICduZy1hdHRyLW11bHRpcGxlJzogY2hlY2suYm9vbGVhbixcbiAgICAgICAgICBzZWxlY3RlZDogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIHNlbGVjdGVkMjogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIGNob2ljZTogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIGNob2ljZTI6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICBjaG9pY2VzOiBjaGVjay5hcnJheSxcbiAgICAgICAgICByZXF1aXJlZDogY2hlY2suYm9vbGVhblxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgICAvL30sIHtcbiAgICAvL1x0bmFtZTogJ3NlbGVjdC1hc3luYycsXG4gICAgLy9cdHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpZWxkcy9seC1zZWxlY3QtYXN5bmMuaHRtbCcpXG4gIH0sIHtcbiAgICBuYW1lOiAnc3dpdGNoJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtc3dpdGNoLmh0bWwnKSxcbiAgICBhcGlDaGVjazogZnVuY3Rpb24oY2hlY2spIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xuICAgICAgICAgIGxhYmVsOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgZGVzY3JpcHRpb246IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICBjaGVja2VkOiBjaGVjay5ib29sZWFuLFxuICAgICAgICAgIHJlcXVpcmVkOiBjaGVjay5ib29sZWFuXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAgbmFtZTogJ3RleHRhcmVhJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtdGV4dGFyZWEuaHRtbCcpLFxuICAgIGFwaUNoZWNrOiBmdW5jdGlvbihjaGVjaykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XG4gICAgICAgICAgbGFiZWw6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICBpY29uOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgdGhlbWU6IGNoZWNrLm9uZU9mKFsnbGlnaHQnLCAnZGFyayddKSxcbiAgICAgICAgICByZXF1aXJlZDogY2hlY2suYm9vbGVhbixcbiAgICAgICAgICByb3dzOiBjaGVjay5udW1iZXIsXG4gICAgICAgICAgY29sczogY2hlY2subnVtYmVyXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9XTtcbiAgdmFyIFdSQVBQRVJTID0gW3tcbiAgICBuYW1lOiAnd3JhcHBlci1kaXYnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3dyYXBwZXJzL2x4LXdyYXBwZXItZGl2Lmh0bWwnKVxuICB9LCB7XG4gICAgbmFtZTogJ3dyYXBwZXItZXJyb3JzJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93cmFwcGVycy9seC13cmFwcGVyLWVycm9ycy5odG1sJylcbiAgfSwge1xuICAgIG5hbWU6ICd3cmFwcGVyLWZsZXgnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3dyYXBwZXJzL2x4LXdyYXBwZXItZmxleC5odG1sJylcbiAgfSwge1xuICAgIG5hbWU6ICd3cmFwcGVyLWlubGluZScsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vd3JhcHBlcnMvbHgtd3JhcHBlci1pbmxpbmUuaHRtbCcpXG4gIH1dO1xuXG4gIGZ1bmN0aW9uIF9wcmVmaXhlcihuYW1lKSB7XG4gICAgcmV0dXJuIFBSRUZJWCArICctJyArIG5hbWU7XG4gIH1cblxuICBmdW5jdGlvbiBfd3JhcHBlclRlbXBsYXRlVXJsKG5hbWUpIHtcbiAgICByZXR1cm4gJ3dyYXBwZXJzL2Zvcm1seS13cmFwcGVycy0nICsgX3ByZWZpeGVyKG5hbWUpICsgJy5odG1sJztcbiAgfVxuXG4gIGZ1bmN0aW9uIF9maWVsZFRlbXBsYXRlVXJsKG5hbWUpIHtcbiAgICByZXR1cm4gJ2ZpZWxkcy9mb3JtbHktZmllbGRzLScgKyBfcHJlZml4ZXIobmFtZSkgKyAnLmh0bWwnO1xuICB9XG5cbiAgLypAbmdJbmplY3QqL1xuICBmdW5jdGlvbiBzZXRXcmFwcGVycyhmb3JtbHlDb25maWdQcm92aWRlcikge1xuICAgIGlmIChVU0lOR19URU1QTEFURVMpIHtcbiAgICAgIFdSQVBQRVJTLm1hcChmdW5jdGlvbiAod3JhcHBlcikge1xuICAgICAgICBmb3JtbHlDb25maWdQcm92aWRlci5zZXRXcmFwcGVyKHtcbiAgICAgICAgICBuYW1lOiBfcHJlZml4ZXIod3JhcHBlci5uYW1lKSxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogX3dyYXBwZXJUZW1wbGF0ZVVybCh3cmFwcGVyLm5hbWUpXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gX3ByZWZpeGVyKHdyYXBwZXIubmFtZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKkBuZ0luamVjdCovXG4gIGZ1bmN0aW9uIHNldEZpZWxkcyhmb3JtbHlDb25maWcsIGZvcm1seUFwaUNoZWNrKSB7XG4gICAgdmFyIGMgPSBmb3JtbHlBcGlDaGVjaztcbiAgICBpZiAoVVNJTkdfVEVNUExBVEVTKSB7XG4gICAgICAgIEZJRUxEUy5tYXAoZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICAgICAgZm9ybWx5Q29uZmlnLnNldFR5cGUoe1xuICAgICAgICAgICAgbmFtZTogX3ByZWZpeGVyKGZpZWxkLm5hbWUpLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6IF9maWVsZFRlbXBsYXRlVXJsKGZpZWxkLm5hbWUpIC8vLFxuICAgICAgICAgICAgLy9hcGlDaGVjazogZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgIC8vICByZXR1cm4gZmllbGQuYXBpQ2hlY2soYyk7XG4gICAgICAgICAgICAvL31cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gIGZ1bmN0aW9uIHNldERlZmF1bHRzKGZvcm1seUNvbmZpZywgZm9ybWx5VmFsaWRhdGlvbk1lc3NhZ2VzKSB7XG4gICAgZm9ybWx5Q29uZmlnLmV4dHJhcy5uZ01vZGVsQXR0cnNNYW5pcHVsYXRvclByZWZlckJvdW5kID0gdHJ1ZTtcbiAgICBWQUxJREFUSU9OX01FU1NBR0VTLm1hcChmdW5jdGlvbiAodmFsaWRhdGlvbikge1xuICAgICAgZm9ybWx5VmFsaWRhdGlvbk1lc3NhZ2VzLmFkZFN0cmluZ01lc3NhZ2UodmFsaWRhdGlvbi5uYW1lLCB2YWxpZGF0aW9uLm1lc3NhZ2UpO1xuICAgIH0pO1xuICAgIGZvcm1seVZhbGlkYXRpb25NZXNzYWdlcy5tZXNzYWdlcy5wYXR0ZXJuID0gZnVuY3Rpb24gKHZpZXdWYWx1ZSwgbW9kZWxWYWx1ZSkge1xuICAgICAgcmV0dXJuICh2aWV3VmFsdWUgfHwgbW9kZWxWYWx1ZSkgKyAnIGlzIGludmFsaWQnO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBjYWNoZVRlbXBsYXRlcygkdGVtcGxhdGVDYWNoZSkge1xuICAgIGlmIChVU0lOR19URU1QTEFURVMpIHtcbiAgICAgIEZJRUxEUy5tYXAoZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICAgICR0ZW1wbGF0ZUNhY2hlLnB1dChfZmllbGRUZW1wbGF0ZVVybChmaWVsZC5uYW1lKSwgZmllbGQudGVtcGxhdGUpO1xuICAgICAgfSk7XG4gICAgICBXUkFQUEVSUy5tYXAoZnVuY3Rpb24gKHdyYXBwZXIpIHtcbiAgICAgICAgJHRlbXBsYXRlQ2FjaGUucHV0KF93cmFwcGVyVGVtcGxhdGVVcmwod3JhcHBlci5uYW1lKSwgd3JhcHBlci50ZW1wbGF0ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBhbmd1bGFyLm1vZHVsZShNT0RVTEVfTkFNRSwgW1xuICAgICdmb3JtbHknXG4gIF0pLmNvbmZpZyhzZXRXcmFwcGVycykucnVuKHNldEZpZWxkcykucnVuKHNldERlZmF1bHRzKS5ydW4oY2FjaGVUZW1wbGF0ZXMpO1xufSgpKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL34vanNoaW50LWxvYWRlciEuL2luZGV4LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNoZWNrYm94XFxcIj5cXG5cXHQ8aW5wdXQgbmctbW9kZWw9XFxcIm1vZGVsW29wdGlvbnMua2V5XVxcXCJcXG5cXHQgICAgICAgdHlwZT1cXFwiY2hlY2tib3hcXFwiXFxuXFx0ICAgICAgIHJvbGU9XFxcImNoZWNrYm94XFxcIlxcblxcdCAgICAgICBjbGFzcz1cXFwiY2hlY2tib3hfX2lucHV0XFxcIj5cXG5cXHQ8bGFiZWwgZm9yPXt7OjppZH19IGNsYXNzPVxcXCJjaGVja2JveF9fbGFiZWxcXFwiIGFyaWEtbGFiZWw9XFxcInt7Ojp0by5sYWJlbH19XFxcIj57e3RvLmxhYmVsfX08L2xhYmVsPlxcblxcdDxzcGFuIG5nLWlmPVxcXCI6OnRvLmRlc2NyaXB0aW9uXFxcIlxcblxcdCAgICAgIGNsYXNzPVxcXCJjaGVja2JveF9faGVscFxcXCI+e3s6OnRvLmRlc2NyaXB0aW9ufX08L3NwYW4+XFxuPC9kaXY+XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vZmllbGRzL2x4LWNoZWNrYm94Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGx4LWRhdGUtcGlja2VyIG1vZGVsPVxcXCJtb2RlbFtvcHRpb25zLmtleV1cXFwiXFxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XFxcInt7Ojp0by5sYWJlbH19XFxcIlxcbiAgICAgICAgICAgICAgICBsYWJlbD1cXFwie3s6OnRvLmxhYmVsfX0ge3s6OnRvLnJlcXVpcmVkID8gJyonIDogJyd9fVxcXCI+XFxuPC9seC1kYXRlLXBpY2tlcj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9maWVsZHMvbHgtZGF0ZS1waWNrZXIuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJhZnRsLWZsZXgtZmllbGRzXFxcIlxcbiAgICAgbW9kZWw9XFxcIiRwYXJlbnQubW9kZWxcXFwiXFxuICAgICBmbGV4LWNvbnRhaW5lcj1cXFwie3s6OnRvLmZsZXguY29udGFpbmVyIHx8ICdyb3cnfX1cXFwiXFxuICAgICBmbGV4LWFsaWduPVxcXCJ7ezo6dG8uZmxleC5hbGlnbiB8fCAnc3BhY2UtYmV0d2Vlbid9fVxcXCJcXG4gICAgIGZsZXgtZ3V0dGVyPVxcXCJ7ezo6dG8uZmxleC5ndXR0ZXIgfHwgJzI0J319XFxcIj5cXG5cXHQ8ZGl2IGZvcm1seS1maWVsZFxcblxcdCAgICAgbmctcmVwZWF0PVxcXCJmaWVsZCBpbiB0by5maWVsZHMgdHJhY2sgYnkgJGluZGV4XFxcIlxcblxcdCAgICAgbmctaWY9XFxcIiFmaWVsZC5oaWRlXFxcIlxcblxcdCAgICAgY2xhc3M9XFxcImZvcm1seS1maWVsZCB7ezo6ZmllbGQudHlwZSA/ICdmb3JtbHktZmllbGQtJyArIGZpZWxkLnR5cGUgOiAnJ319XFxcIlxcblxcdCAgICAgbmctc3R5bGU9XFxcIjo6dG8uZmxleC5zdHlsZVxcXCJcXG5cXHQgICAgIG9wdGlvbnM9XFxcImZpZWxkXFxcIlxcblxcdCAgICAgbW9kZWw9XFxcImZpZWxkLm1vZGVsIHx8IG1vZGVsXFxcIlxcblxcdCAgICAgZmllbGRzPVxcXCJmaWVsZHNcXFwiXFxuXFx0ICAgICBmb3JtPVxcXCJmb3JtXFxcIlxcblxcdCAgICAgZm9ybS1pZD1cXFwiZm9ybUlkXFxcIlxcblxcdCAgICAgZm9ybS1zdGF0ZT1cXFwib3B0aW9ucy5mb3JtU3RhdGVcXFwiXFxuXFx0ICAgICBpbmRleD1cXFwiJGluZGV4XFxcIlxcblxcdCAgICAgZmxleC1pdGVtPVxcXCJ7ezo6dG8uZmxleC5pdGVtIHx8ICcxJ319XFxcIlxcblxcdCAgICAgZmxleC1vcmRlcj1cXFwie3s6OnRvLmZsZXgub3JkZXJ9fVxcXCI+XFxuXFx0PC9kaXY+XFxuPC9kaXY+XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vZmllbGRzL2x4LWZsZXguaHRtbFxuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8bHgtdGV4dC1maWVsZCBkYXRhLW1vZGVsPVxcXCI6Om1vZGVsW29wdGlvbnMua2V5XVxcXCJcXG4gICAgICAgICAgICAgICBpY29uPVxcXCJ7ezo6dG8uaWNvbn19XFxcIlxcbiAgICAgICAgICAgICAgIGZpeGVkLWxhYmVsPVxcXCI6OnRvLmZpeGVkTGFiZWxcXFwiXFxuICAgICAgICAgICAgICAgdGhlbWU9XFxcInt7Ojp0by50aGVtZX19XFxcIlxcbiAgICAgICAgICAgICAgIGRpc2FibGVkPVxcXCJ0by5kaXNhYmxlZFxcXCJcXG4gICAgICAgICAgICAgICBsYWJlbD1cXFwie3t0by5sYWJlbH19IHt7Ojp0by5yZXF1aXJlZCA/ICcqJyA6ICcnfX1cXFwiXFxuICAgICAgICAgICAgICAgdmFsaWQ9XFxcImZjLiR2YWxpZCAmJiBmYy4kdG91Y2hlZFxcXCJcXG4gICAgICAgICAgICAgICBlcnJvcj1cXFwiZmMuJGludmFsaWQgJiYgZmMuJHRvdWNoZWRcXFwiPlxcblxcdDxpbnB1dCBuZy1tb2RlbD1cXFwibW9kZWxbb3B0aW9ucy5rZXldXFxcIlxcblxcdCAgICAgICB0eXBlPVxcXCJ7ezo6dG8udHlwZX19XFxcIlxcblxcdCAgICAgICBhcmlhLWxhYmVsPVxcXCJ7ezo6dG8ubGFiZWx9fVxcXCJcXG5cXHQgICAgICAgbmctY2xhc3M9XFxcIjo6dG8uY2xhc3NOYW1lXFxcIi8+XFxuPC9seC10ZXh0LWZpZWxkPlwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2ZpZWxkcy9seC1pbnB1dC5odG1sXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInJhZGlvLWdyb3VwXFxcIj5cXG5cXHQ8aDMgbmctaWY9XFxcIjo6dG8ubGFiZWxcXFwiPjxsYWJlbD57ezo6dG8ubGFiZWx9fTwvbGFiZWw+PC9oMz5cXG5cXG5cXHQ8ZGl2IGNsYXNzPVxcXCJyYWRpby1idXR0b25cXFwiXFxuXFx0ICAgICBuZy1jbGFzcz1cXFwieydyYWRpby1idXR0b25fX2lubGluZSc6IHRvLmlubGluZX1cXFwiXFxuXFx0ICAgICBuZy1yZXBlYXQ9XFxcIm8gaW4gdG8ub3B0aW9uc1xcXCI+XFxuXFx0XFx0PGlucHV0IG5nLW1vZGVsPVxcXCIkcGFyZW50Lm1vZGVsWyRwYXJlbnQub3B0aW9ucy5rZXldXFxcIlxcblxcdFxcdCAgICAgICBpZD1cXFwie3s6OmlkICsgJ18nICsgJGluZGV4fX1cXFwiXFxuXFx0XFx0ICAgICAgIHR5cGU9XFxcInJhZGlvXFxcIlxcblxcdFxcdCAgICAgICBuZy1kaXNhYmxlZD1cXFwiOjpvLmRpc2FibGVkXFxcIlxcblxcdFxcdCAgICAgICBjbGFzcz1cXFwicmFkaW8tYnV0dG9uX19pbnB1dFxcXCJcXG5cXHRcXHQgICAgICAgbmctdmFsdWU9XFxcIjo6by52YWx1ZVxcXCJcXG5cXHRcXHQgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVxcXCJ7ezo6aWQgKyAnXycgKyAkaW5kZXggKyAnX3JhZGlvQnV0dG9uJ319XFxcIj5cXG5cXHRcXHQ8bGFiZWwgZm9yPVxcXCJ7ezo6aWQgKyAnXycgKyAkaW5kZXh9fVxcXCJcXG5cXHRcXHQgICAgICAgY2xhc3M9XFxcInJhZGlvLWJ1dHRvbl9fbGFiZWxcXFwiPnt7OjpvLm5hbWV9fTwvbGFiZWw+XFxuICAgICAgPHNwYW4gbmctaWY9XFxcIjo6by5kZXNjcmlwdGlvblxcXCIgY2xhc3M9XFxcInJhZGlvLWJ1dHRvbl9faGVscFxcXCI+e3s6Om8uZGVzY3JpcHRpb259fVxcbiAgICAgIDwvc3Bhbj5cXG5cXHQ8L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9maWVsZHMvbHgtcmFkaW8uaHRtbFxuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJhZnRsLXNlbGVjdFxcXCI+XFxuXFx0PGgzIG5nLWlmPVxcXCI6OnRvLmxhYmVsXFxcIj48bGFiZWw+XFxuXFx0XFx0e3t0by5sYWJlbH19IHt7Ojp0by5yZXF1aXJlZCA/ICcqJyA6ICcnfX1cXG5cXHQ8L2xhYmVsPjwvaDM+XFxuXFx0PGx4LXNlbGVjdCBuZy1tb2RlbD1cXFwibW9kZWxbb3B0aW9ucy5rZXldXFxcIlxcblxcdCAgICAgICAgICAgY2hvaWNlcz1cXFwidG8ub3B0aW9uc1xcXCJcXG5cXHQgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJ7ezo6dG8ucGxhY2Vob2xkZXJ9fVxcXCJcXG5cXHQgICAgICAgICAgIG1pbi1sZW5ndGg9XFxcIjo6dG8ubWluTGVuZ3RoXFxcIlxcblxcdCAgICAgICAgICAgYWxsb3ctY2xlYXI9XFxcIjo6dG8uYWxsb3dDbGVhclxcXCJcXG5cXHQgICAgICAgICAgIG5nLWF0dHItbXVsdGlwbGU9XFxcInt7Ojp0by5tdWx0aXBsZX19XFxcIj5cXG5cXG5cXHRcXHQ8bHgtc2VsZWN0LXNlbGVjdGVkPlxcblxcdFxcdFxcdHt7JHNlbGVjdGVkW3RvLnNlbGVjdGVkXSB8fCAkc2VsZWN0ZWR9fSB7ezo6dG8uc2VsZWN0ZWQyID8gJyAtICcgK1xcblxcdFxcdFxcdCRzZWxlY3RlZFt0by5zZWxlY3RlZDJdIDogJyd9fVxcblxcdFxcdDwvbHgtc2VsZWN0LXNlbGVjdGVkPlxcblxcblxcdFxcdDxseC1zZWxlY3QtY2hvaWNlcz5cXG5cXHRcXHRcXHR7eyRjaG9pY2VbdG8uY2hvaWNlXSB8fCAkY2hvaWNlfX0ge3s6OnRvLmNob2ljZTIgPyAnIC0gJyArXFxuXFx0XFx0XFx0JGNob2ljZVt0by5jaG9pY2UyXSA6ICcnfX1cXG5cXHRcXHQ8L2x4LXNlbGVjdC1jaG9pY2VzPlxcblxcblxcdDwvbHgtc2VsZWN0PlxcbjwvZGl2PlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2ZpZWxkcy9seC1zZWxlY3QuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJzd2l0Y2hcXFwiPlxcblxcdDxpbnB1dCBuZy1tb2RlbD1cXFwibW9kZWxbb3B0aW9ucy5rZXldXFxcIlxcblxcdCAgICAgICB0eXBlPVxcXCJjaGVja2JveFxcXCJcXG5cXHQgICAgICAgcm9sZT1cXFwiY2hlY2tib3hcXFwiXFxuXFx0ICAgICAgIGNsYXNzPVxcXCJzd2l0Y2hfX2lucHV0XFxcIi8+XFxuXFx0PGxhYmVsIGZvcj1cXFwie3s6OmlkfX1cXFwiIGNsYXNzPVxcXCJzd2l0Y2hfX2xhYmVsXFxcIiBhcmlhLWxhYmVsPVxcXCJ7ezo6dG8ubGFiZWx9fVxcXCI+e3t0by5sYWJlbH19PC9sYWJlbD5cXG5cXHQ8c3BhbiBuZy1pZj1cXFwiOjp0by5kZXNjcmlwdGlvblxcXCJcXG5cXHQgICAgICBjbGFzcz1cXFwic3dpdGNoX19oZWxwXFxcIj57ezo6dG8uZGVzY3JpcHRpb259fTwvc3Bhbj5cXG48L2Rpdj5cXG5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9maWVsZHMvbHgtc3dpdGNoLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGx4LXRleHQtZmllbGQgZGF0YS1tb2RlbD1cXFwiOjptb2RlbFtvcHRpb25zLmtleV1cXFwiXFxuICAgICAgICAgICAgICAgZml4ZWQtbGFiZWw9XFxcIjo6dG8uZml4ZWRMYWJlbFxcXCJcXG4gICAgICAgICAgICAgICBpY29uPVxcXCJ7ezo6dG8uaWNvbn19XFxcIlxcbiAgICAgICAgICAgICAgIHRoZW1lPVxcXCJ7ezo6dG8udGhlbWV9fVxcXCJcXG4gICAgICAgICAgICAgICBsYWJlbD1cXFwie3t0by5sYWJlbH19IHt7Ojp0by5yZXF1aXJlZCA/ICcqJyA6ICcnfX1cXFwiXFxuICAgICAgICAgICAgICAgdmFsaWQ9XFxcImZjLiR2YWxpZCAmJiBmYy4kdG91Y2hlZFxcXCJcXG4gICAgICAgICAgICAgICBlcnJvcj1cXFwiZmMuJGludmFsaWQgJiYgZmMuJHRvdWNoZWRcXFwiPlxcbiAgICA8dGV4dGFyZWEgbmctbW9kZWw9XFxcIm1vZGVsW29wdGlvbnMua2V5XVxcXCJcXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XFxcInt7Ojp0by5sYWJlbH19XFxcIlxcbiAgICAgICAgICAgICAgcm93cz1cXFwie3s6OnRvLnJvd3N9fVxcXCIgY29scz1cXFwie3s6OnRvLmNvbHN9fVxcXCI+XFxuICAgIDwvdGV4dGFyZWE+XFxuPC9seC10ZXh0LWZpZWxkPlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2ZpZWxkcy9seC10ZXh0YXJlYS5odG1sXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgbmctY2xhc3M9XFxcIjo6dG8uZGl2LmNsYXNzTmFtZVxcXCJcXG5cXHRuZy1zdHlsZT1cXFwiOjp0by5kaXYuc3R5bGVcXFwiPlxcblxcdDxmb3JtbHktdHJhbnNjbHVkZT48L2Zvcm1seS10cmFuc2NsdWRlPlxcbjwvZGl2PlwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3dyYXBwZXJzL2x4LXdyYXBwZXItZGl2Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj5cXG5cXHQ8Zm9ybWx5LXRyYW5zY2x1ZGU+PC9mb3JtbHktdHJhbnNjbHVkZT5cXG5cXHQ8dWwgY2xhc3M9XFxcImZvcm0tZXJyb3JcXFwiIG5nLW1lc3NhZ2VzPVxcXCJmYy4kZXJyb3JcXFwiXFxuXFx0ICAgIG5nLXNob3c9XFxcIm9wdGlvbnMudmFsaWRhdGlvbi5lcnJvckV4aXN0c0FuZFNob3VsZEJlVmlzaWJsZVxcXCI+XFxuXFx0XFx0PGxpIG5nLXJlcGVhdD1cXFwiKG5hbWUsIG1lc3NhZ2UpIGluIDo6b3B0aW9ucy52YWxpZGF0aW9uLm1lc3NhZ2VzXFxcIlxcblxcdFxcdCAgICBuZy1tZXNzYWdlPXt7OjpuYW1lfX0+XFxuXFx0XFx0XFx0e3ttZXNzYWdlKGZjLiR2aWV3VmFsdWUsIGZjLiRtb2RlbFZhbHVlLCB0aGlzKX19XFxuXFx0XFx0PC9saT5cXG5cXHQ8L3VsPlxcblxcdDxzcGFuIGNsYXNzPVxcXCJmb3JtLXBlbmRpbmdcXFwiXFxuXFx0ICAgICAgbmctaWY9XFxcInRvLnBlbmRpbmcgJiYgZmMuJHBlbmRpbmcgJiYgZmMuJHRvdWNoZWRcXFwiPlxcblxcdHt7Ojp0by5wZW5kaW5nIHx8ICdDaGVja2luZy4uLid9fVxcblxcdDwvc3Bhbj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi93cmFwcGVycy9seC13cmFwcGVyLWVycm9ycy5odG1sXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IG5nLWNsYXNzPVxcXCI6OnRvLmRpdi5jbGFzc05hbWVcXFwiXFxuICAgICBuZy1zdHlsZT1cXFwiOjp0by5kaXYuc3R5bGUgfHwge31cXFwiXFxuICAgICBmbGV4LWl0ZW09XFxcIjo6dG8uZmxleC5pdGVtXFxcIlxcbiAgICAgZmxleC1vcmRlcj1cXFwiOjp0by5mbGV4LW9yZGVyXFxcIj5cXG5cXHQ8Zm9ybWx5LXRyYW5zY2x1ZGU+PC9mb3JtbHktdHJhbnNjbHVkZT5cXG48L2Rpdj5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi93cmFwcGVycy9seC13cmFwcGVyLWZsZXguaHRtbFxuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNwYW4gY2xhc3M9XFxcImlubGluZS13cmFwcGVyXFxcIj5cXG5cXHQ8c3BhbiBjbGFzcz1cXFwiaW5saW5lLS1iZWZvcmVcXFwiPnt7Ojp0by5pbmxpbmUuYmVmb3JlfX08L3NwYW4+XFxuXFx0PHNwYW4gY2xhc3M9XFxcImlubGluZS0tY29udGVudFxcXCI+XFxuXFx0XFx0PGZvcm1seS10cmFuc2NsdWRlPjwvZm9ybWx5LXRyYW5zY2x1ZGU+XFxuXFx0PC9zcGFuPlxcblxcdDxzcGFuIGNsYXNzPVxcXCJpbmxpbmUtLWFmdGVyXFxcIj57ezo6dG8uaW5saW5lLmFmdGVyfX08L3NwYW4+XFxuPC9zcGFuPlwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3dyYXBwZXJzL2x4LXdyYXBwZXItaW5saW5lLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==