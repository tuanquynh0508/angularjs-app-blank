(function() {
  'use strict';

  angular
    .module('about', []).config(['$stateProvider', config])
    .controller('AboutCtrl', ['$scope', '$state', '$stateParams', '$filter', aboutCtrl]);

  ////////////////////////////////////////////////////////
  function config($stateProvider) {
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