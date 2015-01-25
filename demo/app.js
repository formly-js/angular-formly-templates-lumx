(function () {
	'use strict';

	angular.module('aftlApp', [
		/* necessary modules */
		'ngMessages',
		'formly',
		'lumx',
		'formly.lumx',
		/* additional */
		'ngSanitize',
		'ui.router',
		'ngPrettyJson'
	])
		.config(routerSetup);

	function routerSetup($urlRouterProvider, $locationProvider) {
		$urlRouterProvider
			.otherwise('/');

		$locationProvider.html5Mode(true);
	}


}());
