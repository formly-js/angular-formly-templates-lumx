/**
 * Angular-Formly Templates (https://github.com/formly-js/angular-formly)
 * Based on the Lumx Framework (http://ui.lumapps.com/)
 * Converted by ShMcK
 */
(function () {
	'use strict';

	var FIELDS = [
		{
			name: 'date-picker',
			template: "<div><lx-date-picker formly-dynamic-name=\"::id\" model=\"model[options.key]\" label=\"{{::options.templateOptions.label}} {{::options.templateOptions.required ? \'*\' : \'\'}}\" ng-required=\"::options.required\" aria-describedby=\"{{::id}}_datePicker\"></lx-date-picker></div>"
		}, {
			name: 'select',
			template: "<div><br><h3><label for=\"{{::id}}\">{{::options.templateOptions.label || \'Select\'}} {{::options.templateOptions.required ? \'*\' : \'\'}}</label></h3><lx-select id=\"{{::id}}\" ng-model=\"model[options.key]\" formly-dynamic-name=\"::id\" aria-describedby=\"{{::id}}_select\" choices=\"options.templateOptions.options\" placeholder=\"{{::options.templateOptions.placeholder}}\" min-length=\"::options.templateOptions.minLength\" allow-clear=\"::options.templateOptions.allowClear\"><lx-select-selected>{{$selected[options.templateOptions.selected]}} {{::options.templateOptions.selected2 ? \' - \' + $selected[options.templateOptions.selected2] : \'\'}}</lx-select-selected><lx-select-choices>{{$choice[options.templateOptions.choice]}} {{::options.templateOptions.choice2 ? \' - \' + $choice[options.templateOptions.choice2] : \'\'}}</lx-select-choices></lx-select></div>"
		}, {
			name: 'select-multiple',
			template: "<div><br><h3><label for=\"{{::id}}\">{{::options.templateOptions.label || \'Select\'}} {{::options.templateOptions.required ? \'*\' : \'\'}}</label></h3><lx-select id=\"{{::id}}\" ng-model=\"model[options.key]\" formly-dynamic-name=\"::id\" aria-describedby=\"{{::id}}_select\" choices=\"options.templateOptions.options\" placeholder=\"{{::options.templateOptions.placeholder}}\" min-length=\"::options.templateOptions.minLength\" allow-clear=\"::options.templateOptions.allowClear\" multiple=\"multiple\"><lx-select-selected>{{$selected[options.templateOptions.selected]}} {{::options.templateOptions.selected2 ? \' - \' + $selected[options.templateOptions.selected2] : \'\'}}</lx-select-selected><lx-select-choices>{{$choice[options.templateOptions.choice]}} {{::options.templateOptions.choice2 ? \' - \' + $choice[options.templateOptions.choice2] : \'\'}}</lx-select-choices></lx-select></div>"
		}, {
			name: 'radio-buttons',
			template: "<div><br><div class=\"radio-group\" formly-dynamic-name=\"::id\"><h3><label>{{::options.templateOptions.label}}</label></h3><div class=\"radio-button\" ng-repeat=\"(key, option) in options.templateOptions.options\"><input type=\"radio\" formly-custom-validation=\"options.validators\" ng-value=\"::option.value\" ng-model=\"$parent.model[$parent.options.key]\" class=\"radio-button__input\" ng-disabled=\"::options.templateOptions.disabled\" ng-checked=\"options.templateOptions.checked\" aria-describedby=\"{{::id}} + \'_\' + {{::$index}} + \'_radioButton\'\" id=\"{{::id + \'_\'+ $index}}\"><label for=\"{{::id + \'_\'+ $index}}\" class=\"radio-button__label\">{{::option.name}}</label><span ng-if=\"::option.help\" class=\"radio-button__help\">{{::option.help}}</span></div></div></div>"
		}, {
			name: 'checkbox',
			template: "<div class=\"checkbox\" ng-class=\"{mt: options.templateOptions.help}\"><input class=\"checkbox__input\" type=\"checkbox\" id=\"{{::id}}\" formly-dynamic-name=\"::id\" formly-custom-validation=\"options.validators\" aria-describedby=\"{{::id}}_checkbox\" ng-model=\"model[options.key]\" ng-checked=\"options.templateOptions.checked\" ng-disabled=\"::options.templateOptions.disabled\" ng-value=\"::options.value\"><label for=\"{{::id}}\" class=\"checkbox__label\">{{::options.templateOptions.label}}</label><span class=\"checkbox__help\">{{::options.templateOptions.help}}</span></div>"
		}, {
			name: 'switch',
			template: "<div class=\"switch\" ng-class=\"{mt: options.templateOptions.help}\"><input type=\"checkbox\" id=\"{{::id + \'_\'+ $index}}\" class=\"switch__input\" ng-checked=\"options.templateOptions.checked\" ng-value=\"::options.templateOptions.value\" ng-disabled=\"::options.templateOptions.disabled\" ng-model=\"model[options.key]\" formly-dynamic-name=\"::id\" aria-describedby=\"{{::id}}_switch\"><label for=\"{{::id + \'_\'+ $index}}\" class=\"switch__label\">{{::options.templateOptions.label}}</label><span class=\"switch__help\">{{::options.templateOptions.help}}</span></div>"
		}, {
			name: 'text-field',
			template: "<div><lx-text-field id=\"{{::id}}\" label=\"{{::options.templateOptions.label}} {{::options.templateOptions.required ? \'*\' : \'\'}}\" fixed-label=\"::options.templateOptions.fixedLabel\" model=\"::model[options.key || index]\" disabled=\"::options.templateOptions.disabled\" valid=\"options.formControl.$valid && options.formControl.$touched\" error=\"options.formControl.$invalid && options.formControl.$touched || options.validators\" aria-describedby=\"{{::id}}_textField\"><input type=\"{{::options.templateOptions.type}}\" formly-dynamic-name=\"::id\" ng-model=\"model[options.key]\" ng-disabled=\"::options.templateOptions.disabled\" ng-model-options=\"::options.modelOptions || {}\" ng-minlength=\"::options.templateOptions.minlength\" ng-maxlength=\"::options.templateOptions.maxlength\" ng-min=\"::options.templateOptions.min\" ng-max=\"::options.templateOptions.max\" ng-pattern=\"::options.templateOptions.pattern\" ng-required=\"::options.templateOptions.required\"></lx-text-field></div>"
		}, {
			name: 'textarea',
			template: "<div><lx-text-field id=\"{{::id}}\" label=\"{{::options.templateOptions.label}} {{::options.templateOptions.required ? \'*\' : \'\'}}\" fixed-label=\"::options.templateOptions.fixedLabel\" model=\"::model[options.key || index]\" disabled=\"::options.templateOptions.disabled\" valid=\"options.formControl.$valid && options.formControl.$touched\" error=\"options.formControl.$invalid && options.formControl.$touched || options.validators\" aria-describedby=\"{{::id}}_textarea\"><textarea formly-dynamic-name=\"::id\" ng-model=\"model[options.key]\" ng-disabled=\"::options.templateOptions.disabled\" ng-model-options=\"::options.modelOptions || {}\" ng-minlength=\"::options.templateOptions.minlength\" ng-maxlength=\"::options.templateOptions.maxlength\" ng-pattern=\"::options.templateOptions.patternValue\" ng-required=\"::options.templateOptions.required\"></textarea></lx-text-field></div>"
		}, {
			name: 'file-input',
			template: "<div class=\"grid\"><div class=\"grid__col6\"><lx-file-input label=\"{{::options.templateOptions.fileLabel}}\" model=\"::model[options.key].fileData\" ng-disabled=\"::options.templateOptions.disabled\" ng-required=\"::options.templateOptions.required\" aria-describedby=\"{{::id}}_fileInput\"></lx-file-input></div><div class=\"grid__col6\"><div><lx-text-field id=\"{{::id}}\" label=\"{{::options.templateOptions.label}} {{::options.templateOptions.required ? \'*\' : \'\'}}\" fixed-label=\"::options.templateOptions.fixedLabel\" model=\"model[options.key].fileName\" disabled=\"::options.templateOptions.disabled\" valid=\"options.formControl.$valid && options.formControl.$touched\" error=\"options.formControl.$invalid && options.formControl.$touched || options.validators\" aria-describedby=\"{{::id}}_fileName\"><input type=\"text\" formly-dynamic-name=\"::id\" data-ng-model=\"model[options.key].fileName\" ng-disabled=\"::options.templateOptions.disabled\" ng-model-options=\"::options.modelOptions || {}\" ng-minlength=\"::options.templateOptions.minlength\" ng-maxlength=\"::options.templateOptions.maxlength\" ng-pattern=\"::options.templateOptions.pattern\" ng-required=\"::options.templateOptions.required\"></lx-text-field></div></div></div>"
		}, {
			name: 'subhead',
			template: "<br><h2 ng-class=\"::options.templateOptions.class || \'fs-headline\'\" ng-style=\"::options.templateOptions.style\" aria-describedby=\"{{::id}}_subheader\">{{::options.templateOptions.subhead}}</h2>"
		}
	];

	var WRAPPERS = [
		{
			name: 'error-required',
			template: "<div><formly-transclude></formly-transclude><ul class=\"form-error\" ng-messages=\"options.formControl.$error\" ng-show=\"options.formControl.$invalid && options.formControl.$touched\"><li ng-message=\"required\">Aren\'t you forgetting something?</li></ul></div>"
		}, {
			name: 'errors-text',
			template: "<div><formly-transclude></formly-transclude><ul class=\"form-error\" ng-messages=\"options.formControl.$error\" ng-show=\"options.formControl.$invalid && options.formControl.$touched|| options.validators\"><li ng-message=\"required\">Aren\'t you forgetting something?</li><li ng-message=\"email\">Not a valid email.</li><li ng-message=\"minlength\">Too short. {{::options.minlength}} or more characters.</li><li ng-message=\"maxlength\">Too long. {{::options.maxlength}} or less characters.</li><li ng-message=\"min\">Too low. {{::options.min}} or higher.</li><li ng-message=\"max\">Too high. {{::options.max}} or lower.</li><li ng-message=\"pattern\">This doesn\'t look right.</li><li ng-message=\"url\">Not a valid url. For example: \'https://www.example.com\'</li><li ng-message=\"number\">Not a valid number.</li></ul></div>"
		}, {
			name: 'description',
			template: "<div><formly-transclude></formly-transclude><p id=\"{{::id}}_description\" ng-if=\"::options.templateOptions.description\">{{::options.templateOptions.description}}</p></div>"
		}, {
			name: 'card',
			template: "<div class=\"card\"><div ng-if=\"::options.templateOptions.cardImage\" class=\"card__img card__img--top\"><img ng-src=\"{{options.templateOptions.cardImage}}\"> <span ng-if=\"::options.templateOptions.cardImageTitle\" class=\"fs-headline tc-white-1 display-block\">{{options.templateOptions.cardImageTitle}}</span></div><div class=\"p+\"><strong class=\"fs-headline display-block\">{{options.templateOptions.cardTitle}}</strong> <span class=\"fs-subhead tc-black-2 display-block\">{{options.templateOptions.cardSubTitle}}</span></div><div class=\"paragraph fs-body-1\"><formly-transclude></formly-transclude></div></div>"
		}, {
			name: 'grid',
			template: "<div ng-class=\"::options.templateOptions.gridClass\" flex-item=\"{{::options.templateOptions.flexItem}}\" flex-order=\"{{::options.templateOptions.flexOrder}}\"><formly-transclude></formly-transclude></div>"
		}
	];

	angular.module('formly.lumx', [])
		.constant('usingCustomTemplates', true) // false: turns templates off
		.constant('FIELDS', FIELDS)
		.constant('WRAPPERS', WRAPPERS)
		.constant('PREFIX', 'lx')
		.run(cacheLumXTemplates)
		.config(setCustomTemplates);

	/*@ngInject*/
	function cacheLumXTemplates($templateCache, usingCustomTemplates, FIELDS, WRAPPERS, PREFIX) {
		if (usingCustomTemplates) {
			angular.forEach(FIELDS, function (field) {
				$templateCache.put('fields/formly-templates-' + PREFIX + '-' + field.name + '.html', field.template);
			});
			angular.forEach(WRAPPERS, function (wrapper) {
				$templateCache.put('wrappers/formly-wrappers-' + PREFIX + '-' + wrapper.name + '.html', wrapper.template);
			});
		}
	}

	/*@ngInject*/
	function setCustomTemplates(usingCustomTemplates, formlyConfigProvider, FIELDS, WRAPPERS, PREFIX) {
		if (usingCustomTemplates) {
			var wrapperList = [];
			angular.forEach(WRAPPERS, function (wrapper) {
				wrapperList.push(PREFIX + '-wrapper-' + wrapper.name);
				formlyConfigProvider.setWrapper({
					name: PREFIX + '-wrapper-' + wrapper.name,
					templateUrl: 'wrappers/formly-wrappers-' + PREFIX + '-' + wrapper.name + '.html'
				});
			});

			angular.forEach(FIELDS, function (field) {
				formlyConfigProvider.setType({
					name: PREFIX + '-' + field.name,
					templateUrl: 'fields/formly-templates-' + PREFIX + '-' + field.name + '.html'
					//, wrapper: wrapperList
				});
			});

		}
	}

}());
