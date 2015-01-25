'use strict';

angular.module('aftlApp')
	.config(function ($stateProvider) {
		$stateProvider
			.state('form', {
				url: '/',

				views: {
					'header@': {
						templateUrl: 'app/views/header.html'
					},
					'form@': {
						templateUrl: 'app/views/form.html',
						controller: 'FormCtrl as vm'
					},
					'fields@': {
						templateUrl: 'app/views/fields.html',
						controller: 'FormCtrl as vm'
					}
				}
			});
	});
