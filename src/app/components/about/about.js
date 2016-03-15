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
      data: {
        pageTitle: 'About Us'
      }
    });
  }

  aboutCtrl.$inject = ['$scope', '$state', '$stateParams', '$filter'];
  function aboutCtrl($scope, $state, $stateParams, $filter) {

  }
  ////////////////////////////////////////////////////////

})();
