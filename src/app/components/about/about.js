(function() {
  'use strict';

  angular
    .module('about.controller', []).config(aboutConfig)
    .controller('AboutCtrl', aboutCtrl);

  ////////////////////////////////////////////////////////
  aboutConfig.$inject = ['$stateProvider'];
  function aboutConfig($stateProvider) {
    $stateProvider.state('app.about', {
      url: '/about_us',
      controller: 'AboutCtrl',
      templateUrl: 'components/about/views/about.tpl.html',
      resolve: {
          // Constant title
          $title: function () {
            return 'MENU_ABOUT_US';
          }
      }
    });
  }

  aboutCtrl.$inject = ['$scope', '$state', '$stateParams', '$filter'];
  function aboutCtrl($scope, $state, $stateParams, $filter) {

  }
  ////////////////////////////////////////////////////////

})();
