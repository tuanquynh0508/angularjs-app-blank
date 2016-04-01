(function() {
  'use strict';

  angular
    .module('blog.controller', ['blog.services'])
    .config(blogConfig)
    .controller('BlogCtrl', blogCtrl)
    .controller('BlogArticleCtrl', blogArticleCtrl);

  ////////////////////////////////////////////////////////
  blogConfig.$inject = ['$stateProvider'];
  function blogConfig($stateProvider) {
    $stateProvider.state('app.blog', {
      url: '/blog/:categorySlug',
      controller: 'BlogCtrl',
      templateUrl: 'components/blog/views/blog.tpl.html',
      resolve: {
          // Constant title
          $title: function () {
            return 'MENU_BLOGS';
          }
      }
    })
    .state('app.blog.article', {
      url: '/article/:articleId',
      views: {
        'blogContent@app.blog': {
          controller: 'BlogArticleCtrl',
          templateUrl: 'components/blog/views/article.tpl.html'
        }
      }
    });
  }

  blogCtrl.$inject = ['$scope', '$state', '$stateParams', '$filter', 'BlogFactory'];
  function blogCtrl($scope, $state, $stateParams, $filter, BlogFactory) {
    $scope.categorySlug = $stateParams.categorySlug;
    $scope.category = {};
    $scope.breadcrumb = [];

    BlogFactory.getList($scope.categorySlug).then(function(category){
      $scope.category = category;
      $scope.breadcrumb.push(
        {
          type: 'category',
          id: $scope.categorySlug,
          title: category.title
        }
      );
    }, function(){
      console.log('Can not load category "'+$scope.categorySlug+'"');
    });
  }

  blogArticleCtrl.$inject = ['$scope', '$state', '$stateParams', '$filter', '$sce', 'BlogFactory'];
  function blogArticleCtrl($scope, $state, $stateParams, $filter, $sce, BlogFactory) {
    $scope.categorySlug = $stateParams.categorySlug;
    $scope.articleId = parseInt($stateParams.articleId, 10);
    $scope.category = {};
    $scope.article = null;
    $scope.breadcrumb = [];

    BlogFactory.getList($scope.categorySlug).then(function(category){
      $scope.category = category;
      angular.forEach(category.articles, function(article) {
        if (parseInt(article.id, 10) === $scope.articleId) {
          $scope.article = article;
        }
      });
      $scope.breadcrumb.push(
        {
          type: 'category',
          id: $scope.categorySlug,
          title: category.title
        }
      );
      if(null !== $scope.article) {
        $scope.breadcrumb.push(
          {
            type: 'article',
            category: $scope.categorySlug,
            id: $scope.article.id,
            title: $scope.article.title
          }
        );
      }
    }, function(){
      console.log('Can not load article with id "'+$scope.articleId+'"');
    });
  }
  ////////////////////////////////////////////////////////

})();
