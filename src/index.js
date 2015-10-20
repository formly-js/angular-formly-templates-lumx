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
    template: require('./fields/lx-checkbox.html'),
    apiCheck: function(check) {
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
    template: require('./fields/lx-date-picker.html'),
    apiCheck: function(check) {
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
    template: require('./fields/lx-flex.html'),
    apiCheck: function(check) {
      return {};
    }
  }, {
    name: 'input',
    template: require('./fields/lx-input.html'),
    apiCheck: function(check) {
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
    template: require('./fields/lx-radio.html'),
    apiCheck: function (check) {
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
    template: require('./fields/lx-select.html'),
    apiCheck: function(check) {
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
    template: require('./fields/lx-switch.html'),
    apiCheck: function(check) {
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
    template: require('./fields/lx-textarea.html'),
    apiCheck: function(check) {
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
      WRAPPERS.map(function (wrapper) {
        formlyConfigProvider.setWrapper({
          name: _prefixer(wrapper.name),
          templateUrl: _wrapperTemplateUrl(wrapper.name)
        });
        return _prefixer(wrapper.name);
      });
    }
  }

  /*@ngInject*/
  function setFields(formlyConfig, formlyApiCheck) {
    var c = formlyApiCheck;
    if (USING_TEMPLATES) {
        FIELDS.map(function (field) {
          formlyConfig.setType({
            name: _prefixer(field.name),
            templateUrl: _fieldTemplateUrl(field.name),
            apiCheck: function (c) {
              return field.apiCheck;
            }
          });
        });
      }
    }

  function setDefaults(formlyConfig, formlyValidationMessages) {
    formlyConfig.extras.ngModelAttrsManipulatorPreferBound = true;
    VALIDATION_MESSAGES.map(function (validation) {
      formlyValidationMessages.addStringMessage(validation.name, validation.message);
    });
    formlyValidationMessages.messages.pattern = function (viewValue, modelValue) {
      return (viewValue || modelValue) + ' is invalid';
    };
  }

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

  angular.module(MODULE_NAME, [
    'formly'
  ]).config(setWrappers).run(setFields).run(setDefaults).run(cacheTemplates);
}());
