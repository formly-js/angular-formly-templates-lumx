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
			template: "<div><lx-date-picker formly-dynamic-name=::id model=\"::result[options.key || index]\" label=\"{{::options.label}} {{::options.required ? '*' : ''}}\" ng-required=::options.required aria-label={{::id}}_label></lx-date-picker></div>"
		}, {
			name: 'select',
			template: "<div><br><h3><label for={{::id}}>{{::options.label || 'Select'}} {{::options.required ? '*' : ''}}</label></h3><lx-select id={{::id}} ng-model=\"::result[options.key || index]\" formly-dynamic-name=::id placeholder={{::options.placeholder}} choices=::options.choices change=::options.change filter=::options.filter loading={{::options.loading}} min-length=::options.minLength allow-clear=::options.allowClear aria-label={{::id}}_label><lx-select-selected>{{$selected[options.selected]}} {{::options.selected2 ? ' - ' + $selected[options.selected2] : ''}}</lx-select-selected><lx-select-choices ng-bind-html=options.choice>{{$choice[options.choice]}} {{::options.choice2 ? ' - ' + $choice[options.choice2] : ''}}</lx-select-choices></lx-select><p id={{::id}}_description ng-if=::options.description>{{::options.description}}</p></div>"
		}, {
			name: 'select-multiple',
			template: "<div><br><h3><label for={{::id}}>{{::options.label || 'Select'}} {{::options.required ? '*' : ''}}</label></h3><lx-select id={{::id}} ng-model=\"::result[options.key || index]\" formly-dynamic-name=::id placeholder={{::options.placeholder}} choices=::options.choices change=::options.change filter=::options.filter loading=::options.loading min-length=::options.minLength allow-clear=::options.allowClear multiple aria-label={{::id}}_label><lx-select-selected>{{$selected[options.selected]}} {{::options.selected2 ? ' - ' + $selected[options.selected2] : ''}}</lx-select-selected><lx-select-choices ng-bind-html=options.choice>{{$choice[options.choice]}} {{::options.choice2 ? ' - ' + $choice[options.choice2] : ''}}</lx-select-choices></lx-select><p id={{::id}}_description ng-if=::options.description>{{::options.description}}</p></div>"
		}, {
			name: 'radio-buttons',
			template: "<div><br><div class=radio-group aria-label={{::id}}_label formly-dynamic-name=::id><h3><label>{{::options.label}}</label></h3><div class=radio-button ng-repeat=\"(key, option) in options.options\"><input type=radio formly-custom-validation=::options.validators ng-value=::option.value ng-model=\"$parent.result[$parent.options.key || $parent.index]\" class=radio-button__input ng-disabled=::options.disabled ng-checked=::options.checked id=\"{{::id + '_'+ $index}}\"><label for=\"{{::id + '_'+ $index}}\" class=radio-button__label>{{::option.name}}</label><span ng-if=::option.help class=radio-button__help>{{::option.help}}</span></div></div></div>"
		}, {
			name: 'checkbox',
			template: "<div class=checkbox ng-class=\"{mt: options.help}\"><input type=checkbox id=\"{{::id + '_'+ $index}}\" formly-dynamic-name=::id class=checkbox__input ng-checked=options.checked ng-disabled=options.disabled ng-value=::options.value ng-model=\"::result[options.key || index]\" aria-label={{::id}}_label><label for=\"{{::id + '_'+ $index}}\" class=checkbox__label>{{::options.label}}</label><span class=checkbox__help>{{::options.help}}</span><ul class=form-error ng-messages=options.formField.$error ng-show=\"options.formField.$invalid && options.formField.$touched\"><li ng-message=required>Aren't you forgetting something?</li></ul></div>"
		}, {
			name: 'switch',
			template: "<div class=switch ng-class=\"{mt: options.help}\"><input type=checkbox id=\"{{::id + '_'+ $index}}\" class=switch__input ng-checked=options.checked ng-value=::options.value ng-disabled=::options.disabled ng-model=\"::result[options.key || index]\" formly-dynamic-name=::id aria-label=\"{{::id}}_label\"><label for=\"{{::id + '_'+ $index}}\" class=switch__label>{{::options.label}}</label><span class=switch__help>{{::options.help}}</span></div>"
		}, {
			name: 'text-field',
			template: "<div><lx-text-field id={{::id}} label=\"{{::options.label}} {{::options.required ? '*' : ''}}\" fixed-label=::options.fixedLabel model=\"::result[options.key || index]\" disabled valid=\"options.formField.$valid && options.formField.$touched\" error=\"options.formField.$invalid && options.formField.$touched || options.validators\" aria-label={{::id}}_label><input type={{::options.mode}} formly-dynamic-name=::id ng-model=\"::result[options.key || index]\" ng-disabled=::options.disabled ng-model-options=\"::options.modelOptions || {}\" ng-minlength=::options.minlength ng-maxlength=::options.maxlength ng-min=::options.min ng-max=::options.max ng-pattern=::options.pattern ng-blur=::options.blur ng-change=::options.change ng-required=::options.required></lx-text-field><ul class=form-error ng-messages=options.formField.$error ng-show=\"options.formField.$invalid && options.formField.$touched|| options.validators\"><li ng-message=required>Aren't you forgetting something?</li><li ng-message=email>Not a valid email.</li><li ng-message=minlength>Too short. {{::options.minlength}} or more characters.</li><li ng-message=maxlength>Too long. {{::options.maxlength}} or less characters.</li><li ng-message=min>Too low. {{::options.min}} or higher.</li><li ng-message=max>Too high. {{::options.max}} or lower.</li><li ng-message=pattern>This doesn't look right.</li><li ng-message=url>Not a valid url. For example: 'https://www.example.com'</li><li ng-message=number>Not a valid number.</li></ul></div>"
		}, {
			name: 'textarea',
			template: "<div><lx-text-field id={{::id}} label=\"{{::options.label}} {{::options.required ? '*' : ''}}\" fixed-label=::options.fixedLabel model=\"::result[options.key || index]\" disabled valid=\"options.formField.$valid && options.formField.$touched\" error=\"options.formField.$invalid && options.formField.$touched || options.validators\" aria-label={{::id}}_label><textarea formly-dynamic-name=::id ng-model=\"::result[options.key || index]\" ng-disabled=::options.disabled ng-model-options=\"::options.modelOptions || {}\" ng-minlength=::options.minlength ng-maxlength=::options.maxlength ng-pattern=::options.patternValue ng-blur=::options.blur ng-change=::options.change ng-required=::options.required></textarea><ul class=form-error ng-messages=options.formField.$error ng-show=\"options.formField.$invalid && options.formField.$touched || options.validators\"><li ng-message=required>Aren't you forgetting something?</li><li ng-message=minlength>Too short. {{::options.minlength}} or more characters.</li><li ng-message=maxlength>Too long. {{::options.maxlength}} or less characters.</li><li ng-message=pattern>This doesn't look right.</li></ul></lx-text-field></div>"
		}, {
			name: 'file-input',
			template: "<div class=grid><div class=grid__col6><lx-file-input label={{::options.fileLabel}} model=\"::result[options.key || index].fileData\" ng-disabled=::options.disabled ng-required=::options.required aria-label={{::id}}_label></lx-file-input></div><div class=grid__col6><div><lx-text-field id={{::id}} label=\"{{::options.label}} {{::options.required ? '*' : ''}}\" fixed-label=::options.fixedLabel model=\"::result[options.key || index].fileName\" disabled valid=\"options.formField.$valid && options.formField.$touched\" error=\"options.formField.$invalid && options.formField.$touched || options.validators\" aria-label={{::id}}_label><input formly-dynamic-name=::options.key data-ng-model=\"::result[options.key || index].fileName\" ng-disabled=::options.disabled ng-model-options=\"::options.modelOptions || {}\" ng-minlength=::options.minlength ng-maxlength=::options.maxlength ng-pattern=::options.pattern ng-required=::options.required></lx-text-field><ul class=form-error ng-messages=options.formField.$error ng-show=\"options.formField.$invalid && options.formField.$touched|| options.validators\"><li ng-message=required>Aren't you forgetting something?</li><li ng-message=email>Not a valid email.</li><li ng-message=minlength>Too short. {{::options.minlength}} or more characters.</li><li ng-message=maxlength>Too long. {{::options.maxlength}} or less characters.</li><li ng-message=pattern>This doesn't look right.</li><li ng-message=url>Not a valid url. For example: 'https://www.example.com'</li></ul></div></div></div>"
		}, {
			name: 'subhead',
			template: "<br><h2 ng-class=\"::options.class || 'fs-headline'\" ng-style=::options.style aria-label={{::options.subhead}}_subheader>{{::options.subhead}}</h2>"
		}
	];

	angular.module('formly.lumx', [])
		.constant('usingCustomTemplates', true) // false: turns templates off
		.constant('FIELDS', FIELDS)
		.run(cacheLumXTemplates)
		.config(setCustomTemplates);

	/*@ngInject*/
	function cacheLumXTemplates($templateCache, usingCustomTemplates, FIELDS) {
		if (usingCustomTemplates) {
			angular.forEach(FIELDS, function (field) {
				$templateCache.put('fields/lx-' + field.name + '.html', field.template);
			});
		}
	}

	/*@ngInject*/
	function setCustomTemplates(usingCustomTemplates, formlyConfigProvider, FIELDS) {
		if (usingCustomTemplates) {
			angular.forEach(FIELDS, function (field) {
				formlyConfigProvider.setTemplateUrl('lx-' + field.name, 'fields/lx-' + field.name + '.html');
			});
		}
	}

}());
