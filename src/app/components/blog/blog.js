(function() {
  'use strict';

  angular
    .module('blog.controller', ['blog.services'])
    .config(blogConfig)
    .controller('BlogCtrl', blogCtrl);

  ////////////////////////////////////////////////////////
  blogConfig.$inject = ['$stateProvider'];
  function blogConfig($stateProvider) {
    $stateProvider.state('app.blog', {
      url: '/blog',
      controller: 'BlogCtrl',
      templateUrl: 'components/blog/views/blog.tpl.html',
      resolve: {
          // Constant title
          $title: function () {
            return 'MENU_BLOGS';
          }
      }
    });
  }

  blogCtrl.$inject = ['$scope', '$state', '$stateParams', '$filter', 'BlogFactory'];
  function blogCtrl($scope, $state, $stateParams, $filter, BlogFactory) {
    BlogFactory.getList('category_1').then(function(data){
      console.log(data);
    }, function(){
      console.log('Errors!');
    });
  }
  ////////////////////////////////////////////////////////

})();
