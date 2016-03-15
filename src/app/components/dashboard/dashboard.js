(function() {
    'use strict';

    angular
        .module('dashboard.controller', [])
        .config(dashboardConfig)
        .controller('DashboardCtrl', dashboardCtrl);

    ////////////////////////////////////////////////////////
    dashboardConfig.$inject = ['$stateProvider'];
    function dashboardConfig($stateProvider) {
        $stateProvider.state('app.dashboard', {
            url: '/dashboard',
            controller: 'DashboardCtrl',
            templateUrl: 'components/dashboard/views/dashboard.tpl.html',
            data: {
                pageTitle: 'Dashboard Page'
            }
        });
    }

    dashboardCtrl.$inject = ['$scope', '$state', '$stateParams', '$filter'];
    function dashboardCtrl($scope, $state, $stateParams, $filter) {
      $scope.hero = {
        name: 'Hello Angular JS!'
      };
    }
    ////////////////////////////////////////////////////////

})();
