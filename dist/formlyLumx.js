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
	      return {};
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
	          templateUrl: _fieldTemplateUrl(field.name),
	          apiCheck: function apiCheck(c) {
	            return field.apiCheck;
	          }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTBmOTYwMGU0Zjg4N2ZlOWY5MjUiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanM/MzA5MCIsIndlYnBhY2s6Ly8vLi9maWVsZHMvbHgtY2hlY2tib3guaHRtbCIsIndlYnBhY2s6Ly8vLi9maWVsZHMvbHgtZGF0ZS1waWNrZXIuaHRtbCIsIndlYnBhY2s6Ly8vLi9maWVsZHMvbHgtZmxleC5odG1sIiwid2VicGFjazovLy8uL2ZpZWxkcy9seC1pbnB1dC5odG1sIiwid2VicGFjazovLy8uL2ZpZWxkcy9seC1yYWRpby5odG1sIiwid2VicGFjazovLy8uL2ZpZWxkcy9seC1zZWxlY3QuaHRtbCIsIndlYnBhY2s6Ly8vLi9maWVsZHMvbHgtc3dpdGNoLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vZmllbGRzL2x4LXRleHRhcmVhLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vd3JhcHBlcnMvbHgtd3JhcHBlci1kaXYuaHRtbCIsIndlYnBhY2s6Ly8vLi93cmFwcGVycy9seC13cmFwcGVyLWVycm9ycy5odG1sIiwid2VicGFjazovLy8uL3dyYXBwZXJzL2x4LXdyYXBwZXItZmxleC5odG1sIiwid2VicGFjazovLy8uL3dyYXBwZXJzL2x4LXdyYXBwZXItaW5saW5lLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0E7O0FDQUEsRUFBQyxZQUFZO0dBQ1g7R0FDQSxJQUFJLGtCQUFrQjs7R0FFdEIsSUFBSSxzQkFBc0IsQ0FBQztLQUN6QixNQUFNLFlBQVksU0FBUztNQUMxQjtLQUNE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b0NBQW9DLHlCQUF5QiwwQkFBMEIsK0lBQStJLGtEQUFrRCw0UUFBNFEsdUJBQXVCLDBCQUEwQixpQkFBaUIsc0I7Ozs7OztBQ0Fyd0IsK0ZBQThGLFdBQVcsNkVBQTZFLFlBQVksc0VBQXNFLFVBQVUsR0FBRywwQkFBMEIseUtBQXlLLFdBQVcsNEJBQTRCLFlBQVksNkQ7Ozs7OztBQ0EzZ0Isb0ZBQW1GLFlBQVksbUVBQW1FLGtDQUFrQyx5SEFBeUgscUJBQXFCLG9MQUFvTCxzQ0FBc0Msd0JBQXdCLHFCQUFxQiwrQ0FBK0MsVUFBVSwrRUFBK0UsaUJBQWlCLG9DOzs7Ozs7QUNBbHZCLDBGQUF5RixVQUFVLEdBQUcsMEJBQTBCLG1JQUFtSSxrQkFBa0IsZ0lBQWdJLGVBQWUseUNBQXlDLHFDQUFxQyxHQUFHLDhEQUE4RCxnRUFBZ0UsK0JBQStCLEdBQUcsd0RBQXdELHVEOzs7Ozs7QUNBN3NCLGtNQUFpTSxNQUFNLDBDQUEwQyxZQUFZLEtBQUssVUFBVSwrRUFBK0Usa0JBQWtCLG9COzs7Ozs7QUNBN1csK0lBQThJLFdBQVcsNkJBQTZCLFlBQVksNkJBQTZCLFVBQVUsR0FBRywwQkFBMEIseUxBQXlMLFlBQVksMkJBQTJCLFdBQVcsWUFBWSxXQUFXLHlDOzs7Ozs7QUNBeGdCLDJJOzs7Ozs7QUNBQSw2UkFBNFIsUUFBUSxXQUFXLDhDQUE4Qyx1SEFBdUgsK0JBQStCLHNCOzs7Ozs7QUNBbmYsNkZBQTRGLCtIOzs7Ozs7QUNBNUYsdUZBQXNGLG9CQUFvQix1SUFBdUksbUJBQW1CLGlCIiwiZmlsZSI6ImZvcm1seUx1bXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDUwZjk2MDBlNGY4ODdmZTlmOTI1XG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG4oZnVuY3Rpb24gKCkge1xuICAndXNlIHN0cmljdCc7XG4gIHZhciBVU0lOR19URU1QTEFURVMgPSB0cnVlO1xuICAvKiBDdXN0b20gdmFsaWRhdGlvbiBtZXNzYWdlIGRlZmF1bHRzIGhlcmUgKi9cbiAgdmFyIFZBTElEQVRJT05fTUVTU0FHRVMgPSBbe1xuICAgIG5hbWU6ICdyZXF1aXJlZCcsIG1lc3NhZ2U6ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJ1xuICB9LCB7XG4gICAgbmFtZTogJ21heGxlbmd0aCcsIG1lc3NhZ2U6ICdUaGlzIGZpZWxkIGlzIHRvbyBsb25nLidcbiAgfSwge1xuICAgIG5hbWU6ICdtaW5sZW5ndGgnLCBtZXNzYWdlOiAnVGhpcyBmaWVsZCBpcyB0b28gc2hvcnQuJ1xuICB9XTtcbiAgLyogTW9kdWxlIFRlbXBsYXRlcyArIERhdGEgKi9cbiAgdmFyIE1PRFVMRV9OQU1FID0gJ2Zvcm1seUx1bXgnO1xuICB2YXIgUFJFRklYID0gJ2x4JztcbiAgdmFyIEZJRUxEUyA9IFt7XG4gICAgbmFtZTogJ2NoZWNrYm94JyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtY2hlY2tib3guaHRtbCcpLFxuICAgIGFwaUNoZWNrOiBmdW5jdGlvbiBhcGlDaGVjayhjaGVjaykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XG4gICAgICAgICAgbGFiZWw6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIGNoZWNrZWQ6IGNoZWNrLmJvb2xlYW4sXG4gICAgICAgICAgcmVxdWlyZWQ6IGNoZWNrLmJvb2xlYW5cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBuYW1lOiAnZGF0ZS1waWNrZXInLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpZWxkcy9seC1kYXRlLXBpY2tlci5odG1sJyksXG4gICAgYXBpQ2hlY2s6IGZ1bmN0aW9uIGFwaUNoZWNrKGNoZWNrKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcbiAgICAgICAgICAnbGFiZWwnOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgJ3JlcXVpcmVkJzogY2hlY2suYm9vbGVhblxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgICAvL30sIHtcbiAgICAvLyAgbmFtZTogJ2Ryb3Bkb3duJyxcbiAgICAvLyAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LWRyb3Bkb3duLmh0bWwnKVxuICB9LCB7XG4gICAgbmFtZTogJ2ZsZXgnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpZWxkcy9seC1mbGV4Lmh0bWwnKSxcbiAgICBhcGlDaGVjazogZnVuY3Rpb24gYXBpQ2hlY2soY2hlY2spIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gIH0sIHtcbiAgICBuYW1lOiAnaW5wdXQnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpZWxkcy9seC1pbnB1dC5odG1sJyksXG4gICAgYXBpQ2hlY2s6IGZ1bmN0aW9uIGFwaUNoZWNrKGNoZWNrKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcbiAgICAgICAgICBsYWJlbDogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIGljb246IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICBmaXhlZExhYmVsOiBjaGVjay5ib29sZWFuLFxuICAgICAgICAgIGRpc2FibGVkOiBjaGVjay5ib29sZWFuLFxuICAgICAgICAgIGNsYXNzTmFtZTogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIHRoZW1lOiBjaGVjay5vbmVPZihbJ2xpZ2h0JywgJ2RhcmsnXSksXG4gICAgICAgICAgdHlwZTogY2hlY2sub25lT2YoWyd0ZXh0JywgJ251bWJlcicsICdlbWFpbCcsICdwYXNzd29yZCcsICd1cmwnLCAndGVsJ10pLFxuICAgICAgICAgIHJlcXVpcmVkOiBjaGVjay5ib29sZWFuXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAgbmFtZTogJ3JhZGlvJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtcmFkaW8uaHRtbCcpLFxuICAgIGFwaUNoZWNrOiBmdW5jdGlvbiBhcGlDaGVjayhjaGVjaykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XG4gICAgICAgICAgbGFiZWw6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIG9wdGlvbnM6IGNoZWNrLmFycmF5T2Yoe1xuICAgICAgICAgICAgbmFtZTogY2hlY2suc3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6IGNoZWNrLm9uZU9mVHlwZShbY2hlY2suc3RyaW5nLCBjaGVjay5udW1iZXJdKSxcbiAgICAgICAgICAgIGRpc2FibGVkOiBjaGVjay5ib29sZWFuXG4gICAgICAgICAgfSksXG4gICAgICAgICAgaW5saW5lOiBjaGVjay5ib29sZWFuLFxuICAgICAgICAgIHJlcXVpcmVkOiBjaGVjay5ib29sZWFuXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAgbmFtZTogJ3NlbGVjdCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LXNlbGVjdC5odG1sJyksXG4gICAgYXBpQ2hlY2s6IGZ1bmN0aW9uIGFwaUNoZWNrKGNoZWNrKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcbiAgICAgICAgICBsYWJlbDogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgJ21pbi1sZW5ndGgnOiBjaGVjay5udW1iZXIsXG4gICAgICAgICAgJ2FsbG93LWNsZWFyJzogY2hlY2suYm9vbGVhbixcbiAgICAgICAgICAnbmctYXR0ci1tdWx0aXBsZSc6IGNoZWNrLmJvb2xlYW4sXG4gICAgICAgICAgc2VsZWN0ZWQ6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICBzZWxlY3RlZDI6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICBjaG9pY2U6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICBjaG9pY2UyOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgY2hvaWNlczogY2hlY2suYXJyYXksXG4gICAgICAgICAgcmVxdWlyZWQ6IGNoZWNrLmJvb2xlYW5cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gICAgLy99LCB7XG4gICAgLy9cdG5hbWU6ICdzZWxlY3QtYXN5bmMnLFxuICAgIC8vXHR0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtc2VsZWN0LWFzeW5jLmh0bWwnKVxuICB9LCB7XG4gICAgbmFtZTogJ3N3aXRjaCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LXN3aXRjaC5odG1sJyksXG4gICAgYXBpQ2hlY2s6IGZ1bmN0aW9uIGFwaUNoZWNrKGNoZWNrKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcbiAgICAgICAgICBsYWJlbDogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgY2hlY2tlZDogY2hlY2suYm9vbGVhbixcbiAgICAgICAgICByZXF1aXJlZDogY2hlY2suYm9vbGVhblxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIG5hbWU6ICd0ZXh0YXJlYScsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LXRleHRhcmVhLmh0bWwnKSxcbiAgICBhcGlDaGVjazogZnVuY3Rpb24gYXBpQ2hlY2soY2hlY2spIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xuICAgICAgICAgIGxhYmVsOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgaWNvbjogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIHRoZW1lOiBjaGVjay5vbmVPZihbJ2xpZ2h0JywgJ2RhcmsnXSksXG4gICAgICAgICAgcmVxdWlyZWQ6IGNoZWNrLmJvb2xlYW4sXG4gICAgICAgICAgcm93czogY2hlY2subnVtYmVyLFxuICAgICAgICAgIGNvbHM6IGNoZWNrLm51bWJlclxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfV07XG4gIHZhciBXUkFQUEVSUyA9IFt7XG4gICAgbmFtZTogJ3dyYXBwZXItZGl2JyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93cmFwcGVycy9seC13cmFwcGVyLWRpdi5odG1sJylcbiAgfSwge1xuICAgIG5hbWU6ICd3cmFwcGVyLWVycm9ycycsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vd3JhcHBlcnMvbHgtd3JhcHBlci1lcnJvcnMuaHRtbCcpXG4gIH0sIHtcbiAgICBuYW1lOiAnd3JhcHBlci1mbGV4JyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93cmFwcGVycy9seC13cmFwcGVyLWZsZXguaHRtbCcpXG4gIH0sIHtcbiAgICBuYW1lOiAnd3JhcHBlci1pbmxpbmUnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3dyYXBwZXJzL2x4LXdyYXBwZXItaW5saW5lLmh0bWwnKVxuICB9XTtcblxuICBmdW5jdGlvbiBfcHJlZml4ZXIobmFtZSkge1xuICAgIHJldHVybiBQUkVGSVggKyAnLScgKyBuYW1lO1xuICB9XG5cbiAgZnVuY3Rpb24gX3dyYXBwZXJUZW1wbGF0ZVVybChuYW1lKSB7XG4gICAgcmV0dXJuICd3cmFwcGVycy9mb3JtbHktd3JhcHBlcnMtJyArIF9wcmVmaXhlcihuYW1lKSArICcuaHRtbCc7XG4gIH1cblxuICBmdW5jdGlvbiBfZmllbGRUZW1wbGF0ZVVybChuYW1lKSB7XG4gICAgcmV0dXJuICdmaWVsZHMvZm9ybWx5LWZpZWxkcy0nICsgX3ByZWZpeGVyKG5hbWUpICsgJy5odG1sJztcbiAgfVxuXG4gIC8qQG5nSW5qZWN0Ki9cbiAgZnVuY3Rpb24gc2V0V3JhcHBlcnMoZm9ybWx5Q29uZmlnUHJvdmlkZXIpIHtcbiAgICBpZiAoVVNJTkdfVEVNUExBVEVTKSB7XG4gICAgICBXUkFQUEVSUy5tYXAoZnVuY3Rpb24gKHdyYXBwZXIpIHtcbiAgICAgICAgZm9ybWx5Q29uZmlnUHJvdmlkZXIuc2V0V3JhcHBlcih7XG4gICAgICAgICAgbmFtZTogX3ByZWZpeGVyKHdyYXBwZXIubmFtZSksXG4gICAgICAgICAgdGVtcGxhdGVVcmw6IF93cmFwcGVyVGVtcGxhdGVVcmwod3JhcHBlci5uYW1lKVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIF9wcmVmaXhlcih3cmFwcGVyLm5hbWUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLypAbmdJbmplY3QqL1xuICBmdW5jdGlvbiBzZXRGaWVsZHMoZm9ybWx5Q29uZmlnLCBmb3JtbHlBcGlDaGVjaykge1xuICAgIHZhciBjID0gZm9ybWx5QXBpQ2hlY2s7XG4gICAgaWYgKFVTSU5HX1RFTVBMQVRFUykge1xuICAgICAgRklFTERTLm1hcChmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgICAgZm9ybWx5Q29uZmlnLnNldFR5cGUoe1xuICAgICAgICAgIG5hbWU6IF9wcmVmaXhlcihmaWVsZC5uYW1lKSxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogX2ZpZWxkVGVtcGxhdGVVcmwoZmllbGQubmFtZSksXG4gICAgICAgICAgYXBpQ2hlY2s6IGZ1bmN0aW9uIGFwaUNoZWNrKGMpIHtcbiAgICAgICAgICAgIHJldHVybiBmaWVsZC5hcGlDaGVjaztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0RGVmYXVsdHMoZm9ybWx5Q29uZmlnLCBmb3JtbHlWYWxpZGF0aW9uTWVzc2FnZXMpIHtcbiAgICBmb3JtbHlDb25maWcuZXh0cmFzLm5nTW9kZWxBdHRyc01hbmlwdWxhdG9yUHJlZmVyQm91bmQgPSB0cnVlO1xuICAgIFZBTElEQVRJT05fTUVTU0FHRVMubWFwKGZ1bmN0aW9uICh2YWxpZGF0aW9uKSB7XG4gICAgICBmb3JtbHlWYWxpZGF0aW9uTWVzc2FnZXMuYWRkU3RyaW5nTWVzc2FnZSh2YWxpZGF0aW9uLm5hbWUsIHZhbGlkYXRpb24ubWVzc2FnZSk7XG4gICAgfSk7XG4gICAgZm9ybWx5VmFsaWRhdGlvbk1lc3NhZ2VzLm1lc3NhZ2VzLnBhdHRlcm4gPSBmdW5jdGlvbiAodmlld1ZhbHVlLCBtb2RlbFZhbHVlKSB7XG4gICAgICByZXR1cm4gKHZpZXdWYWx1ZSB8fCBtb2RlbFZhbHVlKSArICcgaXMgaW52YWxpZCc7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhY2hlVGVtcGxhdGVzKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICAgaWYgKFVTSU5HX1RFTVBMQVRFUykge1xuICAgICAgRklFTERTLm1hcChmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgICAgJHRlbXBsYXRlQ2FjaGUucHV0KF9maWVsZFRlbXBsYXRlVXJsKGZpZWxkLm5hbWUpLCBmaWVsZC50ZW1wbGF0ZSk7XG4gICAgICB9KTtcbiAgICAgIFdSQVBQRVJTLm1hcChmdW5jdGlvbiAod3JhcHBlcikge1xuICAgICAgICAkdGVtcGxhdGVDYWNoZS5wdXQoX3dyYXBwZXJUZW1wbGF0ZVVybCh3cmFwcGVyLm5hbWUpLCB3cmFwcGVyLnRlbXBsYXRlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFuZ3VsYXIubW9kdWxlKE1PRFVMRV9OQU1FLCBbJ2Zvcm1seSddKS5jb25maWcoc2V0V3JhcHBlcnMpLnJ1bihzZXRGaWVsZHMpLnJ1bihzZXREZWZhdWx0cykucnVuKGNhY2hlVGVtcGxhdGVzKTtcbn0pKCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9pbmRleC5qc1xuICoqLyIsIihmdW5jdGlvbiAoKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgdmFyIFVTSU5HX1RFTVBMQVRFUyA9IHRydWU7XG4gIC8qIEN1c3RvbSB2YWxpZGF0aW9uIG1lc3NhZ2UgZGVmYXVsdHMgaGVyZSAqL1xuICB2YXIgVkFMSURBVElPTl9NRVNTQUdFUyA9IFt7XG4gICAgbmFtZTogJ3JlcXVpcmVkJywgbWVzc2FnZTogJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnXG4gIH0sIHtcbiAgICBuYW1lOiAnbWF4bGVuZ3RoJywgbWVzc2FnZTogJ1RoaXMgZmllbGQgaXMgdG9vIGxvbmcuJ1xuICB9LCB7XG4gICAgbmFtZTogJ21pbmxlbmd0aCcsIG1lc3NhZ2U6ICdUaGlzIGZpZWxkIGlzIHRvbyBzaG9ydC4nXG4gIH1dO1xuICAvKiBNb2R1bGUgVGVtcGxhdGVzICsgRGF0YSAqL1xuICB2YXIgTU9EVUxFX05BTUUgPSAnZm9ybWx5THVteCc7XG4gIHZhciBQUkVGSVggPSAnbHgnO1xuICB2YXIgRklFTERTID0gW3tcbiAgICBuYW1lOiAnY2hlY2tib3gnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpZWxkcy9seC1jaGVja2JveC5odG1sJyksXG4gICAgYXBpQ2hlY2s6IGZ1bmN0aW9uKGNoZWNrKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcbiAgICAgICAgICBsYWJlbDogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgY2hlY2tlZDogY2hlY2suYm9vbGVhbixcbiAgICAgICAgICByZXF1aXJlZDogY2hlY2suYm9vbGVhblxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIG5hbWU6ICdkYXRlLXBpY2tlcicsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LWRhdGUtcGlja2VyLmh0bWwnKSxcbiAgICBhcGlDaGVjazogZnVuY3Rpb24oY2hlY2spIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xuICAgICAgICAgICdsYWJlbCc6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICAncmVxdWlyZWQnOiBjaGVjay5ib29sZWFuXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAvL30sIHtcbiAgLy8gIG5hbWU6ICdkcm9wZG93bicsXG4gIC8vICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtZHJvcGRvd24uaHRtbCcpXG4gIH0sIHtcbiAgICBuYW1lOiAnZmxleCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LWZsZXguaHRtbCcpLFxuICAgIGFwaUNoZWNrOiBmdW5jdGlvbihjaGVjaykge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgfSwge1xuICAgIG5hbWU6ICdpbnB1dCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LWlucHV0Lmh0bWwnKSxcbiAgICBhcGlDaGVjazogZnVuY3Rpb24oY2hlY2spIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xuICAgICAgICAgIGxhYmVsOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgaWNvbjogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIGZpeGVkTGFiZWw6IGNoZWNrLmJvb2xlYW4sXG4gICAgICAgICAgZGlzYWJsZWQ6IGNoZWNrLmJvb2xlYW4sXG4gICAgICAgICAgY2xhc3NOYW1lOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgdGhlbWU6IGNoZWNrLm9uZU9mKFsnbGlnaHQnLCAnZGFyayddKSxcbiAgICAgICAgICB0eXBlOiBjaGVjay5vbmVPZihbJ3RleHQnLCAnbnVtYmVyJywgJ2VtYWlsJywgJ3Bhc3N3b3JkJywgJ3VybCcsICd0ZWwnXSksXG4gICAgICAgICAgcmVxdWlyZWQ6IGNoZWNrLmJvb2xlYW5cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBuYW1lOiAncmFkaW8nLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpZWxkcy9seC1yYWRpby5odG1sJyksXG4gICAgYXBpQ2hlY2s6IGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XG4gICAgICAgICAgbGFiZWw6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIG9wdGlvbnM6IGNoZWNrLmFycmF5T2Yoe1xuICAgICAgICAgICAgbmFtZTogY2hlY2suc3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6IGNoZWNrLm9uZU9mVHlwZShbY2hlY2suc3RyaW5nLCBjaGVjay5udW1iZXJdKSxcbiAgICAgICAgICAgIGRpc2FibGVkOiBjaGVjay5ib29sZWFuXG4gICAgICAgICAgfSksXG4gICAgICAgICAgaW5saW5lOiBjaGVjay5ib29sZWFuLFxuICAgICAgICAgIHJlcXVpcmVkOiBjaGVjay5ib29sZWFuXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAgbmFtZTogJ3NlbGVjdCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LXNlbGVjdC5odG1sJyksXG4gICAgYXBpQ2hlY2s6IGZ1bmN0aW9uKGNoZWNrKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcbiAgICAgICAgICBsYWJlbDogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgJ21pbi1sZW5ndGgnOiBjaGVjay5udW1iZXIsXG4gICAgICAgICAgJ2FsbG93LWNsZWFyJzogY2hlY2suYm9vbGVhbixcbiAgICAgICAgICAnbmctYXR0ci1tdWx0aXBsZSc6IGNoZWNrLmJvb2xlYW4sXG4gICAgICAgICAgc2VsZWN0ZWQ6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICBzZWxlY3RlZDI6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICBjaG9pY2U6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICBjaG9pY2UyOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgY2hvaWNlczogY2hlY2suYXJyYXksXG4gICAgICAgICAgcmVxdWlyZWQ6IGNoZWNrLmJvb2xlYW5cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gICAgLy99LCB7XG4gICAgLy9cdG5hbWU6ICdzZWxlY3QtYXN5bmMnLFxuICAgIC8vXHR0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtc2VsZWN0LWFzeW5jLmh0bWwnKVxuICB9LCB7XG4gICAgbmFtZTogJ3N3aXRjaCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LXN3aXRjaC5odG1sJyksXG4gICAgYXBpQ2hlY2s6IGZ1bmN0aW9uKGNoZWNrKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcbiAgICAgICAgICBsYWJlbDogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgY2hlY2tlZDogY2hlY2suYm9vbGVhbixcbiAgICAgICAgICByZXF1aXJlZDogY2hlY2suYm9vbGVhblxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIG5hbWU6ICd0ZXh0YXJlYScsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LXRleHRhcmVhLmh0bWwnKSxcbiAgICBhcGlDaGVjazogZnVuY3Rpb24oY2hlY2spIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xuICAgICAgICAgIGxhYmVsOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgaWNvbjogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIHRoZW1lOiBjaGVjay5vbmVPZihbJ2xpZ2h0JywgJ2RhcmsnXSksXG4gICAgICAgICAgcmVxdWlyZWQ6IGNoZWNrLmJvb2xlYW4sXG4gICAgICAgICAgcm93czogY2hlY2subnVtYmVyLFxuICAgICAgICAgIGNvbHM6IGNoZWNrLm51bWJlclxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfV07XG4gIHZhciBXUkFQUEVSUyA9IFt7XG4gICAgbmFtZTogJ3dyYXBwZXItZGl2JyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93cmFwcGVycy9seC13cmFwcGVyLWRpdi5odG1sJylcbiAgfSwge1xuICAgIG5hbWU6ICd3cmFwcGVyLWVycm9ycycsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vd3JhcHBlcnMvbHgtd3JhcHBlci1lcnJvcnMuaHRtbCcpXG4gIH0sIHtcbiAgICBuYW1lOiAnd3JhcHBlci1mbGV4JyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93cmFwcGVycy9seC13cmFwcGVyLWZsZXguaHRtbCcpXG4gIH0sIHtcbiAgICBuYW1lOiAnd3JhcHBlci1pbmxpbmUnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3dyYXBwZXJzL2x4LXdyYXBwZXItaW5saW5lLmh0bWwnKVxuICB9XTtcblxuICBmdW5jdGlvbiBfcHJlZml4ZXIobmFtZSkge1xuICAgIHJldHVybiBQUkVGSVggKyAnLScgKyBuYW1lO1xuICB9XG5cbiAgZnVuY3Rpb24gX3dyYXBwZXJUZW1wbGF0ZVVybChuYW1lKSB7XG4gICAgcmV0dXJuICd3cmFwcGVycy9mb3JtbHktd3JhcHBlcnMtJyArIF9wcmVmaXhlcihuYW1lKSArICcuaHRtbCc7XG4gIH1cblxuICBmdW5jdGlvbiBfZmllbGRUZW1wbGF0ZVVybChuYW1lKSB7XG4gICAgcmV0dXJuICdmaWVsZHMvZm9ybWx5LWZpZWxkcy0nICsgX3ByZWZpeGVyKG5hbWUpICsgJy5odG1sJztcbiAgfVxuXG4gIC8qQG5nSW5qZWN0Ki9cbiAgZnVuY3Rpb24gc2V0V3JhcHBlcnMoZm9ybWx5Q29uZmlnUHJvdmlkZXIpIHtcbiAgICBpZiAoVVNJTkdfVEVNUExBVEVTKSB7XG4gICAgICBXUkFQUEVSUy5tYXAoZnVuY3Rpb24gKHdyYXBwZXIpIHtcbiAgICAgICAgZm9ybWx5Q29uZmlnUHJvdmlkZXIuc2V0V3JhcHBlcih7XG4gICAgICAgICAgbmFtZTogX3ByZWZpeGVyKHdyYXBwZXIubmFtZSksXG4gICAgICAgICAgdGVtcGxhdGVVcmw6IF93cmFwcGVyVGVtcGxhdGVVcmwod3JhcHBlci5uYW1lKVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIF9wcmVmaXhlcih3cmFwcGVyLm5hbWUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLypAbmdJbmplY3QqL1xuICBmdW5jdGlvbiBzZXRGaWVsZHMoZm9ybWx5Q29uZmlnLCBmb3JtbHlBcGlDaGVjaykge1xuICAgIHZhciBjID0gZm9ybWx5QXBpQ2hlY2s7XG4gICAgaWYgKFVTSU5HX1RFTVBMQVRFUykge1xuICAgICAgICBGSUVMRFMubWFwKGZ1bmN0aW9uIChmaWVsZCkge1xuICAgICAgICAgIGZvcm1seUNvbmZpZy5zZXRUeXBlKHtcbiAgICAgICAgICAgIG5hbWU6IF9wcmVmaXhlcihmaWVsZC5uYW1lKSxcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiBfZmllbGRUZW1wbGF0ZVVybChmaWVsZC5uYW1lKSxcbiAgICAgICAgICAgIGFwaUNoZWNrOiBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICByZXR1cm4gZmllbGQuYXBpQ2hlY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICBmdW5jdGlvbiBzZXREZWZhdWx0cyhmb3JtbHlDb25maWcsIGZvcm1seVZhbGlkYXRpb25NZXNzYWdlcykge1xuICAgIGZvcm1seUNvbmZpZy5leHRyYXMubmdNb2RlbEF0dHJzTWFuaXB1bGF0b3JQcmVmZXJCb3VuZCA9IHRydWU7XG4gICAgVkFMSURBVElPTl9NRVNTQUdFUy5tYXAoZnVuY3Rpb24gKHZhbGlkYXRpb24pIHtcbiAgICAgIGZvcm1seVZhbGlkYXRpb25NZXNzYWdlcy5hZGRTdHJpbmdNZXNzYWdlKHZhbGlkYXRpb24ubmFtZSwgdmFsaWRhdGlvbi5tZXNzYWdlKTtcbiAgICB9KTtcbiAgICBmb3JtbHlWYWxpZGF0aW9uTWVzc2FnZXMubWVzc2FnZXMucGF0dGVybiA9IGZ1bmN0aW9uICh2aWV3VmFsdWUsIG1vZGVsVmFsdWUpIHtcbiAgICAgIHJldHVybiAodmlld1ZhbHVlIHx8IG1vZGVsVmFsdWUpICsgJyBpcyBpbnZhbGlkJztcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gY2FjaGVUZW1wbGF0ZXMoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgICBpZiAoVVNJTkdfVEVNUExBVEVTKSB7XG4gICAgICBGSUVMRFMubWFwKGZ1bmN0aW9uIChmaWVsZCkge1xuICAgICAgICAkdGVtcGxhdGVDYWNoZS5wdXQoX2ZpZWxkVGVtcGxhdGVVcmwoZmllbGQubmFtZSksIGZpZWxkLnRlbXBsYXRlKTtcbiAgICAgIH0pO1xuICAgICAgV1JBUFBFUlMubWFwKGZ1bmN0aW9uICh3cmFwcGVyKSB7XG4gICAgICAgICR0ZW1wbGF0ZUNhY2hlLnB1dChfd3JhcHBlclRlbXBsYXRlVXJsKHdyYXBwZXIubmFtZSksIHdyYXBwZXIudGVtcGxhdGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgYW5ndWxhci5tb2R1bGUoTU9EVUxFX05BTUUsIFtcbiAgICAnZm9ybWx5J1xuICBdKS5jb25maWcoc2V0V3JhcHBlcnMpLnJ1bihzZXRGaWVsZHMpLnJ1bihzZXREZWZhdWx0cykucnVuKGNhY2hlVGVtcGxhdGVzKTtcbn0oKSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9+L2pzaGludC1sb2FkZXIhLi9pbmRleC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjaGVja2JveFxcXCI+XFxuXFx0PGlucHV0IG5nLW1vZGVsPVxcXCJtb2RlbFtvcHRpb25zLmtleV1cXFwiXFxuXFx0ICAgICAgIHR5cGU9XFxcImNoZWNrYm94XFxcIlxcblxcdCAgICAgICByb2xlPVxcXCJjaGVja2JveFxcXCJcXG5cXHQgICAgICAgY2xhc3M9XFxcImNoZWNrYm94X19pbnB1dFxcXCI+XFxuXFx0PGxhYmVsIGZvcj17ezo6aWR9fSBjbGFzcz1cXFwiY2hlY2tib3hfX2xhYmVsXFxcIiBhcmlhLWxhYmVsPVxcXCJ7ezo6dG8ubGFiZWx9fVxcXCI+e3t0by5sYWJlbH19PC9sYWJlbD5cXG5cXHQ8c3BhbiBuZy1pZj1cXFwiOjp0by5kZXNjcmlwdGlvblxcXCJcXG5cXHQgICAgICBjbGFzcz1cXFwiY2hlY2tib3hfX2hlbHBcXFwiPnt7Ojp0by5kZXNjcmlwdGlvbn19PC9zcGFuPlxcbjwvZGl2PlwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2ZpZWxkcy9seC1jaGVja2JveC5odG1sXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxseC1kYXRlLXBpY2tlciBtb2RlbD1cXFwibW9kZWxbb3B0aW9ucy5rZXldXFxcIlxcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVxcXCJ7ezo6dG8ubGFiZWx9fVxcXCJcXG4gICAgICAgICAgICAgICAgbGFiZWw9XFxcInt7Ojp0by5sYWJlbH19IHt7Ojp0by5yZXF1aXJlZCA/ICcqJyA6ICcnfX1cXFwiPlxcbjwvbHgtZGF0ZS1waWNrZXI+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vZmllbGRzL2x4LWRhdGUtcGlja2VyLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiYWZ0bC1mbGV4LWZpZWxkc1xcXCJcXG4gICAgIG1vZGVsPVxcXCIkcGFyZW50Lm1vZGVsXFxcIlxcbiAgICAgZmxleC1jb250YWluZXI9XFxcInt7Ojp0by5mbGV4LmNvbnRhaW5lciB8fCAncm93J319XFxcIlxcbiAgICAgZmxleC1hbGlnbj1cXFwie3s6OnRvLmZsZXguYWxpZ24gfHwgJ3NwYWNlLWJldHdlZW4nfX1cXFwiXFxuICAgICBmbGV4LWd1dHRlcj1cXFwie3s6OnRvLmZsZXguZ3V0dGVyIHx8ICcyNCd9fVxcXCI+XFxuXFx0PGRpdiBmb3JtbHktZmllbGRcXG5cXHQgICAgIG5nLXJlcGVhdD1cXFwiZmllbGQgaW4gdG8uZmllbGRzIHRyYWNrIGJ5ICRpbmRleFxcXCJcXG5cXHQgICAgIG5nLWlmPVxcXCIhZmllbGQuaGlkZVxcXCJcXG5cXHQgICAgIGNsYXNzPVxcXCJmb3JtbHktZmllbGQge3s6OmZpZWxkLnR5cGUgPyAnZm9ybWx5LWZpZWxkLScgKyBmaWVsZC50eXBlIDogJyd9fVxcXCJcXG5cXHQgICAgIG5nLXN0eWxlPVxcXCI6OnRvLmZsZXguc3R5bGVcXFwiXFxuXFx0ICAgICBvcHRpb25zPVxcXCJmaWVsZFxcXCJcXG5cXHQgICAgIG1vZGVsPVxcXCJmaWVsZC5tb2RlbCB8fCBtb2RlbFxcXCJcXG5cXHQgICAgIGZpZWxkcz1cXFwiZmllbGRzXFxcIlxcblxcdCAgICAgZm9ybT1cXFwiZm9ybVxcXCJcXG5cXHQgICAgIGZvcm0taWQ9XFxcImZvcm1JZFxcXCJcXG5cXHQgICAgIGZvcm0tc3RhdGU9XFxcIm9wdGlvbnMuZm9ybVN0YXRlXFxcIlxcblxcdCAgICAgaW5kZXg9XFxcIiRpbmRleFxcXCJcXG5cXHQgICAgIGZsZXgtaXRlbT1cXFwie3s6OnRvLmZsZXguaXRlbSB8fCAnMSd9fVxcXCJcXG5cXHQgICAgIGZsZXgtb3JkZXI9XFxcInt7Ojp0by5mbGV4Lm9yZGVyfX1cXFwiPlxcblxcdDwvZGl2PlxcbjwvZGl2PlwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2ZpZWxkcy9seC1mbGV4Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGx4LXRleHQtZmllbGQgZGF0YS1tb2RlbD1cXFwiOjptb2RlbFtvcHRpb25zLmtleV1cXFwiXFxuICAgICAgICAgICAgICAgaWNvbj1cXFwie3s6OnRvLmljb259fVxcXCJcXG4gICAgICAgICAgICAgICBmaXhlZC1sYWJlbD1cXFwiOjp0by5maXhlZExhYmVsXFxcIlxcbiAgICAgICAgICAgICAgIHRoZW1lPVxcXCJ7ezo6dG8udGhlbWV9fVxcXCJcXG4gICAgICAgICAgICAgICBkaXNhYmxlZD1cXFwidG8uZGlzYWJsZWRcXFwiXFxuICAgICAgICAgICAgICAgbGFiZWw9XFxcInt7dG8ubGFiZWx9fSB7ezo6dG8ucmVxdWlyZWQgPyAnKicgOiAnJ319XFxcIlxcbiAgICAgICAgICAgICAgIHZhbGlkPVxcXCJmYy4kdmFsaWQgJiYgZmMuJHRvdWNoZWRcXFwiXFxuICAgICAgICAgICAgICAgZXJyb3I9XFxcImZjLiRpbnZhbGlkICYmIGZjLiR0b3VjaGVkXFxcIj5cXG5cXHQ8aW5wdXQgbmctbW9kZWw9XFxcIm1vZGVsW29wdGlvbnMua2V5XVxcXCJcXG5cXHQgICAgICAgdHlwZT1cXFwie3s6OnRvLnR5cGV9fVxcXCJcXG5cXHQgICAgICAgYXJpYS1sYWJlbD1cXFwie3s6OnRvLmxhYmVsfX1cXFwiXFxuXFx0ICAgICAgIG5nLWNsYXNzPVxcXCI6OnRvLmNsYXNzTmFtZVxcXCIvPlxcbjwvbHgtdGV4dC1maWVsZD5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9maWVsZHMvbHgtaW5wdXQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJyYWRpby1ncm91cFxcXCI+XFxuXFx0PGgzIG5nLWlmPVxcXCI6OnRvLmxhYmVsXFxcIj48bGFiZWw+e3s6OnRvLmxhYmVsfX08L2xhYmVsPjwvaDM+XFxuXFxuXFx0PGRpdiBjbGFzcz1cXFwicmFkaW8tYnV0dG9uXFxcIlxcblxcdCAgICAgbmctY2xhc3M9XFxcInsncmFkaW8tYnV0dG9uX19pbmxpbmUnOiB0by5pbmxpbmV9XFxcIlxcblxcdCAgICAgbmctcmVwZWF0PVxcXCJvIGluIHRvLm9wdGlvbnNcXFwiPlxcblxcdFxcdDxpbnB1dCBuZy1tb2RlbD1cXFwiJHBhcmVudC5tb2RlbFskcGFyZW50Lm9wdGlvbnMua2V5XVxcXCJcXG5cXHRcXHQgICAgICAgaWQ9XFxcInt7OjppZCArICdfJyArICRpbmRleH19XFxcIlxcblxcdFxcdCAgICAgICB0eXBlPVxcXCJyYWRpb1xcXCJcXG5cXHRcXHQgICAgICAgbmctZGlzYWJsZWQ9XFxcIjo6by5kaXNhYmxlZFxcXCJcXG5cXHRcXHQgICAgICAgY2xhc3M9XFxcInJhZGlvLWJ1dHRvbl9faW5wdXRcXFwiXFxuXFx0XFx0ICAgICAgIG5nLXZhbHVlPVxcXCI6Om8udmFsdWVcXFwiXFxuXFx0XFx0ICAgICAgIGFyaWEtbGFiZWxsZWRieT1cXFwie3s6OmlkICsgJ18nICsgJGluZGV4ICsgJ19yYWRpb0J1dHRvbid9fVxcXCI+XFxuXFx0XFx0PGxhYmVsIGZvcj1cXFwie3s6OmlkICsgJ18nICsgJGluZGV4fX1cXFwiXFxuXFx0XFx0ICAgICAgIGNsYXNzPVxcXCJyYWRpby1idXR0b25fX2xhYmVsXFxcIj57ezo6by5uYW1lfX08L2xhYmVsPlxcbiAgICAgIDxzcGFuIG5nLWlmPVxcXCI6Om8uZGVzY3JpcHRpb25cXFwiIGNsYXNzPVxcXCJyYWRpby1idXR0b25fX2hlbHBcXFwiPnt7OjpvLmRlc2NyaXB0aW9ufX1cXG4gICAgICA8L3NwYW4+XFxuXFx0PC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vZmllbGRzL2x4LXJhZGlvLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiYWZ0bC1zZWxlY3RcXFwiPlxcblxcdDxoMyBuZy1pZj1cXFwiOjp0by5sYWJlbFxcXCI+PGxhYmVsPlxcblxcdFxcdHt7dG8ubGFiZWx9fSB7ezo6dG8ucmVxdWlyZWQgPyAnKicgOiAnJ319XFxuXFx0PC9sYWJlbD48L2gzPlxcblxcdDxseC1zZWxlY3QgbmctbW9kZWw9XFxcIm1vZGVsW29wdGlvbnMua2V5XVxcXCJcXG5cXHQgICAgICAgICAgIGNob2ljZXM9XFxcInRvLm9wdGlvbnNcXFwiXFxuXFx0ICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwie3s6OnRvLnBsYWNlaG9sZGVyfX1cXFwiXFxuXFx0ICAgICAgICAgICBtaW4tbGVuZ3RoPVxcXCI6OnRvLm1pbkxlbmd0aFxcXCJcXG5cXHQgICAgICAgICAgIGFsbG93LWNsZWFyPVxcXCI6OnRvLmFsbG93Q2xlYXJcXFwiXFxuXFx0ICAgICAgICAgICBuZy1hdHRyLW11bHRpcGxlPVxcXCJ7ezo6dG8ubXVsdGlwbGV9fVxcXCI+XFxuXFxuXFx0XFx0PGx4LXNlbGVjdC1zZWxlY3RlZD5cXG5cXHRcXHRcXHR7eyRzZWxlY3RlZFt0by5zZWxlY3RlZF0gfHwgJHNlbGVjdGVkfX0ge3s6OnRvLnNlbGVjdGVkMiA/ICcgLSAnICtcXG5cXHRcXHRcXHQkc2VsZWN0ZWRbdG8uc2VsZWN0ZWQyXSA6ICcnfX1cXG5cXHRcXHQ8L2x4LXNlbGVjdC1zZWxlY3RlZD5cXG5cXG5cXHRcXHQ8bHgtc2VsZWN0LWNob2ljZXM+XFxuXFx0XFx0XFx0e3skY2hvaWNlW3RvLmNob2ljZV0gfHwgJGNob2ljZX19IHt7Ojp0by5jaG9pY2UyID8gJyAtICcgK1xcblxcdFxcdFxcdCRjaG9pY2VbdG8uY2hvaWNlMl0gOiAnJ319XFxuXFx0XFx0PC9seC1zZWxlY3QtY2hvaWNlcz5cXG5cXG5cXHQ8L2x4LXNlbGVjdD5cXG48L2Rpdj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9maWVsZHMvbHgtc2VsZWN0Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwic3dpdGNoXFxcIj5cXG5cXHQ8aW5wdXQgbmctbW9kZWw9XFxcIm1vZGVsW29wdGlvbnMua2V5XVxcXCJcXG5cXHQgICAgICAgdHlwZT1cXFwiY2hlY2tib3hcXFwiXFxuXFx0ICAgICAgIHJvbGU9XFxcImNoZWNrYm94XFxcIlxcblxcdCAgICAgICBjbGFzcz1cXFwic3dpdGNoX19pbnB1dFxcXCIvPlxcblxcdDxsYWJlbCBmb3I9XFxcInt7OjppZH19XFxcIiBjbGFzcz1cXFwic3dpdGNoX19sYWJlbFxcXCIgYXJpYS1sYWJlbD1cXFwie3s6OnRvLmxhYmVsfX1cXFwiPnt7dG8ubGFiZWx9fTwvbGFiZWw+XFxuXFx0PHNwYW4gbmctaWY9XFxcIjo6dG8uZGVzY3JpcHRpb25cXFwiXFxuXFx0ICAgICAgY2xhc3M9XFxcInN3aXRjaF9faGVscFxcXCI+e3s6OnRvLmRlc2NyaXB0aW9ufX08L3NwYW4+XFxuPC9kaXY+XFxuXFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vZmllbGRzL2x4LXN3aXRjaC5odG1sXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxseC10ZXh0LWZpZWxkIGRhdGEtbW9kZWw9XFxcIjo6bW9kZWxbb3B0aW9ucy5rZXldXFxcIlxcbiAgICAgICAgICAgICAgIGZpeGVkLWxhYmVsPVxcXCI6OnRvLmZpeGVkTGFiZWxcXFwiXFxuICAgICAgICAgICAgICAgaWNvbj1cXFwie3s6OnRvLmljb259fVxcXCJcXG4gICAgICAgICAgICAgICB0aGVtZT1cXFwie3s6OnRvLnRoZW1lfX1cXFwiXFxuICAgICAgICAgICAgICAgbGFiZWw9XFxcInt7dG8ubGFiZWx9fSB7ezo6dG8ucmVxdWlyZWQgPyAnKicgOiAnJ319XFxcIlxcbiAgICAgICAgICAgICAgIHZhbGlkPVxcXCJmYy4kdmFsaWQgJiYgZmMuJHRvdWNoZWRcXFwiXFxuICAgICAgICAgICAgICAgZXJyb3I9XFxcImZjLiRpbnZhbGlkICYmIGZjLiR0b3VjaGVkXFxcIj5cXG4gICAgPHRleHRhcmVhIG5nLW1vZGVsPVxcXCJtb2RlbFtvcHRpb25zLmtleV1cXFwiXFxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVxcXCJ7ezo6dG8ubGFiZWx9fVxcXCJcXG4gICAgICAgICAgICAgIHJvd3M9XFxcInt7Ojp0by5yb3dzfX1cXFwiIGNvbHM9XFxcInt7Ojp0by5jb2xzfX1cXFwiPlxcbiAgICA8L3RleHRhcmVhPlxcbjwvbHgtdGV4dC1maWVsZD5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9maWVsZHMvbHgtdGV4dGFyZWEuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IG5nLWNsYXNzPVxcXCI6OnRvLmRpdi5jbGFzc05hbWVcXFwiXFxuXFx0bmctc3R5bGU9XFxcIjo6dG8uZGl2LnN0eWxlXFxcIj5cXG5cXHQ8Zm9ybWx5LXRyYW5zY2x1ZGU+PC9mb3JtbHktdHJhbnNjbHVkZT5cXG48L2Rpdj5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi93cmFwcGVycy9seC13cmFwcGVyLWRpdi5odG1sXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+XFxuXFx0PGZvcm1seS10cmFuc2NsdWRlPjwvZm9ybWx5LXRyYW5zY2x1ZGU+XFxuXFx0PHVsIGNsYXNzPVxcXCJmb3JtLWVycm9yXFxcIiBuZy1tZXNzYWdlcz1cXFwiZmMuJGVycm9yXFxcIlxcblxcdCAgICBuZy1zaG93PVxcXCJvcHRpb25zLnZhbGlkYXRpb24uZXJyb3JFeGlzdHNBbmRTaG91bGRCZVZpc2libGVcXFwiPlxcblxcdFxcdDxsaSBuZy1yZXBlYXQ9XFxcIihuYW1lLCBtZXNzYWdlKSBpbiA6Om9wdGlvbnMudmFsaWRhdGlvbi5tZXNzYWdlc1xcXCJcXG5cXHRcXHQgICAgbmctbWVzc2FnZT17ezo6bmFtZX19PlxcblxcdFxcdFxcdHt7bWVzc2FnZShmYy4kdmlld1ZhbHVlLCBmYy4kbW9kZWxWYWx1ZSwgdGhpcyl9fVxcblxcdFxcdDwvbGk+XFxuXFx0PC91bD5cXG5cXHQ8c3BhbiBjbGFzcz1cXFwiZm9ybS1wZW5kaW5nXFxcIlxcblxcdCAgICAgIG5nLWlmPVxcXCJ0by5wZW5kaW5nICYmIGZjLiRwZW5kaW5nICYmIGZjLiR0b3VjaGVkXFxcIj5cXG5cXHR7ezo6dG8ucGVuZGluZyB8fCAnQ2hlY2tpbmcuLi4nfX1cXG5cXHQ8L3NwYW4+XFxuPC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vd3JhcHBlcnMvbHgtd3JhcHBlci1lcnJvcnMuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBuZy1jbGFzcz1cXFwiOjp0by5kaXYuY2xhc3NOYW1lXFxcIlxcbiAgICAgbmctc3R5bGU9XFxcIjo6dG8uZGl2LnN0eWxlIHx8IHt9XFxcIlxcbiAgICAgZmxleC1pdGVtPVxcXCI6OnRvLmZsZXguaXRlbVxcXCJcXG4gICAgIGZsZXgtb3JkZXI9XFxcIjo6dG8uZmxleC1vcmRlclxcXCI+XFxuXFx0PGZvcm1seS10cmFuc2NsdWRlPjwvZm9ybWx5LXRyYW5zY2x1ZGU+XFxuPC9kaXY+XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vd3JhcHBlcnMvbHgtd3JhcHBlci1mbGV4Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzcGFuIGNsYXNzPVxcXCJpbmxpbmUtd3JhcHBlclxcXCI+XFxuXFx0PHNwYW4gY2xhc3M9XFxcImlubGluZS0tYmVmb3JlXFxcIj57ezo6dG8uaW5saW5lLmJlZm9yZX19PC9zcGFuPlxcblxcdDxzcGFuIGNsYXNzPVxcXCJpbmxpbmUtLWNvbnRlbnRcXFwiPlxcblxcdFxcdDxmb3JtbHktdHJhbnNjbHVkZT48L2Zvcm1seS10cmFuc2NsdWRlPlxcblxcdDwvc3Bhbj5cXG5cXHQ8c3BhbiBjbGFzcz1cXFwiaW5saW5lLS1hZnRlclxcXCI+e3s6OnRvLmlubGluZS5hZnRlcn19PC9zcGFuPlxcbjwvc3Bhbj5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi93cmFwcGVycy9seC13cmFwcGVyLWlubGluZS5odG1sXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=