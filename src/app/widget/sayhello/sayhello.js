(function() {
  'use strict';

  angular
    .module('demo', [])
    .component('sayHello', {
      templateUrl: 'widget/sayhello/views/sayHello.tpl.html',
      controller: 'sayHelloController',
      bindings: {
        hero: '='
      },
    })
    .controller('sayHelloController', sayHelloController);

  ////////////////////////////////////////////////////////
  sayHelloController.$inject = ['$scope', '$state', '$stateParams'];
  function sayHelloController($scope, $state, $stateParams) {
  }
  ////////////////////////////////////////////////////////

})();
