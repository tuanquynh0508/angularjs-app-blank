describe('Test Dashboard', function () {
  /* Injection Module */
  beforeEach(function () {
    module('app');
    module('dashboard.controller');
  });

  /* Init variable for environment */
  var $controller;
  var $rootScope, $scope, $state, $stateParams, $filter;

  beforeEach(inject(function(_$controller_,
    _$rootScope_, _$state_, _$stateParams_, _$filter_) {

    $controller = _$controller_;
    $rootScope = _$rootScope_;
    $state = _$state_;
    $stateParams = _$stateParams_;
    $filter = _$filter_;

    $scope = $rootScope.$new();
  }));

  /* Test controller */
  describe('Controller', function() {
    var controller;

    /* Injection for controller */
    beforeEach(function() {
      controller = $controller('DashboardCtrl', {
        $scope: $scope,
        $state: $state,
        $stateParams: $stateParams,
        $filter: $filter
      });
    });

    //it('Nothing to test', function() {});
  });

});
