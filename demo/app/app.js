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
	]);

	function routerSetup($urlRouterProvider, $locationProvider) {
		$urlRouterProvider
			.otherwise('/');

		$locationProvider.html5Mode(true);
	}

	angular.module('aftlApp').config(routerSetup);


}());
