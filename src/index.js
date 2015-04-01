(function() {
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
		template: require('./fields/lx-checkbox.html')
	}, {
		name: 'date-picker',
		template: require('./fields/lx-date-picker.html')
	}, {
		name: 'dropdown',
		template: require('./fields/lx-dropdown.html')
	}, {
		name: 'flex',
		template: require('./fields/lx-flex.html')
	}, {
		name: 'input',
		template: require('./fields/lx-input.html')
	}, {
		name: 'radio',
		template: require('./fields/lx-radio.html')
	}, {
		name: 'select',
		template: require('./fields/lx-select.html')
	}, {
		name: 'switch',
		template: require('./fields/lx-switch.html')
	}, {
		name: 'textarea',
		template: require('./fields/lx-textarea.html')
	}];
	var WRAPPERS = [{
		name: 'wrapper-div',
		template: require('./wrappers/lx-wrapper-div.html')
	}, {
		name: 'wrapper-errors',
		template: require('./wrappers/lx-wrapper-errors.html')
	}, {
		name: 'wrapper-flex',
		template: require('./wrappers/lx-wrapper-flex.html')
	}, {
		name: 'wrapper-inline',
		template: require('./wrappers/lx-wrapper-inline.html')
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
			WRAPPERS.map(function(wrapper) {
				formlyConfigProvider.setWrapper({
					name: _prefixer(wrapper.name),
					templateUrl: _wrapperTemplateUrl(wrapper.name)
				});
				return _prefixer(wrapper.name);
			});
		}
	}

	function addFieldValidationOptions(apiCheck) {  /* validation using apiCheck.js */
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
			validateOptions: {'label': apiCheck.string, 'required': apiCheck.boolean}
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
		APICHECK_VALIDATION_FIELDS.map(function(validationField) {
			FIELDS.map(function(field) {
				if (field.name === validationField.name) {
					field.validateOptions = validationField.validateOptions;
				}
			});
		});
	}

	/*@ngInject*/
	function setFields(formlyConfig, formlyApiCheck) {
		if (USING_TEMPLATES) {
			if (USING_TEMPLATE_VALIDATION) {        /* validate options using apiCheck to reduce developer errors */
				addFieldValidationOptions(formlyApiCheck);
				FIELDS.map(function(field) {
					formlyConfig.setType({
						name: _prefixer(field.name),
						templateUrl: _fieldTemplateUrl(field.name),
						validateOptions: function(options) {
							options.data.apiCheck = formlyApiCheck.warn(formlyApiCheck.shape({templateOptions: formlyApiCheck.shape(field.templateOptions || {}).optional}), arguments);
						}
					});
				});
			} else {        /* skip validating options */
				//apiCheck.disable();
				FIELDS.map(function(field) {
					formlyConfig.setType({name: _prefixer(field.name), templateUrl: _fieldTemplateUrl(field.name)});
				});
			}
		}
	}

	function setDefaults(formlyConfig, formlyValidationMessages) {
		formlyConfig.extras.ngModelAttrsManipulatorPreferBound = true;
		VALIDATION_MESSAGES.map(function(validation) {
			formlyValidationMessages.addStringMessage(validation.name, validation.message);
		});
		formlyValidationMessages.messages.pattern = function(viewValue, modelValue) {
			return (viewValue || modelValue) + ' is invalid';
		};
	}

	function cacheTemplates($templateCache) {
		if (USING_TEMPLATES) {
			FIELDS.map(function(field) {
				$templateCache.put(_fieldTemplateUrl(field.name), field.template);
			});
			WRAPPERS.map(function(wrapper) {
				$templateCache.put(_wrapperTemplateUrl(wrapper.name), wrapper.template);
			});
		}
	}

	angular.module(MODULE_NAME, ['formly']).config(setWrappers).run(setFields).run(setDefaults).run(cacheTemplates);
}());
