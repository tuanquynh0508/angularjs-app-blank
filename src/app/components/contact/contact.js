(function() {
  'use strict';

  angular
    .module('contact.controller', ['contact.services'])
    .config(['$stateProvider', contactConfig])
    .controller('ContactCtrl', ['$scope', '$state', '$stateParams', '$filter', 'ContactFactory', contactCtrl]);

  ////////////////////////////////////////////////////////
  function contactConfig($stateProvider) {
    $stateProvider.state('app.contact', {
      url: '/contact_us',
      controller: 'ContactCtrl',
      templateUrl: 'components/contact/views/contact.tpl.html',
      data: {
        pageTitle: 'Contact Us'
      }
    });
  }

  function contactCtrl($scope, $state, $stateParams, $filter, ContactFactory) {
    $scope.sendSuccess = false;

    $scope.sendContact = function(contact) {
      if ($scope.contactForm.$valid) {
        ContactFactory.sendContact({}, contact, function(responseData) {
          if(responseData.status === 'success') {
            $scope.reset();
            $scope.sendSuccess = true;
          }
        });
      } else {
        $scope.contactForm.submitted = true;
      }
    };

    $scope.reset = function() {
      $scope.contact = {};
    };
  }
  ////////////////////////////////////////////////////////

})();
