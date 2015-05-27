(function() {
  'use strict';

  angular
    .module('blog', []).config(['$stateProvider', config])
    .controller('BlogCtrl', ['$scope', '$state', '$stateParams', '$filter', blogCtrl]);

  ////////////////////////////////////////////////////////
  function config($stateProvider) {
    $stateProvider.state('app.blog', {
      url: '/blog',
      controller: 'BlogCtrl',
      templateUrl: 'components/blog/views/blog.tpl.html',
      data: {
        pageTitle: 'Blogs'
      }
    });
  }

  function blogCtrl($scope, $state, $stateParams, $filter) {

  }
  ////////////////////////////////////////////////////////

})();