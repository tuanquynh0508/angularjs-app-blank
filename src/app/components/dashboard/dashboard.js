(function() {
  'use strict';

  angular
    .module('dashboard', []).config(['$stateProvider', config])
    .controller('DashboardCtrl', ['$scope', '$state', '$stateParams', '$filter', dashboardCtrl]);

  ////////////////////////////////////////////////////////
  function config($stateProvider) {
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

  }
  ////////////////////////////////////////////////////////

})();