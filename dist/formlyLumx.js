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
	  }, {
	    name: 'dropdown',
	    template: __webpack_require__(3)
	  }, {
	    name: 'flex',
	    template: __webpack_require__(4),
	    apiCheck: function apiCheck(check) {
	      return {};
	    }
	  }, {
	    name: 'input',
	    template: __webpack_require__(5),
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
	    template: __webpack_require__(6),
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
	    template: __webpack_require__(7),
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
	    template: __webpack_require__(8),
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
	    template: __webpack_require__(9),
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
	
	  /*@ngInject*/
	  function setFields(formlyConfig, formlyApiCheck) {
	    var c = formlyApiCheck;
	    if (USING_TEMPLATES) {
	      FIELDS.map(function (field) {
	        formlyConfig.setType({
	          name: _prefixer(field.name),
	          templateUrl: _fieldTemplateUrl(field.name),
	          apiCheck: function apiCheck(c) {
	            return field.apiCheck(c);
	          },
	          apiCheckInstance: c
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

	module.exports = "<lx-dropdown>\n\t<button class=\"btn\" ng-class=\"::to.className || 'btn--m btn--black btn--flat'\" lx-ripple lx-dropdown-toggle aria-label=\"{{::to.label}}\">\n\t\t<i ng-if=\"::to.icon\" class=\"mdi mdi-dots-vertical\"></i>\n\t\t{{to.label}}\n\t</button>\n\t<lx-dropdown-menu>\n\t\t<ul>\n\t\t\t<li ng-repeat=\"o in ::to.options\">\n\t\t\t\t<a class=\"dropdown-link\" ng-click=\"o.action()\">{{::o.text}}</a>\n\t\t\t</li>\n\t\t</ul>\n\t</lx-dropdown-menu>\n</lx-dropdown>"

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = "<div class=\"aftl-flex-fields\"\n     model=\"$parent.model\"\n     flex-container=\"{{::to.flex.container || 'row'}}\"\n     flex-align=\"{{::to.flex.align || 'space-between'}}\"\n     flex-gutter=\"{{::to.flex.gutter || '24'}}\">\n\t<div formly-field\n\t     ng-repeat=\"field in to.fields track by $index\"\n\t     ng-if=\"!field.hide\"\n\t     class=\"formly-field {{::field.type ? 'formly-field-' + field.type : ''}}\"\n\t     ng-style=\"::to.flex.style\"\n\t     options=\"field\"\n\t     model=\"field.model || model\"\n\t     fields=\"fields\"\n\t     form=\"form\"\n\t     form-id=\"formId\"\n\t     form-state=\"options.formState\"\n\t     index=\"$index\"\n\t     flex-item=\"{{::to.flex.item || '1'}}\"\n\t     flex-order=\"{{::to.flex.order}}\">\n\t</div>\n</div>"

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "<lx-text-field data-model=\"::model[options.key]\"\n               icon=\"{{::to.icon}}\"\n               fixed-label=\"::to.fixedLabel\"\n               theme=\"{{::to.theme}}\"\n               disabled=\"to.disabled\"\n               label=\"{{to.label}} {{::to.required ? '*' : ''}}\"\n               valid=\"fc.$valid && fc.$touched\"\n               error=\"fc.$invalid && fc.$touched\">\n\t<input ng-model=\"model[options.key]\"\n\t       type=\"{{::to.type}}\"\n\t       aria-label=\"{{::to.label}}\"\n\t       ng-class=\"::to.className\"/>\n</lx-text-field>"

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "<div class=\"radio-group\">\n\t<h3 ng-if=\"::to.label\"><label>{{::to.label}}</label></h3>\n\n\t<div class=\"radio-button\"\n\t     ng-class=\"{'radio-button__inline': to.inline}\"\n\t     ng-repeat=\"o in to.options\">\n\t\t<input ng-model=\"$parent.model[$parent.options.key]\"\n\t\t       id=\"{{::id + '_' + $index}}\"\n\t\t       type=\"radio\"\n\t\t       ng-disabled=\"::o.disabled\"\n\t\t       class=\"radio-button__input\"\n\t\t       ng-value=\"::o.value\"\n\t\t       aria-labelledby=\"{{::id + '_' + $index + '_radioButton'}}\">\n\t\t<label for=\"{{::id + '_' + $index}}\"\n\t\t       class=\"radio-button__label\">{{::o.name}}</label>\n      <span ng-if=\"::o.description\" class=\"radio-button__help\">{{::o.description}}\n      </span>\n\t</div>\n</div>\n"

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "<div class=\"aftl-select\">\n\t<h3 ng-if=\"::to.label\"><label>\n\t\t{{to.label}} {{::to.required ? '*' : ''}}\n\t</label></h3>\n\t<lx-select ng-model=\"model[options.key]\"\n\t           choices=\"to.options\"\n\t           placeholder=\"{{::to.placeholder}}\"\n\t           min-length=\"::to.minLength\"\n\t           allow-clear=\"::to.allowClear\"\n\t           ng-attr-multiple=\"{{::to.multiple}}\">\n\n\t\t<lx-select-selected>\n\t\t\t{{$selected[to.selected] || $selected}} {{::to.selected2 ? ' - ' +\n\t\t\t$selected[to.selected2] : ''}}\n\t\t</lx-select-selected>\n\n\t\t<lx-select-choices>\n\t\t\t{{$choice[to.choice] || $choice}} {{::to.choice2 ? ' - ' +\n\t\t\t$choice[to.choice2] : ''}}\n\t\t</lx-select-choices>\n\n\t</lx-select>\n</div>\n"

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<div class=\"switch\">\n\t<input ng-model=\"model[options.key]\"\n\t       type=\"checkbox\"\n\t       role=\"checkbox\"\n\t       class=\"switch__input\"/>\n\t<label for=\"{{::id}}\" class=\"switch__label\" aria-label=\"{{::to.label}}\">{{to.label}}</label>\n\t<span ng-if=\"::to.description\"\n\t      class=\"switch__help\">{{::to.description}}</span>\n</div>\n\n"

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<lx-text-field data-model=\"::model[options.key]\"\n               fixed-label=\"::to.fixedLabel\"\n               icon=\"{{::to.icon}}\"\n               theme=\"{{::to.theme}}\"\n               label=\"{{to.label}} {{::to.required ? '*' : ''}}\"\n               valid=\"fc.$valid && fc.$touched\"\n               error=\"fc.$invalid && fc.$touched\">\n    <textarea ng-model=\"model[options.key]\"\n              aria-label=\"{{::to.label}}\"\n              rows=\"{{::to.rows}}\" cols=\"{{::to.cols}}\">\n    </textarea>\n</lx-text-field>\n"

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<div ng-class=\"::to.div.className\"\n\tng-style=\"::to.div.style\">\n\t<formly-transclude></formly-transclude>\n</div>"

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "<div>\n\t<formly-transclude></formly-transclude>\n\t<ul class=\"form-error\" ng-messages=\"fc.$error\"\n\t    ng-show=\"options.validation.errorExistsAndShouldBeVisible\">\n\t\t<li ng-repeat=\"(name, message) in ::options.validation.messages\"\n\t\t    ng-message={{::name}}>\n\t\t\t{{message(fc.$viewValue, fc.$modelValue, this)}}\n\t\t</li>\n\t</ul>\n\t<span class=\"form-pending\"\n\t      ng-if=\"to.pending && fc.$pending && fc.$touched\">\n\t{{::to.pending || 'Checking...'}}\n\t</span>\n</div>\n"

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "<div ng-class=\"::to.div.className\"\n     ng-style=\"::to.div.style || {}\"\n     flex-item=\"::to.flex.item\"\n     flex-order=\"::to.flex-order\">\n\t<formly-transclude></formly-transclude>\n</div>"

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "<span class=\"inline-wrapper\">\n\t<span class=\"inline--before\">{{::to.inline.before}}</span>\n\t<span class=\"inline--content\">\n\t\t<formly-transclude></formly-transclude>\n\t</span>\n\t<span class=\"inline--after\">{{::to.inline.after}}</span>\n</span>"

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDZhOWUzNGZmYjU1OGVmMTBlYzAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanM/MzA5MCIsIndlYnBhY2s6Ly8vLi9maWVsZHMvbHgtY2hlY2tib3guaHRtbCIsIndlYnBhY2s6Ly8vLi9maWVsZHMvbHgtZGF0ZS1waWNrZXIuaHRtbCIsIndlYnBhY2s6Ly8vLi9maWVsZHMvbHgtZHJvcGRvd24uaHRtbCIsIndlYnBhY2s6Ly8vLi9maWVsZHMvbHgtZmxleC5odG1sIiwid2VicGFjazovLy8uL2ZpZWxkcy9seC1pbnB1dC5odG1sIiwid2VicGFjazovLy8uL2ZpZWxkcy9seC1yYWRpby5odG1sIiwid2VicGFjazovLy8uL2ZpZWxkcy9seC1zZWxlY3QuaHRtbCIsIndlYnBhY2s6Ly8vLi9maWVsZHMvbHgtc3dpdGNoLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vZmllbGRzL2x4LXRleHRhcmVhLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vd3JhcHBlcnMvbHgtd3JhcHBlci1kaXYuaHRtbCIsIndlYnBhY2s6Ly8vLi93cmFwcGVycy9seC13cmFwcGVyLWVycm9ycy5odG1sIiwid2VicGFjazovLy8uL3dyYXBwZXJzL2x4LXdyYXBwZXItZmxleC5odG1sIiwid2VicGFjazovLy8uL3dyYXBwZXJzL2x4LXdyYXBwZXItaW5saW5lLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0E7O0FDQUEsRUFBQyxZQUFZO0dBQ1g7R0FDQSxJQUFJLGtCQUFrQjs7R0FFdEIsSUFBSSxzQkFB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LGdCOzs7Ozs7QUNBaFgsZ0dBQStGLFlBQVksOEJBQThCLFlBQVksR0FBRywwQkFBMEIseUI7Ozs7OztBQ0FsTCxtS0FBa0ssWUFBWSw0RUFBNEUsVUFBVSx3SkFBd0osVUFBVSxvRTs7Ozs7O0FDQXRhLDBHQUF5Ryw4QkFBOEIsd0JBQXdCLG9DQUFvQyx5QkFBeUIsMEJBQTBCLCtJQUErSSxrREFBa0QsNFFBQTRRLHVCQUF1QiwwQkFBMEIsaUJBQWlCLHNCOzs7Ozs7QUNBcndCLCtGQUE4RixXQUFXLDZFQUE2RSxZQUFZLHNFQUFzRSxVQUFVLEdBQUcsMEJBQTBCLHlLQUF5SyxXQUFXLDRCQUE0QixZQUFZLDZEOzs7Ozs7QUNBM2dCLG9GQUFtRixZQUFZLG1FQUFtRSxrQ0FBa0MseUhBQXlILHFCQUFxQixvTEFBb0wsc0NBQXNDLHdCQUF3QixxQkFBcUIsK0NBQStDLFVBQVUsK0VBQStFLGlCQUFpQixvQzs7Ozs7O0FDQWx2QiwwRkFBeUYsVUFBVSxHQUFHLDBCQUEwQixtSUFBbUksa0JBQWtCLGdJQUFnSSxlQUFlLHlDQUF5QyxxQ0FBcUMsR0FBRyw4REFBOEQsZ0VBQWdFLCtCQUErQixHQUFHLHdEQUF3RCx1RDs7Ozs7O0FDQTdzQixrTUFBaU0sTUFBTSwwQ0FBMEMsWUFBWSxLQUFLLFVBQVUsK0VBQStFLGtCQUFrQixvQjs7Ozs7O0FDQTdXLCtJQUE4SSxXQUFXLDZCQUE2QixZQUFZLDZCQUE2QixVQUFVLEdBQUcsMEJBQTBCLHlMQUF5TCxZQUFZLDJCQUEyQixXQUFXLFlBQVksV0FBVyx5Qzs7Ozs7O0FDQXhnQiwySTs7Ozs7O0FDQUEsNlJBQTRSLFFBQVEsV0FBVyw4Q0FBOEMsdUhBQXVILCtCQUErQixzQjs7Ozs7O0FDQW5mLDZGQUE0RiwrSDs7Ozs7O0FDQTVGLHVGQUFzRixvQkFBb0IsdUlBQXVJLG1CQUFtQixpQiIsImZpbGUiOiJmb3JtbHlMdW14LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBkNmE5ZTM0ZmZiNTU4ZWYxMGVjMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uICgpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICB2YXIgVVNJTkdfVEVNUExBVEVTID0gdHJ1ZTtcbiAgLyogQ3VzdG9tIHZhbGlkYXRpb24gbWVzc2FnZSBkZWZhdWx0cyBoZXJlICovXG4gIHZhciBWQUxJREFUSU9OX01FU1NBR0VTID0gW3tcbiAgICBuYW1lOiAncmVxdWlyZWQnLCBtZXNzYWdlOiAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCdcbiAgfSwge1xuICAgIG5hbWU6ICdtYXhsZW5ndGgnLCBtZXNzYWdlOiAnVGhpcyBmaWVsZCBpcyB0b28gbG9uZy4nXG4gIH0sIHtcbiAgICBuYW1lOiAnbWlubGVuZ3RoJywgbWVzc2FnZTogJ1RoaXMgZmllbGQgaXMgdG9vIHNob3J0LidcbiAgfV07XG4gIC8qIE1vZHVsZSBUZW1wbGF0ZXMgKyBEYXRhICovXG4gIHZhciBNT0RVTEVfTkFNRSA9ICdmb3JtbHlMdW14JztcbiAgdmFyIFBSRUZJWCA9ICdseCc7XG4gIHZhciBGSUVMRFMgPSBbe1xuICAgIG5hbWU6ICdjaGVja2JveCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LWNoZWNrYm94Lmh0bWwnKSxcbiAgICBhcGlDaGVjazogZnVuY3Rpb24gYXBpQ2hlY2soY2hlY2spIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xuICAgICAgICAgIGxhYmVsOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgZGVzY3JpcHRpb246IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICBjaGVja2VkOiBjaGVjay5ib29sZWFuLFxuICAgICAgICAgIHJlcXVpcmVkOiBjaGVjay5ib29sZWFuXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAgbmFtZTogJ2RhdGUtcGlja2VyJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtZGF0ZS1waWNrZXIuaHRtbCcpLFxuICAgIGFwaUNoZWNrOiBmdW5jdGlvbiBhcGlDaGVjayhjaGVjaykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XG4gICAgICAgICAgJ2xhYmVsJzogY2hlY2suc3RyaW5nLFxuICAgICAgICAgICdyZXF1aXJlZCc6IGNoZWNrLmJvb2xlYW5cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBuYW1lOiAnZHJvcGRvd24nLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpZWxkcy9seC1kcm9wZG93bi5odG1sJylcbiAgfSwge1xuICAgIG5hbWU6ICdmbGV4JyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtZmxleC5odG1sJyksXG4gICAgYXBpQ2hlY2s6IGZ1bmN0aW9uIGFwaUNoZWNrKGNoZWNrKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICB9LCB7XG4gICAgbmFtZTogJ2lucHV0JyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtaW5wdXQuaHRtbCcpLFxuICAgIGFwaUNoZWNrOiBmdW5jdGlvbiBhcGlDaGVjayhjaGVjaykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XG4gICAgICAgICAgbGFiZWw6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICBpY29uOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgZml4ZWRMYWJlbDogY2hlY2suYm9vbGVhbixcbiAgICAgICAgICBkaXNhYmxlZDogY2hlY2suYm9vbGVhbixcbiAgICAgICAgICBjbGFzc05hbWU6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICB0aGVtZTogY2hlY2sub25lT2YoWydsaWdodCcsICdkYXJrJ10pLFxuICAgICAgICAgIHR5cGU6IGNoZWNrLm9uZU9mKFsndGV4dCcsICdudW1iZXInLCAnZW1haWwnLCAncGFzc3dvcmQnLCAndXJsJywgJ3RlbCddKSxcbiAgICAgICAgICByZXF1aXJlZDogY2hlY2suYm9vbGVhblxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIG5hbWU6ICdyYWRpbycsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LXJhZGlvLmh0bWwnKSxcbiAgICBhcGlDaGVjazogZnVuY3Rpb24gYXBpQ2hlY2soY2hlY2spIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xuICAgICAgICAgIGxhYmVsOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgZGVzY3JpcHRpb246IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICBvcHRpb25zOiBjaGVjay5hcnJheU9mKHtcbiAgICAgICAgICAgIG5hbWU6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiBjaGVjay5vbmVPZlR5cGUoW2NoZWNrLnN0cmluZywgY2hlY2subnVtYmVyXSksXG4gICAgICAgICAgICBkaXNhYmxlZDogY2hlY2suYm9vbGVhblxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGlubGluZTogY2hlY2suYm9vbGVhbixcbiAgICAgICAgICByZXF1aXJlZDogY2hlY2suYm9vbGVhblxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIG5hbWU6ICdzZWxlY3QnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpZWxkcy9seC1zZWxlY3QuaHRtbCcpLFxuICAgIGFwaUNoZWNrOiBmdW5jdGlvbiBhcGlDaGVjayhjaGVjaykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XG4gICAgICAgICAgbGFiZWw6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogY2hlY2suc3RyaW5nLFxuICAgICAgICAgICdtaW4tbGVuZ3RoJzogY2hlY2subnVtYmVyLFxuICAgICAgICAgICdhbGxvdy1jbGVhcic6IGNoZWNrLmJvb2xlYW4sXG4gICAgICAgICAgJ25nLWF0dHItbXVsdGlwbGUnOiBjaGVjay5ib29sZWFuLFxuICAgICAgICAgIHNlbGVjdGVkOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgc2VsZWN0ZWQyOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgY2hvaWNlOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgY2hvaWNlMjogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIGNob2ljZXM6IGNoZWNrLmFycmF5LFxuICAgICAgICAgIHJlcXVpcmVkOiBjaGVjay5ib29sZWFuXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIC8vfSwge1xuICAgIC8vXHRuYW1lOiAnc2VsZWN0LWFzeW5jJyxcbiAgICAvL1x0dGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LXNlbGVjdC1hc3luYy5odG1sJylcbiAgfSwge1xuICAgIG5hbWU6ICdzd2l0Y2gnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpZWxkcy9seC1zd2l0Y2guaHRtbCcpLFxuICAgIGFwaUNoZWNrOiBmdW5jdGlvbiBhcGlDaGVjayhjaGVjaykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XG4gICAgICAgICAgbGFiZWw6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIGNoZWNrZWQ6IGNoZWNrLmJvb2xlYW4sXG4gICAgICAgICAgcmVxdWlyZWQ6IGNoZWNrLmJvb2xlYW5cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBuYW1lOiAndGV4dGFyZWEnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpZWxkcy9seC10ZXh0YXJlYS5odG1sJyksXG4gICAgYXBpQ2hlY2s6IGZ1bmN0aW9uIGFwaUNoZWNrKGNoZWNrKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcbiAgICAgICAgICBsYWJlbDogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIGljb246IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICB0aGVtZTogY2hlY2sub25lT2YoWydsaWdodCcsICdkYXJrJ10pLFxuICAgICAgICAgIHJlcXVpcmVkOiBjaGVjay5ib29sZWFuLFxuICAgICAgICAgIHJvd3M6IGNoZWNrLm51bWJlcixcbiAgICAgICAgICBjb2xzOiBjaGVjay5udW1iZXJcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH1dO1xuICB2YXIgV1JBUFBFUlMgPSBbe1xuICAgIG5hbWU6ICd3cmFwcGVyLWRpdicsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vd3JhcHBlcnMvbHgtd3JhcHBlci1kaXYuaHRtbCcpXG4gIH0sIHtcbiAgICBuYW1lOiAnd3JhcHBlci1lcnJvcnMnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3dyYXBwZXJzL2x4LXdyYXBwZXItZXJyb3JzLmh0bWwnKVxuICB9LCB7XG4gICAgbmFtZTogJ3dyYXBwZXItZmxleCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vd3JhcHBlcnMvbHgtd3JhcHBlci1mbGV4Lmh0bWwnKVxuICB9LCB7XG4gICAgbmFtZTogJ3dyYXBwZXItaW5saW5lJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93cmFwcGVycy9seC13cmFwcGVyLWlubGluZS5odG1sJylcbiAgfV07XG5cbiAgZnVuY3Rpb24gX3ByZWZpeGVyKG5hbWUpIHtcbiAgICByZXR1cm4gUFJFRklYICsgJy0nICsgbmFtZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF93cmFwcGVyVGVtcGxhdGVVcmwobmFtZSkge1xuICAgIHJldHVybiAnd3JhcHBlcnMvZm9ybWx5LXdyYXBwZXJzLScgKyBfcHJlZml4ZXIobmFtZSkgKyAnLmh0bWwnO1xuICB9XG5cbiAgZnVuY3Rpb24gX2ZpZWxkVGVtcGxhdGVVcmwobmFtZSkge1xuICAgIHJldHVybiAnZmllbGRzL2Zvcm1seS1maWVsZHMtJyArIF9wcmVmaXhlcihuYW1lKSArICcuaHRtbCc7XG4gIH1cblxuICAvKkBuZ0luamVjdCovXG4gIGZ1bmN0aW9uIHNldFdyYXBwZXJzKGZvcm1seUNvbmZpZ1Byb3ZpZGVyKSB7XG4gICAgaWYgKFVTSU5HX1RFTVBMQVRFUykge1xuICAgICAgV1JBUFBFUlMubWFwKGZ1bmN0aW9uICh3cmFwcGVyKSB7XG4gICAgICAgIGZvcm1seUNvbmZpZ1Byb3ZpZGVyLnNldFdyYXBwZXIoe1xuICAgICAgICAgIG5hbWU6IF9wcmVmaXhlcih3cmFwcGVyLm5hbWUpLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiBfd3JhcHBlclRlbXBsYXRlVXJsKHdyYXBwZXIubmFtZSlcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBfcHJlZml4ZXIod3JhcHBlci5uYW1lKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qQG5nSW5qZWN0Ki9cbiAgZnVuY3Rpb24gc2V0RmllbGRzKGZvcm1seUNvbmZpZywgZm9ybWx5QXBpQ2hlY2spIHtcbiAgICB2YXIgYyA9IGZvcm1seUFwaUNoZWNrO1xuICAgIGlmIChVU0lOR19URU1QTEFURVMpIHtcbiAgICAgIEZJRUxEUy5tYXAoZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICAgIGZvcm1seUNvbmZpZy5zZXRUeXBlKHtcbiAgICAgICAgICBuYW1lOiBfcHJlZml4ZXIoZmllbGQubmFtZSksXG4gICAgICAgICAgdGVtcGxhdGVVcmw6IF9maWVsZFRlbXBsYXRlVXJsKGZpZWxkLm5hbWUpLFxuICAgICAgICAgIGFwaUNoZWNrOiBmdW5jdGlvbiBhcGlDaGVjayhjKSB7XG4gICAgICAgICAgICByZXR1cm4gZmllbGQuYXBpQ2hlY2soYyk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBhcGlDaGVja0luc3RhbmNlOiBjXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0RGVmYXVsdHMoZm9ybWx5Q29uZmlnLCBmb3JtbHlWYWxpZGF0aW9uTWVzc2FnZXMpIHtcbiAgICBmb3JtbHlDb25maWcuZXh0cmFzLm5nTW9kZWxBdHRyc01hbmlwdWxhdG9yUHJlZmVyQm91bmQgPSB0cnVlO1xuICAgIFZBTElEQVRJT05fTUVTU0FHRVMubWFwKGZ1bmN0aW9uICh2YWxpZGF0aW9uKSB7XG4gICAgICBmb3JtbHlWYWxpZGF0aW9uTWVzc2FnZXMuYWRkU3RyaW5nTWVzc2FnZSh2YWxpZGF0aW9uLm5hbWUsIHZhbGlkYXRpb24ubWVzc2FnZSk7XG4gICAgfSk7XG4gICAgZm9ybWx5VmFsaWRhdGlvbk1lc3NhZ2VzLm1lc3NhZ2VzLnBhdHRlcm4gPSBmdW5jdGlvbiAodmlld1ZhbHVlLCBtb2RlbFZhbHVlKSB7XG4gICAgICByZXR1cm4gKHZpZXdWYWx1ZSB8fCBtb2RlbFZhbHVlKSArICcgaXMgaW52YWxpZCc7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhY2hlVGVtcGxhdGVzKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICAgaWYgKFVTSU5HX1RFTVBMQVRFUykge1xuICAgICAgRklFTERTLm1hcChmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgICAgJHRlbXBsYXRlQ2FjaGUucHV0KF9maWVsZFRlbXBsYXRlVXJsKGZpZWxkLm5hbWUpLCBmaWVsZC50ZW1wbGF0ZSk7XG4gICAgICB9KTtcbiAgICAgIFdSQVBQRVJTLm1hcChmdW5jdGlvbiAod3JhcHBlcikge1xuICAgICAgICAkdGVtcGxhdGVDYWNoZS5wdXQoX3dyYXBwZXJUZW1wbGF0ZVVybCh3cmFwcGVyLm5hbWUpLCB3cmFwcGVyLnRlbXBsYXRlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFuZ3VsYXIubW9kdWxlKE1PRFVMRV9OQU1FLCBbJ2Zvcm1seSddKS5jb25maWcoc2V0V3JhcHBlcnMpLnJ1bihzZXRGaWVsZHMpLnJ1bihzZXREZWZhdWx0cykucnVuKGNhY2hlVGVtcGxhdGVzKTtcbn0pKCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9pbmRleC5qc1xuICoqLyIsIihmdW5jdGlvbiAoKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgdmFyIFVTSU5HX1RFTVBMQVRFUyA9IHRydWU7XG4gIC8qIEN1c3RvbSB2YWxpZGF0aW9uIG1lc3NhZ2UgZGVmYXVsdHMgaGVyZSAqL1xuICB2YXIgVkFMSURBVElPTl9NRVNTQUdFUyA9IFt7XG4gICAgbmFtZTogJ3JlcXVpcmVkJywgbWVzc2FnZTogJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnXG4gIH0sIHtcbiAgICBuYW1lOiAnbWF4bGVuZ3RoJywgbWVzc2FnZTogJ1RoaXMgZmllbGQgaXMgdG9vIGxvbmcuJ1xuICB9LCB7XG4gICAgbmFtZTogJ21pbmxlbmd0aCcsIG1lc3NhZ2U6ICdUaGlzIGZpZWxkIGlzIHRvbyBzaG9ydC4nXG4gIH1dO1xuICAvKiBNb2R1bGUgVGVtcGxhdGVzICsgRGF0YSAqL1xuICB2YXIgTU9EVUxFX05BTUUgPSAnZm9ybWx5THVteCc7XG4gIHZhciBQUkVGSVggPSAnbHgnO1xuICB2YXIgRklFTERTID0gW3tcbiAgICBuYW1lOiAnY2hlY2tib3gnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpZWxkcy9seC1jaGVja2JveC5odG1sJyksXG4gICAgYXBpQ2hlY2s6IGZ1bmN0aW9uKGNoZWNrKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcbiAgICAgICAgICBsYWJlbDogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgY2hlY2tlZDogY2hlY2suYm9vbGVhbixcbiAgICAgICAgICByZXF1aXJlZDogY2hlY2suYm9vbGVhblxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIG5hbWU6ICdkYXRlLXBpY2tlcicsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LWRhdGUtcGlja2VyLmh0bWwnKSxcbiAgICBhcGlDaGVjazogZnVuY3Rpb24oY2hlY2spIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xuICAgICAgICAgICdsYWJlbCc6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICAncmVxdWlyZWQnOiBjaGVjay5ib29sZWFuXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAgbmFtZTogJ2Ryb3Bkb3duJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtZHJvcGRvd24uaHRtbCcpXG4gIH0sIHtcbiAgICBuYW1lOiAnZmxleCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LWZsZXguaHRtbCcpLFxuICAgIGFwaUNoZWNrOiBmdW5jdGlvbihjaGVjaykge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgfSwge1xuICAgIG5hbWU6ICdpbnB1dCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LWlucHV0Lmh0bWwnKSxcbiAgICBhcGlDaGVjazogZnVuY3Rpb24oY2hlY2spIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xuICAgICAgICAgIGxhYmVsOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgaWNvbjogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIGZpeGVkTGFiZWw6IGNoZWNrLmJvb2xlYW4sXG4gICAgICAgICAgZGlzYWJsZWQ6IGNoZWNrLmJvb2xlYW4sXG4gICAgICAgICAgY2xhc3NOYW1lOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgdGhlbWU6IGNoZWNrLm9uZU9mKFsnbGlnaHQnLCAnZGFyayddKSxcbiAgICAgICAgICB0eXBlOiBjaGVjay5vbmVPZihbJ3RleHQnLCAnbnVtYmVyJywgJ2VtYWlsJywgJ3Bhc3N3b3JkJywgJ3VybCcsICd0ZWwnXSksXG4gICAgICAgICAgcmVxdWlyZWQ6IGNoZWNrLmJvb2xlYW5cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBuYW1lOiAncmFkaW8nLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpZWxkcy9seC1yYWRpby5odG1sJyksXG4gICAgYXBpQ2hlY2s6IGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XG4gICAgICAgICAgbGFiZWw6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIG9wdGlvbnM6IGNoZWNrLmFycmF5T2Yoe1xuICAgICAgICAgICAgbmFtZTogY2hlY2suc3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6IGNoZWNrLm9uZU9mVHlwZShbY2hlY2suc3RyaW5nLCBjaGVjay5udW1iZXJdKSxcbiAgICAgICAgICAgIGRpc2FibGVkOiBjaGVjay5ib29sZWFuXG4gICAgICAgICAgfSksXG4gICAgICAgICAgaW5saW5lOiBjaGVjay5ib29sZWFuLFxuICAgICAgICAgIHJlcXVpcmVkOiBjaGVjay5ib29sZWFuXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAgbmFtZTogJ3NlbGVjdCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LXNlbGVjdC5odG1sJyksXG4gICAgYXBpQ2hlY2s6IGZ1bmN0aW9uKGNoZWNrKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcbiAgICAgICAgICBsYWJlbDogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgJ21pbi1sZW5ndGgnOiBjaGVjay5udW1iZXIsXG4gICAgICAgICAgJ2FsbG93LWNsZWFyJzogY2hlY2suYm9vbGVhbixcbiAgICAgICAgICAnbmctYXR0ci1tdWx0aXBsZSc6IGNoZWNrLmJvb2xlYW4sXG4gICAgICAgICAgc2VsZWN0ZWQ6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICBzZWxlY3RlZDI6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICBjaG9pY2U6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICBjaG9pY2UyOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgY2hvaWNlczogY2hlY2suYXJyYXksXG4gICAgICAgICAgcmVxdWlyZWQ6IGNoZWNrLmJvb2xlYW5cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gICAgLy99LCB7XG4gICAgLy9cdG5hbWU6ICdzZWxlY3QtYXN5bmMnLFxuICAgIC8vXHR0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtc2VsZWN0LWFzeW5jLmh0bWwnKVxuICB9LCB7XG4gICAgbmFtZTogJ3N3aXRjaCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LXN3aXRjaC5odG1sJyksXG4gICAgYXBpQ2hlY2s6IGZ1bmN0aW9uKGNoZWNrKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcbiAgICAgICAgICBsYWJlbDogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgY2hlY2tlZDogY2hlY2suYm9vbGVhbixcbiAgICAgICAgICByZXF1aXJlZDogY2hlY2suYm9vbGVhblxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIG5hbWU6ICd0ZXh0YXJlYScsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LXRleHRhcmVhLmh0bWwnKSxcbiAgICBhcGlDaGVjazogZnVuY3Rpb24oY2hlY2spIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xuICAgICAgICAgIGxhYmVsOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgaWNvbjogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIHRoZW1lOiBjaGVjay5vbmVPZihbJ2xpZ2h0JywgJ2RhcmsnXSksXG4gICAgICAgICAgcmVxdWlyZWQ6IGNoZWNrLmJvb2xlYW4sXG4gICAgICAgICAgcm93czogY2hlY2subnVtYmVyLFxuICAgICAgICAgIGNvbHM6IGNoZWNrLm51bWJlclxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfV07XG4gIHZhciBXUkFQUEVSUyA9IFt7XG4gICAgbmFtZTogJ3dyYXBwZXItZGl2JyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93cmFwcGVycy9seC13cmFwcGVyLWRpdi5odG1sJylcbiAgfSwge1xuICAgIG5hbWU6ICd3cmFwcGVyLWVycm9ycycsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vd3JhcHBlcnMvbHgtd3JhcHBlci1lcnJvcnMuaHRtbCcpXG4gIH0sIHtcbiAgICBuYW1lOiAnd3JhcHBlci1mbGV4JyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93cmFwcGVycy9seC13cmFwcGVyLWZsZXguaHRtbCcpXG4gIH0sIHtcbiAgICBuYW1lOiAnd3JhcHBlci1pbmxpbmUnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3dyYXBwZXJzL2x4LXdyYXBwZXItaW5saW5lLmh0bWwnKVxuICB9XTtcblxuICBmdW5jdGlvbiBfcHJlZml4ZXIobmFtZSkge1xuICAgIHJldHVybiBQUkVGSVggKyAnLScgKyBuYW1lO1xuICB9XG5cbiAgZnVuY3Rpb24gX3dyYXBwZXJUZW1wbGF0ZVVybChuYW1lKSB7XG4gICAgcmV0dXJuICd3cmFwcGVycy9mb3JtbHktd3JhcHBlcnMtJyArIF9wcmVmaXhlcihuYW1lKSArICcuaHRtbCc7XG4gIH1cblxuICBmdW5jdGlvbiBfZmllbGRUZW1wbGF0ZVVybChuYW1lKSB7XG4gICAgcmV0dXJuICdmaWVsZHMvZm9ybWx5LWZpZWxkcy0nICsgX3ByZWZpeGVyKG5hbWUpICsgJy5odG1sJztcbiAgfVxuXG4gIC8qQG5nSW5qZWN0Ki9cbiAgZnVuY3Rpb24gc2V0V3JhcHBlcnMoZm9ybWx5Q29uZmlnUHJvdmlkZXIpIHtcbiAgICBpZiAoVVNJTkdfVEVNUExBVEVTKSB7XG4gICAgICBXUkFQUEVSUy5tYXAoZnVuY3Rpb24gKHdyYXBwZXIpIHtcbiAgICAgICAgZm9ybWx5Q29uZmlnUHJvdmlkZXIuc2V0V3JhcHBlcih7XG4gICAgICAgICAgbmFtZTogX3ByZWZpeGVyKHdyYXBwZXIubmFtZSksXG4gICAgICAgICAgdGVtcGxhdGVVcmw6IF93cmFwcGVyVGVtcGxhdGVVcmwod3JhcHBlci5uYW1lKVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIF9wcmVmaXhlcih3cmFwcGVyLm5hbWUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLypAbmdJbmplY3QqL1xuICBmdW5jdGlvbiBzZXRGaWVsZHMoZm9ybWx5Q29uZmlnLCBmb3JtbHlBcGlDaGVjaykge1xuICAgIHZhciBjID0gZm9ybWx5QXBpQ2hlY2s7XG4gICAgaWYgKFVTSU5HX1RFTVBMQVRFUykge1xuICAgICAgICBGSUVMRFMubWFwKGZ1bmN0aW9uIChmaWVsZCkge1xuICAgICAgICAgIGZvcm1seUNvbmZpZy5zZXRUeXBlKHtcbiAgICAgICAgICAgIG5hbWU6IF9wcmVmaXhlcihmaWVsZC5uYW1lKSxcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiBfZmllbGRUZW1wbGF0ZVVybChmaWVsZC5uYW1lKSxcbiAgICAgICAgICAgIGFwaUNoZWNrOiBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICByZXR1cm4gZmllbGQuYXBpQ2hlY2soYyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXBpQ2hlY2tJbnN0YW5jZTogY1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgZnVuY3Rpb24gc2V0RGVmYXVsdHMoZm9ybWx5Q29uZmlnLCBmb3JtbHlWYWxpZGF0aW9uTWVzc2FnZXMpIHtcbiAgICBmb3JtbHlDb25maWcuZXh0cmFzLm5nTW9kZWxBdHRyc01hbmlwdWxhdG9yUHJlZmVyQm91bmQgPSB0cnVlO1xuICAgIFZBTElEQVRJT05fTUVTU0FHRVMubWFwKGZ1bmN0aW9uICh2YWxpZGF0aW9uKSB7XG4gICAgICBmb3JtbHlWYWxpZGF0aW9uTWVzc2FnZXMuYWRkU3RyaW5nTWVzc2FnZSh2YWxpZGF0aW9uLm5hbWUsIHZhbGlkYXRpb24ubWVzc2FnZSk7XG4gICAgfSk7XG4gICAgZm9ybWx5VmFsaWRhdGlvbk1lc3NhZ2VzLm1lc3NhZ2VzLnBhdHRlcm4gPSBmdW5jdGlvbiAodmlld1ZhbHVlLCBtb2RlbFZhbHVlKSB7XG4gICAgICByZXR1cm4gKHZpZXdWYWx1ZSB8fCBtb2RlbFZhbHVlKSArICcgaXMgaW52YWxpZCc7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhY2hlVGVtcGxhdGVzKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICAgaWYgKFVTSU5HX1RFTVBMQVRFUykge1xuICAgICAgRklFTERTLm1hcChmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgICAgJHRlbXBsYXRlQ2FjaGUucHV0KF9maWVsZFRlbXBsYXRlVXJsKGZpZWxkLm5hbWUpLCBmaWVsZC50ZW1wbGF0ZSk7XG4gICAgICB9KTtcbiAgICAgIFdSQVBQRVJTLm1hcChmdW5jdGlvbiAod3JhcHBlcikge1xuICAgICAgICAkdGVtcGxhdGVDYWNoZS5wdXQoX3dyYXBwZXJUZW1wbGF0ZVVybCh3cmFwcGVyLm5hbWUpLCB3cmFwcGVyLnRlbXBsYXRlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFuZ3VsYXIubW9kdWxlKE1PRFVMRV9OQU1FLCBbXG4gICAgJ2Zvcm1seSdcbiAgXSkuY29uZmlnKHNldFdyYXBwZXJzKS5ydW4oc2V0RmllbGRzKS5ydW4oc2V0RGVmYXVsdHMpLnJ1bihjYWNoZVRlbXBsYXRlcyk7XG59KCkpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vfi9qc2hpbnQtbG9hZGVyIS4vaW5kZXguanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY2hlY2tib3hcXFwiPlxcblxcdDxpbnB1dCBuZy1tb2RlbD1cXFwibW9kZWxbb3B0aW9ucy5rZXldXFxcIlxcblxcdCAgICAgICB0eXBlPVxcXCJjaGVja2JveFxcXCJcXG5cXHQgICAgICAgcm9sZT1cXFwiY2hlY2tib3hcXFwiXFxuXFx0ICAgICAgIGNsYXNzPVxcXCJjaGVja2JveF9faW5wdXRcXFwiPlxcblxcdDxsYWJlbCBmb3I9e3s6OmlkfX0gY2xhc3M9XFxcImNoZWNrYm94X19sYWJlbFxcXCIgYXJpYS1sYWJlbD1cXFwie3s6OnRvLmxhYmVsfX1cXFwiPnt7dG8ubGFiZWx9fTwvbGFiZWw+XFxuXFx0PHNwYW4gbmctaWY9XFxcIjo6dG8uZGVzY3JpcHRpb25cXFwiXFxuXFx0ICAgICAgY2xhc3M9XFxcImNoZWNrYm94X19oZWxwXFxcIj57ezo6dG8uZGVzY3JpcHRpb259fTwvc3Bhbj5cXG48L2Rpdj5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9maWVsZHMvbHgtY2hlY2tib3guaHRtbFxuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8bHgtZGF0ZS1waWNrZXIgbW9kZWw9XFxcIm1vZGVsW29wdGlvbnMua2V5XVxcXCJcXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cXFwie3s6OnRvLmxhYmVsfX1cXFwiXFxuICAgICAgICAgICAgICAgIGxhYmVsPVxcXCJ7ezo6dG8ubGFiZWx9fSB7ezo6dG8ucmVxdWlyZWQgPyAnKicgOiAnJ319XFxcIj5cXG48L2x4LWRhdGUtcGlja2VyPlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2ZpZWxkcy9seC1kYXRlLXBpY2tlci5odG1sXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxseC1kcm9wZG93bj5cXG5cXHQ8YnV0dG9uIGNsYXNzPVxcXCJidG5cXFwiIG5nLWNsYXNzPVxcXCI6OnRvLmNsYXNzTmFtZSB8fCAnYnRuLS1tIGJ0bi0tYmxhY2sgYnRuLS1mbGF0J1xcXCIgbHgtcmlwcGxlIGx4LWRyb3Bkb3duLXRvZ2dsZSBhcmlhLWxhYmVsPVxcXCJ7ezo6dG8ubGFiZWx9fVxcXCI+XFxuXFx0XFx0PGkgbmctaWY9XFxcIjo6dG8uaWNvblxcXCIgY2xhc3M9XFxcIm1kaSBtZGktZG90cy12ZXJ0aWNhbFxcXCI+PC9pPlxcblxcdFxcdHt7dG8ubGFiZWx9fVxcblxcdDwvYnV0dG9uPlxcblxcdDxseC1kcm9wZG93bi1tZW51PlxcblxcdFxcdDx1bD5cXG5cXHRcXHRcXHQ8bGkgbmctcmVwZWF0PVxcXCJvIGluIDo6dG8ub3B0aW9uc1xcXCI+XFxuXFx0XFx0XFx0XFx0PGEgY2xhc3M9XFxcImRyb3Bkb3duLWxpbmtcXFwiIG5nLWNsaWNrPVxcXCJvLmFjdGlvbigpXFxcIj57ezo6by50ZXh0fX08L2E+XFxuXFx0XFx0XFx0PC9saT5cXG5cXHRcXHQ8L3VsPlxcblxcdDwvbHgtZHJvcGRvd24tbWVudT5cXG48L2x4LWRyb3Bkb3duPlwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2ZpZWxkcy9seC1kcm9wZG93bi5odG1sXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImFmdGwtZmxleC1maWVsZHNcXFwiXFxuICAgICBtb2RlbD1cXFwiJHBhcmVudC5tb2RlbFxcXCJcXG4gICAgIGZsZXgtY29udGFpbmVyPVxcXCJ7ezo6dG8uZmxleC5jb250YWluZXIgfHwgJ3Jvdyd9fVxcXCJcXG4gICAgIGZsZXgtYWxpZ249XFxcInt7Ojp0by5mbGV4LmFsaWduIHx8ICdzcGFjZS1iZXR3ZWVuJ319XFxcIlxcbiAgICAgZmxleC1ndXR0ZXI9XFxcInt7Ojp0by5mbGV4Lmd1dHRlciB8fCAnMjQnfX1cXFwiPlxcblxcdDxkaXYgZm9ybWx5LWZpZWxkXFxuXFx0ICAgICBuZy1yZXBlYXQ9XFxcImZpZWxkIGluIHRvLmZpZWxkcyB0cmFjayBieSAkaW5kZXhcXFwiXFxuXFx0ICAgICBuZy1pZj1cXFwiIWZpZWxkLmhpZGVcXFwiXFxuXFx0ICAgICBjbGFzcz1cXFwiZm9ybWx5LWZpZWxkIHt7OjpmaWVsZC50eXBlID8gJ2Zvcm1seS1maWVsZC0nICsgZmllbGQudHlwZSA6ICcnfX1cXFwiXFxuXFx0ICAgICBuZy1zdHlsZT1cXFwiOjp0by5mbGV4LnN0eWxlXFxcIlxcblxcdCAgICAgb3B0aW9ucz1cXFwiZmllbGRcXFwiXFxuXFx0ICAgICBtb2RlbD1cXFwiZmllbGQubW9kZWwgfHwgbW9kZWxcXFwiXFxuXFx0ICAgICBmaWVsZHM9XFxcImZpZWxkc1xcXCJcXG5cXHQgICAgIGZvcm09XFxcImZvcm1cXFwiXFxuXFx0ICAgICBmb3JtLWlkPVxcXCJmb3JtSWRcXFwiXFxuXFx0ICAgICBmb3JtLXN0YXRlPVxcXCJvcHRpb25zLmZvcm1TdGF0ZVxcXCJcXG5cXHQgICAgIGluZGV4PVxcXCIkaW5kZXhcXFwiXFxuXFx0ICAgICBmbGV4LWl0ZW09XFxcInt7Ojp0by5mbGV4Lml0ZW0gfHwgJzEnfX1cXFwiXFxuXFx0ICAgICBmbGV4LW9yZGVyPVxcXCJ7ezo6dG8uZmxleC5vcmRlcn19XFxcIj5cXG5cXHQ8L2Rpdj5cXG48L2Rpdj5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9maWVsZHMvbHgtZmxleC5odG1sXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxseC10ZXh0LWZpZWxkIGRhdGEtbW9kZWw9XFxcIjo6bW9kZWxbb3B0aW9ucy5rZXldXFxcIlxcbiAgICAgICAgICAgICAgIGljb249XFxcInt7Ojp0by5pY29ufX1cXFwiXFxuICAgICAgICAgICAgICAgZml4ZWQtbGFiZWw9XFxcIjo6dG8uZml4ZWRMYWJlbFxcXCJcXG4gICAgICAgICAgICAgICB0aGVtZT1cXFwie3s6OnRvLnRoZW1lfX1cXFwiXFxuICAgICAgICAgICAgICAgZGlzYWJsZWQ9XFxcInRvLmRpc2FibGVkXFxcIlxcbiAgICAgICAgICAgICAgIGxhYmVsPVxcXCJ7e3RvLmxhYmVsfX0ge3s6OnRvLnJlcXVpcmVkID8gJyonIDogJyd9fVxcXCJcXG4gICAgICAgICAgICAgICB2YWxpZD1cXFwiZmMuJHZhbGlkICYmIGZjLiR0b3VjaGVkXFxcIlxcbiAgICAgICAgICAgICAgIGVycm9yPVxcXCJmYy4kaW52YWxpZCAmJiBmYy4kdG91Y2hlZFxcXCI+XFxuXFx0PGlucHV0IG5nLW1vZGVsPVxcXCJtb2RlbFtvcHRpb25zLmtleV1cXFwiXFxuXFx0ICAgICAgIHR5cGU9XFxcInt7Ojp0by50eXBlfX1cXFwiXFxuXFx0ICAgICAgIGFyaWEtbGFiZWw9XFxcInt7Ojp0by5sYWJlbH19XFxcIlxcblxcdCAgICAgICBuZy1jbGFzcz1cXFwiOjp0by5jbGFzc05hbWVcXFwiLz5cXG48L2x4LXRleHQtZmllbGQ+XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vZmllbGRzL2x4LWlucHV0Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwicmFkaW8tZ3JvdXBcXFwiPlxcblxcdDxoMyBuZy1pZj1cXFwiOjp0by5sYWJlbFxcXCI+PGxhYmVsPnt7Ojp0by5sYWJlbH19PC9sYWJlbD48L2gzPlxcblxcblxcdDxkaXYgY2xhc3M9XFxcInJhZGlvLWJ1dHRvblxcXCJcXG5cXHQgICAgIG5nLWNsYXNzPVxcXCJ7J3JhZGlvLWJ1dHRvbl9faW5saW5lJzogdG8uaW5saW5lfVxcXCJcXG5cXHQgICAgIG5nLXJlcGVhdD1cXFwibyBpbiB0by5vcHRpb25zXFxcIj5cXG5cXHRcXHQ8aW5wdXQgbmctbW9kZWw9XFxcIiRwYXJlbnQubW9kZWxbJHBhcmVudC5vcHRpb25zLmtleV1cXFwiXFxuXFx0XFx0ICAgICAgIGlkPVxcXCJ7ezo6aWQgKyAnXycgKyAkaW5kZXh9fVxcXCJcXG5cXHRcXHQgICAgICAgdHlwZT1cXFwicmFkaW9cXFwiXFxuXFx0XFx0ICAgICAgIG5nLWRpc2FibGVkPVxcXCI6Om8uZGlzYWJsZWRcXFwiXFxuXFx0XFx0ICAgICAgIGNsYXNzPVxcXCJyYWRpby1idXR0b25fX2lucHV0XFxcIlxcblxcdFxcdCAgICAgICBuZy12YWx1ZT1cXFwiOjpvLnZhbHVlXFxcIlxcblxcdFxcdCAgICAgICBhcmlhLWxhYmVsbGVkYnk9XFxcInt7OjppZCArICdfJyArICRpbmRleCArICdfcmFkaW9CdXR0b24nfX1cXFwiPlxcblxcdFxcdDxsYWJlbCBmb3I9XFxcInt7OjppZCArICdfJyArICRpbmRleH19XFxcIlxcblxcdFxcdCAgICAgICBjbGFzcz1cXFwicmFkaW8tYnV0dG9uX19sYWJlbFxcXCI+e3s6Om8ubmFtZX19PC9sYWJlbD5cXG4gICAgICA8c3BhbiBuZy1pZj1cXFwiOjpvLmRlc2NyaXB0aW9uXFxcIiBjbGFzcz1cXFwicmFkaW8tYnV0dG9uX19oZWxwXFxcIj57ezo6by5kZXNjcmlwdGlvbn19XFxuICAgICAgPC9zcGFuPlxcblxcdDwvZGl2PlxcbjwvZGl2PlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2ZpZWxkcy9seC1yYWRpby5odG1sXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImFmdGwtc2VsZWN0XFxcIj5cXG5cXHQ8aDMgbmctaWY9XFxcIjo6dG8ubGFiZWxcXFwiPjxsYWJlbD5cXG5cXHRcXHR7e3RvLmxhYmVsfX0ge3s6OnRvLnJlcXVpcmVkID8gJyonIDogJyd9fVxcblxcdDwvbGFiZWw+PC9oMz5cXG5cXHQ8bHgtc2VsZWN0IG5nLW1vZGVsPVxcXCJtb2RlbFtvcHRpb25zLmtleV1cXFwiXFxuXFx0ICAgICAgICAgICBjaG9pY2VzPVxcXCJ0by5vcHRpb25zXFxcIlxcblxcdCAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcInt7Ojp0by5wbGFjZWhvbGRlcn19XFxcIlxcblxcdCAgICAgICAgICAgbWluLWxlbmd0aD1cXFwiOjp0by5taW5MZW5ndGhcXFwiXFxuXFx0ICAgICAgICAgICBhbGxvdy1jbGVhcj1cXFwiOjp0by5hbGxvd0NsZWFyXFxcIlxcblxcdCAgICAgICAgICAgbmctYXR0ci1tdWx0aXBsZT1cXFwie3s6OnRvLm11bHRpcGxlfX1cXFwiPlxcblxcblxcdFxcdDxseC1zZWxlY3Qtc2VsZWN0ZWQ+XFxuXFx0XFx0XFx0e3skc2VsZWN0ZWRbdG8uc2VsZWN0ZWRdIHx8ICRzZWxlY3RlZH19IHt7Ojp0by5zZWxlY3RlZDIgPyAnIC0gJyArXFxuXFx0XFx0XFx0JHNlbGVjdGVkW3RvLnNlbGVjdGVkMl0gOiAnJ319XFxuXFx0XFx0PC9seC1zZWxlY3Qtc2VsZWN0ZWQ+XFxuXFxuXFx0XFx0PGx4LXNlbGVjdC1jaG9pY2VzPlxcblxcdFxcdFxcdHt7JGNob2ljZVt0by5jaG9pY2VdIHx8ICRjaG9pY2V9fSB7ezo6dG8uY2hvaWNlMiA/ICcgLSAnICtcXG5cXHRcXHRcXHQkY2hvaWNlW3RvLmNob2ljZTJdIDogJyd9fVxcblxcdFxcdDwvbHgtc2VsZWN0LWNob2ljZXM+XFxuXFxuXFx0PC9seC1zZWxlY3Q+XFxuPC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vZmllbGRzL2x4LXNlbGVjdC5odG1sXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInN3aXRjaFxcXCI+XFxuXFx0PGlucHV0IG5nLW1vZGVsPVxcXCJtb2RlbFtvcHRpb25zLmtleV1cXFwiXFxuXFx0ICAgICAgIHR5cGU9XFxcImNoZWNrYm94XFxcIlxcblxcdCAgICAgICByb2xlPVxcXCJjaGVja2JveFxcXCJcXG5cXHQgICAgICAgY2xhc3M9XFxcInN3aXRjaF9faW5wdXRcXFwiLz5cXG5cXHQ8bGFiZWwgZm9yPVxcXCJ7ezo6aWR9fVxcXCIgY2xhc3M9XFxcInN3aXRjaF9fbGFiZWxcXFwiIGFyaWEtbGFiZWw9XFxcInt7Ojp0by5sYWJlbH19XFxcIj57e3RvLmxhYmVsfX08L2xhYmVsPlxcblxcdDxzcGFuIG5nLWlmPVxcXCI6OnRvLmRlc2NyaXB0aW9uXFxcIlxcblxcdCAgICAgIGNsYXNzPVxcXCJzd2l0Y2hfX2hlbHBcXFwiPnt7Ojp0by5kZXNjcmlwdGlvbn19PC9zcGFuPlxcbjwvZGl2PlxcblxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2ZpZWxkcy9seC1zd2l0Y2guaHRtbFxuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8bHgtdGV4dC1maWVsZCBkYXRhLW1vZGVsPVxcXCI6Om1vZGVsW29wdGlvbnMua2V5XVxcXCJcXG4gICAgICAgICAgICAgICBmaXhlZC1sYWJlbD1cXFwiOjp0by5maXhlZExhYmVsXFxcIlxcbiAgICAgICAgICAgICAgIGljb249XFxcInt7Ojp0by5pY29ufX1cXFwiXFxuICAgICAgICAgICAgICAgdGhlbWU9XFxcInt7Ojp0by50aGVtZX19XFxcIlxcbiAgICAgICAgICAgICAgIGxhYmVsPVxcXCJ7e3RvLmxhYmVsfX0ge3s6OnRvLnJlcXVpcmVkID8gJyonIDogJyd9fVxcXCJcXG4gICAgICAgICAgICAgICB2YWxpZD1cXFwiZmMuJHZhbGlkICYmIGZjLiR0b3VjaGVkXFxcIlxcbiAgICAgICAgICAgICAgIGVycm9yPVxcXCJmYy4kaW52YWxpZCAmJiBmYy4kdG91Y2hlZFxcXCI+XFxuICAgIDx0ZXh0YXJlYSBuZy1tb2RlbD1cXFwibW9kZWxbb3B0aW9ucy5rZXldXFxcIlxcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cXFwie3s6OnRvLmxhYmVsfX1cXFwiXFxuICAgICAgICAgICAgICByb3dzPVxcXCJ7ezo6dG8ucm93c319XFxcIiBjb2xzPVxcXCJ7ezo6dG8uY29sc319XFxcIj5cXG4gICAgPC90ZXh0YXJlYT5cXG48L2x4LXRleHQtZmllbGQ+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vZmllbGRzL2x4LXRleHRhcmVhLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBuZy1jbGFzcz1cXFwiOjp0by5kaXYuY2xhc3NOYW1lXFxcIlxcblxcdG5nLXN0eWxlPVxcXCI6OnRvLmRpdi5zdHlsZVxcXCI+XFxuXFx0PGZvcm1seS10cmFuc2NsdWRlPjwvZm9ybWx5LXRyYW5zY2x1ZGU+XFxuPC9kaXY+XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vd3JhcHBlcnMvbHgtd3JhcHBlci1kaXYuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj5cXG5cXHQ8Zm9ybWx5LXRyYW5zY2x1ZGU+PC9mb3JtbHktdHJhbnNjbHVkZT5cXG5cXHQ8dWwgY2xhc3M9XFxcImZvcm0tZXJyb3JcXFwiIG5nLW1lc3NhZ2VzPVxcXCJmYy4kZXJyb3JcXFwiXFxuXFx0ICAgIG5nLXNob3c9XFxcIm9wdGlvbnMudmFsaWRhdGlvbi5lcnJvckV4aXN0c0FuZFNob3VsZEJlVmlzaWJsZVxcXCI+XFxuXFx0XFx0PGxpIG5nLXJlcGVhdD1cXFwiKG5hbWUsIG1lc3NhZ2UpIGluIDo6b3B0aW9ucy52YWxpZGF0aW9uLm1lc3NhZ2VzXFxcIlxcblxcdFxcdCAgICBuZy1tZXNzYWdlPXt7OjpuYW1lfX0+XFxuXFx0XFx0XFx0e3ttZXNzYWdlKGZjLiR2aWV3VmFsdWUsIGZjLiRtb2RlbFZhbHVlLCB0aGlzKX19XFxuXFx0XFx0PC9saT5cXG5cXHQ8L3VsPlxcblxcdDxzcGFuIGNsYXNzPVxcXCJmb3JtLXBlbmRpbmdcXFwiXFxuXFx0ICAgICAgbmctaWY9XFxcInRvLnBlbmRpbmcgJiYgZmMuJHBlbmRpbmcgJiYgZmMuJHRvdWNoZWRcXFwiPlxcblxcdHt7Ojp0by5wZW5kaW5nIHx8ICdDaGVja2luZy4uLid9fVxcblxcdDwvc3Bhbj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi93cmFwcGVycy9seC13cmFwcGVyLWVycm9ycy5odG1sXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IG5nLWNsYXNzPVxcXCI6OnRvLmRpdi5jbGFzc05hbWVcXFwiXFxuICAgICBuZy1zdHlsZT1cXFwiOjp0by5kaXYuc3R5bGUgfHwge31cXFwiXFxuICAgICBmbGV4LWl0ZW09XFxcIjo6dG8uZmxleC5pdGVtXFxcIlxcbiAgICAgZmxleC1vcmRlcj1cXFwiOjp0by5mbGV4LW9yZGVyXFxcIj5cXG5cXHQ8Zm9ybWx5LXRyYW5zY2x1ZGU+PC9mb3JtbHktdHJhbnNjbHVkZT5cXG48L2Rpdj5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi93cmFwcGVycy9seC13cmFwcGVyLWZsZXguaHRtbFxuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNwYW4gY2xhc3M9XFxcImlubGluZS13cmFwcGVyXFxcIj5cXG5cXHQ8c3BhbiBjbGFzcz1cXFwiaW5saW5lLS1iZWZvcmVcXFwiPnt7Ojp0by5pbmxpbmUuYmVmb3JlfX08L3NwYW4+XFxuXFx0PHNwYW4gY2xhc3M9XFxcImlubGluZS0tY29udGVudFxcXCI+XFxuXFx0XFx0PGZvcm1seS10cmFuc2NsdWRlPjwvZm9ybWx5LXRyYW5zY2x1ZGU+XFxuXFx0PC9zcGFuPlxcblxcdDxzcGFuIGNsYXNzPVxcXCJpbmxpbmUtLWFmdGVyXFxcIj57ezo6dG8uaW5saW5lLmFmdGVyfX08L3NwYW4+XFxuPC9zcGFuPlwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3dyYXBwZXJzL2x4LXdyYXBwZXItaW5saW5lLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==