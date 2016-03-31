(function() {
  'use strict';

  angular
    .module('contact.controller', ['contact.services'])
    .config(contactConfig)
    .controller('ContactCtrl', contactCtrl);

  ////////////////////////////////////////////////////////
  contactConfig.$inject = ['$stateProvider'];
  function contactConfig($stateProvider) {
    $stateProvider.state('app.contact', {
      url: '/contact_us',
      controller: 'ContactCtrl',
      templateUrl: 'components/contact/views/contact.tpl.html',
      resolve: {
          // Constant title
          $title: function () {
            return 'MENU_CONTACT_US';
          }
      }
    });
  }

  contactCtrl.$inject = ['$scope', '$state', '$stateParams', '$filter', 'ContactFactory'];
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
