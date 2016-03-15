(function() {
    'use strict';

    angular
        .module('app', [
            'ngRoute',
            'ngResource',
            'ui.router',
            'templates.app',
            'templates.common',
            'ui.bootstrap',
            //Component
            'dashboard.controller',
            'about.controller',
            'contact.controller',
            'blog.controller',
            'demo',
            //Directives
            'directives.common',
            //Plugins
            'pascalprecht.translate',
            'ngAnimate'
            /*// Top level modules only
			 'directives.test1',
			 'filters.common',
			 'page',
			 'forms'*/
        ])
        .config(appConfig)
        .config(translateConfig)
        .controller('AppCtrl', appCtrl);

    ////////////////////////////////////////////////////////
    appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function appConfig($stateProvider, $urlRouterProvider) {
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

    translateConfig.$inject = ['$translateProvider'];
    function translateConfig($translateProvider) {
        $translateProvider.useStaticFilesLoader({
            prefix: 'i18n/',
            suffix: '.json'
        });
        $translateProvider.preferredLanguage('vi_VN');
        $translateProvider.useSanitizeValueStrategy('escaped');
    }

    appCtrl.$inject = ['$scope', '$state', '$location', '$translate'];
    function appCtrl($scope, $state, $location, $translate) {
        //$scope.location = $location;
        $scope.$state = $state;

        $scope.gotoHome = function() {
            $location.path('/dashboard');
        };

        $scope.gotoAbout = function() {
            $location.path('/abou_us');
        };

        $scope.gotoContact = function() {
            $location.path('/contact_us');
        };

        $scope.gotoBlog = function() {
            $location.path('/blog');
        };

        $scope.switchLanguage = function(lang) {
            if ($translate.use() !== lang) {
                $translate.use(lang);
            }
        };
    }
    ////////////////////////////////////////////////////////

})();
