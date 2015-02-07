(function () {
	'use strict';
	var FIELDS = [{
		"name": "checkbox",
		"template": "<div class=\"checkbox\" ng-class=\"{mt: options.templateOptions.help}\"><input class=\"checkbox__input\" type=\"checkbox\" id=\"{{::id}}\" name=\"{{::id}}\" formly-custom-validation=\"options.validators\" aria-describedby=\"{{::id}}_checkbox\" ng-disabled=\"options.templateOptions.disabled\" ng-model=\"model[options.key]\"><label for=\"{{::id}}\" class=\"checkbox__label\">{{::options.templateOptions.label}}</label><span class=\"checkbox__help\">{{::options.templateOptions.help}}</span></div>"
	}, {
		"name": "date-picker",
		"template": "<div><lx-date-picker name=\"{{::id}}\" model=\"model[options.key]\" label=\"{{::options.templateOptions.label}} {{::options.templateOptions.required ? \'*\' : \'\'}}\" ng-required=\"options.templateOptions.required\" aria-describedby=\"{{::id}}_datePicker\"></lx-date-picker></div>"
	}, {
		"name": "radio",
		"template": "<div><br><div class=\"radio-group\" name=\"{{::id}}\"><h3><label>{{::options.templateOptions.label}}</label></h3><div class=\"radio-button\" ng-repeat=\"(key, option) in options.templateOptions.options\"><input type=\"radio\" formly-custom-validation=\"options.validators\" ng-model=\"$parent.model[$parent.options.key]\" ng-disabled=\"::option.disabled\" class=\"radio-button__input\" ng-value=\"::option.value\" aria-describedby=\"{{::id}} + \'_\' + {{::$index}} + \'_radioButton\'\" id=\"{{::id + \'_\'+ $index}}\"><label for=\"{{::id + \'_\'+ $index}}\" class=\"radio-button__label\">{{::option.name}}</label><span ng-if=\"::option.help\" class=\"radio-button__help\">{{::option.help}}</span></div></div></div>"
	}, {
		"name": "select-multiple",
		"template": "<div><br><h3><label for=\"{{::id}}\">{{::options.templateOptions.label || \'Select\'}} {{::options.templateOptions.required ? \'*\' : \'\'}}</label></h3><lx-select id=\"{{::id}}\" ng-model=\"model[options.key]\" name=\"{{::id}}\" aria-describedby=\"{{::id}}_select\" choices=\"options.templateOptions.options\" placeholder=\"{{::options.templateOptions.placeholder}}\" min-length=\"::options.templateOptions.minLength\" allow-clear=\"::options.templateOptions.allowClear\" multiple=\"multiple\"><lx-select-selected>{{$selected[options.templateOptions.selected]}} {{::options.templateOptions.selected2 ? \' - \' + $selected[options.templateOptions.selected2] : \'\'}}</lx-select-selected><lx-select-choices>{{$choice[options.templateOptions.choice]}} {{::options.templateOptions.choice2 ? \' - \' + $choice[options.templateOptions.choice2] : \'\'}}</lx-select-choices></lx-select></div>"
	}, {
		"name": "select",
		"template": "<div><br><h3><label for=\"{{::id}}\">{{::options.templateOptions.label || \'Select\'}} {{::options.templateOptions.required ? \'*\' : \'\'}}</label></h3><lx-select id=\"{{::id}}\" ng-model=\"model[options.key]\" name=\"{{::id}}\" aria-describedby=\"{{::id}}_select\" choices=\"options.templateOptions.options\" placeholder=\"{{::options.templateOptions.placeholder}}\" min-length=\"::options.templateOptions.minLength\" allow-clear=\"::options.templateOptions.allowClear\"><lx-select-selected>{{$selected[options.templateOptions.selected]}} {{::options.templateOptions.selected2 ? \' - \' + $selected[options.templateOptions.selected2] : \'\'}}</lx-select-selected><lx-select-choices>{{$choice[options.templateOptions.choice]}} {{::options.templateOptions.choice2 ? \' - \' + $choice[options.templateOptions.choice2] : \'\'}}</lx-select-choices></lx-select></div>"
	}, {
		"name": "switch",
		"template": "<div class=\"switch\" ng-class=\"{mt: options.templateOptions.help}\"><input type=\"checkbox\" id=\"{{::id + \'_\'+ $index}}\" class=\"switch__input\" ng-model=\"model[options.key]\" ng-disabled=\"options.templateOptions.disabled\" name=\"{{::id}}\" aria-describedby=\"{{::id}}_switch\"><label for=\"{{::id + \'_\'+ $index}}\" class=\"switch__label\">{{::options.templateOptions.label}}</label><span class=\"switch__help\">{{::options.templateOptions.help}}</span></div>"
	}, {
		"name": "text",
		"template": "<div><lx-text-field id=\"{{::id}}\" icon=\"{{::options.templateOptions.icon}}\" theme=\"{{::options.templateOptions.theme}}\" label=\"{{::options.templateOptions.label}} {{::options.templateOptions.required ? \'*\' : \'\'}}\" fixed-label=\"::options.templateOptions.fixedLabel\" model=\"::model[options.key || index]\" disabled=\"::options.templateOptions.disabled\" valid=\"options.formControl.$valid && options.formControl.$touched\" error=\"options.formControl.$invalid && options.formControl.$touched || options.validators\" aria-describedby=\"{{::id}}_textField\"><input type=\"{{::options.templateOptions.type}}\" name=\"{{::id}}\" ng-model=\"model[options.key]\" ng-required=\"::options.templateOptions.required\" ng-disabled=\"::options.templateOptions.disabled\" ng-model-options=\"::options.modelOptions || {}\"></lx-text-field></div>"
	}, {
		"name": "textarea",
		"template": "<div><lx-text-field id=\"{{::id}}\" icon=\"{{::options.templateOptions.icon}}\" theme=\"{{::options.templateOptions.theme}}\" label=\"{{::options.templateOptions.label}} {{::options.templateOptions.required ? \'*\' : \'\'}}\" fixed-label=\"::options.templateOptions.fixedLabel\" model=\"::model[options.key || index]\" disabled=\"::options.templateOptions.disabled\" valid=\"options.formControl.$valid && options.formControl.$touched\" error=\"options.formControl.$invalid && options.formControl.$touched || options.validators\" aria-describedby=\"{{::id}}_textarea\"><textarea name=\"{{::id}}\" ng-model=\"model[options.key]\" ng-required=\"::options.templateOptions.required\" ng-disabled=\"::options.templateOptions.disabled\" ng-model-options=\"::options.modelOptions || {}\">\n    </textarea></lx-text-field></div>"
	}];
	var WRAPPERS = [{
		"name": "wrapper-above",
		"template": "<span ng-if=\"::options.templateOptions.above.space\"><br></span><div><span ng-if=\"::options.templateOptions.above.text\" ng-class=\"::options.templateOptions.above.class || \'fs-headline\'\" ng-style=\"::options.templateOptions.above.style\" aria-describedby=\"{{::id}}_wrapper_above\">{{::options.templateOptions.above.text}}</span><formly-transclude></formly-transclude></div>"
	}, {
		"name": "wrapper-below",
		"template": "<div><formly-transclude></formly-transclude><span ng-if=\"::options.templateOptions.below.text\" ng-class=\"::options.templateOptions.below.class || \'p+\'\" ng-style=\"::options.templateOptions.below.style\" aria-describedby=\"{{::id}}_wrapper_below\">{{::options.templateOptions.below.text}}</span></div><span ng-if=\"::options.templateOptions.below.space\"><br></span>"
	}, {
		"name": "wrapper-card",
		"template": "<div class=\"card\"><div ng-if=\"::options.templateOptions.card.image\" class=\"card__img card__img--top\"><img ng-src=\"{{::options.templateOptions.card.image}}\"> <span ng-if=\"::options.templateOptions.card.imageTitle\" class=\"fs-headline tc-white-1 display-block\">{{options.templateOptions.card.imageTitle}}</span></div><div class=\"p+\"><strong class=\"fs-headline display-block\">{{options.templateOptions.card.title}}</strong> <span class=\"fs-subhead tc-black-2 display-block\">{{options.templateOptions.card.subTitle}}</span></div><div class=\"paragraph fs-body-1\"><formly-transclude></formly-transclude></div></div>"
	}, {
		"name": "wrapper-div",
		"template": "<div ng-class=\"::options.templateOptions.div.class\" ng-style=\"::options.templateOptions.div.style\"><formly-transclude></formly-transclude></div>"
	}, {
		"name": "wrapper-error-required",
		"template": "<div><formly-transclude></formly-transclude><ul class=\"form-error\" ng-messages=\"options.formControl.$error\" ng-show=\"options.formControl.$invalid && options.formControl.$touched\"><li ng-message=\"required\">Aren\'t you forgetting something?</li></ul></div>"
	}, {
		"name": "wrapper-errors-text",
		"template": "<div><formly-transclude></formly-transclude><ul class=\"form-error\" ng-messages=\"options.formControl.$error\" ng-show=\"options.formControl.$invalid && options.formControl.$touched|| options.validators\"><li ng-message=\"required\">Aren\'t you forgetting something?</li><li ng-message=\"email\">Not a valid email.</li><li ng-message=\"minlength\">Too short. {{::options.minlength}} or more characters.</li><li ng-message=\"maxlength\">Too long. {{::options.maxlength}} or less characters.</li><li ng-message=\"min\">Too low. {{::options.min}} or higher.</li><li ng-message=\"max\">Too high. {{::options.max}} or lower.</li><li ng-message=\"pattern\">This doesn\'t look right.</li><li ng-message=\"url\">Not a valid url. For example: \'https://www.example.com\'</li><li ng-message=\"number\">Not a valid number.</li></ul></div>"
	}, {
		"name": "wrapper-flex-container",
		"template": "<div ng-class=\"::options.templateOptions.flexContainer.class\" ng-style=\"::options.templateOptions.flexContainer.style\" flex-container=\"{{::options.templateOptions.flexContainer.container}}\" flex-align=\"{{::options.templateOptions.flexContainer.align}}\" flex-gutter=\"{{::options.templateOptions.flexContainer.gutter}}\"></div>"
	}, {
		"name": "wrapper-flex-item",
		"template": "<div ng-class=\"::options.templateOptions.flex.class\" flex-item=\"{{::options.templateOptions.flex.item}}\" flex-order=\"{{::options.templateOptions.flex.order}}\"><formly-transclude></formly-transclude></div>"
	}];
	angular.module('formly.lumx', []).constant('usingCustomTemplates', true).constant('FIELDS', FIELDS).constant('WRAPPERS', WRAPPERS).constant('PREFIX', 'lx').run(cacheLumXTemplates).config(setCustomTemplates);
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
			angular.forEach(WRAPPERS, function (wrapper) {
				formlyConfigProvider.setWrapper({
					name: PREFIX + '-wrapper-' + wrapper.name,
					templateUrl: 'wrappers/formly-wrappers-' + PREFIX + '-' + wrapper.name + '.html'
				});
			});
			angular.forEach(FIELDS, function (field) {
				formlyConfigProvider.setType({
					name: PREFIX + '-' + field.name,
					templateUrl: 'fields/formly-templates-' + PREFIX + '-' + field.name + '.html'
				});
			});
		}
	}
}());