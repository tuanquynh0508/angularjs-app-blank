(function() {
  'use strict';

  angular
    .module('about.controller', []).config(['$stateProvider', aboutConfig])
    .controller('AboutCtrl', ['$scope', '$state', '$stateParams', '$filter', aboutCtrl]);

  ////////////////////////////////////////////////////////
  function aboutConfig($stateProvider) {
    $stateProvider.state('app.about', {
      url: '/about_us',
      controller: 'AboutCtrl',
      templateUrl: 'components/about/views/about.tpl.html',
      data: {
        pageTitle: 'About Us'
      }
    });
  }

  function aboutCtrl($scope, $state, $stateParams, $filter) {

  }
  ////////////////////////////////////////////////////////

})();