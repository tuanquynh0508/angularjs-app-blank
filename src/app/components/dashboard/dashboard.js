(function() {
    'use strict';

    angular
        .module('dashboard.controller', []).config(['$stateProvider', dashboardConfig])
        .controller('DashboardCtrl', ['$scope', '$state', '$stateParams', '$filter', dashboardCtrl]);

    ////////////////////////////////////////////////////////
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

    function dashboardCtrl($scope, $state, $stateParams, $filter) {
      $scope.hero = {
        name: 'Nguyen Nhu Tuan'
      };
    }
    ////////////////////////////////////////////////////////

})();
