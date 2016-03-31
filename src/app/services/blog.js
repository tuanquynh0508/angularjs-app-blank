(function() {
    'use strict';

    angular
        .module('blog.services', ['ngResource'])
        .factory('BlogFactory', blogFactory);

    ////////////////////////////////////////////////////////
    blogFactory.$inject = ['$http', '$q'];

    function blogFactory($http, $q) {
        var blog = {
            getList: function(category) {
                var deferred = $q.defer();
                var url = '/api/blog_' + category + '.json';
                $http({
                    method: 'GET',
                    url: url
                }).success(function(data) {
                    deferred.resolve(data);
                }).error(function() {
                    deferred.reject({});
                });
                return deferred.promise;
            }
        };
        return blog;
    }
    ////////////////////////////////////////////////////////

})();
