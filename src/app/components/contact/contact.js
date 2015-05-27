(function() {
  'use strict';

  angular
    .module('contact', []).config(['$stateProvider', config])
    .controller('ContactCtrl', ['$scope', '$state', '$stateParams', '$filter', contactCtrl]);

  ////////////////////////////////////////////////////////
  function config($stateProvider) {
    $stateProvider.state('app.contact', {
      url: '/contact_us',
      controller: 'ContactCtrl',
      templateUrl: 'components/contact/views/contact.tpl.html',
      data: {
        pageTitle: 'Contact Us'
      }
    });
  }

  function contactCtrl($scope, $state, $stateParams, $filter) {
    $scope.sendSuccess = false;

    $scope.contact = {
      fullname: '',
      email: '',
      subject: '',
      message: '',
    };

    $scope.sendContact = function(contact) {
      if ($scope.contactForm.$valid) {
        console.log('Send contact successful!');
        $scope.sendSuccess = true;
      } else {
        $scope.contactForm.submitted = true;
      }
    };
  }
  ////////////////////////////////////////////////////////

})();