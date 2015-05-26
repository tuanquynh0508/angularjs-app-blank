angular.module('app', [
	'ngRoute',
	'ngResource',
	'ui.router',
	'templates.app',
	'templates.common',
	'dashboard'
	/*// Top level modules only
	 'directives.test1',
	 'filters.common',
	 'page',
	 'forms'*/
])

.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$stateProvider.state('layout', {
			templateUrl: 'shared/layout.tpl.html'
			/*data: {
				permissions: {
					except: ['anonymous']
				}
			}*/
		});
		$urlRouterProvider.otherwise('/dashboard');
	}])

.controller('AppCtrl', ['$scope', '$location', function ($scope, $location) {
		/*$scope.location = $location;

		 $scope.gotoPage1 = function () {
		 $location.path('/page1');
		 };*/

	}])

;
