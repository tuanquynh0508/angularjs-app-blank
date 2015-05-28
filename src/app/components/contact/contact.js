(function() {
  'use strict';

  angular
    .module('contact', [])
    .config(['$stateProvider', config])
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

  function contactCtrl($scope, $state, $stateParams, $filter, ContactFactory) {
    $scope.sendSuccess = false;

    $scope.contact = {
      fullname: '',
      email: '',
      subject: '',
      message: '',
    };
console.log(ContactFactory);
    $scope.sendContact = function(contact) {
      if ($scope.contactForm.$valid) {
        console.log('Send contact successful!');
        ContactFactory.send({
          fullname: contact.fullname,
          email: contact.email,
          subject: contact.subject,
          message: contact.message
        }, function(responseData) {
          if(responseData.status === 'success') {
            console.log('Send contact successful!');
            $scope.sendSuccess = true;
          }
        });
      } else {
        $scope.contactForm.submitted = true;
      }
    };
  }
  ////////////////////////////////////////////////////////

})();
