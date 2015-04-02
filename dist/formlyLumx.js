/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	(function () {
		"use strict";
		var USING_TEMPLATES = true;
		var USING_TEMPLATE_VALIDATION = true;
		/* Custom validation message defaults here */
		var VALIDATION_MESSAGES = [{
			name: "required", message: "This field is required"
		}, {
			name: "maxlength", message: "This field is too long."
		}, {
			name: "minlength", message: "This field is too short."
		}];
		/* Module Templates + Data */
		var MODULE_NAME = "formlyLumx";
		var PREFIX = "lx";
		var FIELDS = [{
			name: "checkbox",
			template: __webpack_require__(1)
		}, {
			name: "date-picker",
			template: __webpack_require__(2)
		}, {
			name: "dropdown",
			template: __webpack_require__(3)
		}, {
			name: "flex",
			template: __webpack_require__(4)
		}, {
			name: "input",
			template: __webpack_require__(5)
		}, {
			name: "radio",
			template: __webpack_require__(6)
		}, {
			name: "select",
			template: __webpack_require__(7)
		}, {
			name: "switch",
			template: __webpack_require__(8)
		}, {
			name: "textarea",
			template: __webpack_require__(9)
		}];
		var WRAPPERS = [{
			name: "wrapper-div",
			template: __webpack_require__(10)
		}, {
			name: "wrapper-errors",
			template: __webpack_require__(11)
		}, {
			name: "wrapper-flex",
			template: __webpack_require__(12)
		}, {
			name: "wrapper-inline",
			template: __webpack_require__(13)
		}];

		function _prefixer(name) {
			return PREFIX + "-" + name;
		}

		function _wrapperTemplateUrl(name) {
			return "wrappers/formly-wrappers-" + _prefixer(name) + ".html";
		}

		function _fieldTemplateUrl(name) {
			return "fields/formly-fields-" + _prefixer(name) + ".html";
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
				name: "checkbox",
				validateOptions: {
					label: apiCheck.string,
					description: apiCheck.string,
					checked: apiCheck.boolean,
					required: apiCheck.boolean
				}
			}, {
				name: "date-picker",
				validateOptions: { label: apiCheck.string, required: apiCheck.boolean }
			}, {
				name: "input",
				validateOptions: {
					label: apiCheck.string,
					icon: apiCheck.string,
					fixedLabel: apiCheck.boolean,
					disabled: apiCheck.boolean,
					className: apiCheck.string,
					theme: apiCheck.oneOf(["light", "dark"]),
					type: apiCheck.oneOf(["text", "number", "email", "password", "url", "tel"]),
					required: apiCheck.boolean
				}
			}, {
				name: "radio",
				validateOptions: {
					label: apiCheck.string,
					description: apiCheck.string,
					options: apiCheck.arrayOf({
						name: apiCheck.string,
						value: apiCheck.oneOfType([apiCheck.string, apiCheck.number]),
						disabled: apiCheck.boolean
					}),
					required: apiCheck.boolean
				}
			}, {
				name: "select",
				validateOptions: {
					label: apiCheck.string,
					placeholder: apiCheck.string,
					"min-length": apiCheck.number,
					"allow-clear": apiCheck.boolean,
					"ng-attr-multiple": apiCheck.boolean,
					selected: apiCheck.string,
					selected2: apiCheck.string,
					choice: apiCheck.string,
					choice2: apiCheck.string,
					choices: apiCheck.array,
					required: apiCheck.boolean
				}
			}, {
				name: "switch",
				validateOptions: {
					label: apiCheck.string,
					description: apiCheck.string,
					checked: apiCheck.boolean,
					required: apiCheck.boolean
				}
			}, {
				name: "textarea",
				validateOptions: {
					label: apiCheck.string,
					icon: apiCheck.string,
					theme: apiCheck.oneOf(["light", "dark"]),
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
				return (viewValue || modelValue) + " is invalid";
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

		angular.module(MODULE_NAME, ["formly"]).config(setWrappers).run(setFields).run(setDefaults).run(cacheTemplates);
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

	module.exports = "<lx-text-field model=\"::model[options.key]\"\n               icon=\"{{::to.icon}}\"\n               fixed-label=\"::to.fixedLabel\"\n               theme=\"{{::to.theme}}\"\n               disabled=\"to.disabled\"\n               label=\"{{to.label}} {{::to.required ? '*' : ''}}\"\n               valid=\"fc.$valid && fc.$touched\"\n               error=\"fc.$invalid && fc.$touched\">\n\t<input ng-model=\"model[options.key]\"\n\t       type=\"{{::to.type}}\"\n\t       aria-label=\"{{::to.label}}\"\n\t       ng-class=\"::to.className\"/>\n</lx-text-field>"

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"radio-group\">\n\t<h3 ng-if=\"::to.label\"><label>{{::to.label}}</label></h3>\n\n\t<div class=\"radio-button\"\n\t     ng-class=\"{'radio-button__inline': to.inline}\"\n\t     ng-repeat=\"o in to.options\">\n\t\t<input ng-model=\"$parent.model[$parent.options.key]\"\n\t\t       id=\"{{::id + '_' + $index}}\"\n\t\t       type=\"radio\"\n\t\t       ng-disabled=\"::o.disabled\"\n\t\t       class=\"radio-button__input\"\n\t\t       ng-value=\"::o.value\"\n\t\t       aria-labelledby=\"{{::id + '_' + $index + '_radioButton'}}\">\n\t\t<label for=\"{{::id + '_' + $index}}\"\n\t\t       class=\"radio-button__label\">{{::o.name}}</label>\n      <span ng-if=\"::o.description\" class=\"radio-button__help\">{{::o.description}}\n      </span>\n\t</div>\n</div>\n"

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"aftl-select\">\n\t<h3 ng-if=\"::to.label\"><label>\n\t\t{{to.label}} {{::to.required ? '*' : ''}}\n\t</label></h3>\n\t<lx-select ng-model=\"model[options.key]\"\n\t           choices=\"to.options\"\n\t           placeholder=\"{{::to.placeholder}}\"\n\t           min-length=\"::to.minLength\"\n\t           allow-clear=\"::to.allowClear\"\n\t           ng-attr-multiple=\"{{::to.multiple}}\">\n\n\t\t<lx-select-selected>\n\t\t\t{{$selected[to.selected] || $selected}} {{::to.selected2 ? ' - ' +\n\t\t\t$selected[to.selected2] : ''}}\n\t\t</lx-select-selected>\n\n\t\t<lx-select-choices>\n\t\t\t{{$choice[to.choice] || $choice}} {{::to.choice2 ? ' - ' +\n\t\t\t$choice[to.choice2] : ''}}\n\t\t</lx-select-choices>\n\n\t</lx-select>\n</div>"

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"switch\">\n\t<input ng-model=\"model[options.key]\"\n\t       type=\"checkbox\"\n\t       role=\"checkbox\"\n\t       class=\"switch__input\"/>\n\t<label for={{::id}} class=\"switch__label\" aria-label=\"{{::to.label}}\">{{to.label}}</label>\n\t<span ng-if=\"::to.description\"\n\t      class=\"switch__help\">{{::to.description}}</span>\n</div>\n\n"

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<lx-text-field model=\"::model[options.key]\"\n               fixed-label=\"::to.fixedLabel\"\n               icon=\"{{::to.icon}}\"\n               theme=\"{{::to.theme}}\"\n               label=\"{{to.label}} {{::to.required ? '*' : ''}}\"\n               valid=\"fc.$valid && fc.$touched\"\n               error=\"fc.$invalid && fc.$touched\">\n    <textarea ng-model=\"model[options.key]\"\n              aria-label=\"{{::to.label}}\"\n              rows=\"{{::to.rows}}\" cols=\"{{::to.cols}}\">\n    </textarea>\n</lx-text-field>\n"

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

	module.exports = "<div ng-class=\"::to.div.className\"\n     ng-style=\"::to.div.style\"\n     flex-item=\"::to.flex.item\"\n     flex-order=\"::to.flex-order\">\n\t<formly-transclude></formly-transclude>\n</div>"

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<span class=\"inline-wrapper\">\n\t<span class=\"inline--before\">{{::to.inline.before}}</span>\n\t<span class=\"inline--content\">\n\t\t<formly-transclude></formly-transclude>\n\t</span>\n\t<span class=\"inline--after\">{{::to.inline.after}}</span>\n</span>"

/***/ }
/******/ ]);