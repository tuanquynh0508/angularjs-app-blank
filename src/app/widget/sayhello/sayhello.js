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
    .controller('sayHelloController', ['$scope', '$state', '$stateParams', sayHelloController]);

  ////////////////////////////////////////////////////////
  function sayHelloController($scope, $state, $stateParams) {
  }
  ////////////////////////////////////////////////////////

})();
