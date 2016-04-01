(function() {
  'use strict';

  angular
    .module('filters.common', [])
    .filter('rawHtml', rawHtml);

  ////////////////////////////////////////////////////////
  rawHtml.$inject = ['$sce'];
  function rawHtml($sce) {
    return function(val) {
      return $sce.trustAsHtml(val);
    };
  }
  ////////////////////////////////////////////////////////

})();
