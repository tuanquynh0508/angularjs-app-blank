(function() {
	'use strict';

	angular
		.module('app', [
			'ngRoute',
			'ngResource',
			'ui.router',
			'templates.app',
			'templates.common',
			//Component
			'dashboard',
			'about',
			'contact',
			'blog',
			//Directives
			'directives.common',
			'resources.contact'
			/*// Top level modules only
			 'directives.test1',
			 'filters.common',
			 'page',
			 'forms'*/
		])
		.config(['$stateProvider', '$urlRouterProvider', config])
		.controller('AppCtrl', ['$scope', '$state', '$location', appCtrl]);

	////////////////////////////////////////////////////////
	function config($stateProvider, $urlRouterProvider) {
		$stateProvider.state('app', {
			templateUrl: 'shared/layout.tpl.html'
			/*data: {
				permissions: {
					except: ['anonymous']
				}
			}*/
		});
		$urlRouterProvider.otherwise('/dashboard');
	}

	function appCtrl($scope, $state, $location) {
		//$scope.location = $location;
		$scope.$state = $state;

		$scope.gotoHome = function () {
			$location.path('/dashboard');
		};

		$scope.gotoAbout = function () {
			$location.path('/abou_us');
		};

		$scope.gotoContact = function () {
			$location.path('/contact_us');
		};

		$scope.gotoBlog = function () {
			$location.path('/blog');
		};
	}
	////////////////////////////////////////////////////////

})();
