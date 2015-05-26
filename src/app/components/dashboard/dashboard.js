angular.module('dashboard', []).config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('layout.dashboard', {
      url: '/dashboard',
      controller: 'DashboardCtrl',
      templateUrl: 'components/dashboard/views/dashboard.tpl.html',
      data: {
        pageTitle: 'Dashboard Page'
      }
    });
  }
]).controller('DashboardCtrl', ['$scope', '$state', '$stateParams', '$filter',
  function($scope, $state, $stateParams, $filter) {

  }
]);