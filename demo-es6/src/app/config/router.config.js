'use strict';

function routerSetup($urlRouterProvider) {
  $urlRouterProvider.otherwise('/checkbox');
}


export default angular.module('demo')
  .config(routerSetup);
