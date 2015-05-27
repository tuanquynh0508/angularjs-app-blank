(function() {
  'use strict';

  angular
    .module('directives.common', []);
    //.directive(['activeLink', '$location', activeLink]);

  ////////////////////////////////////////////////////////
  // function activeLink($location) {
  //   var directive =  {
  //     restrict: 'A',
  //     //replace: false,
  //     link: activeItem
  //   };
  //   return directive;

  //   function activeItem(scope, element, attrs, controller) {
  //     var classCss = attrs.activeLink;
  //     var aElement = element.find('a');
  //     var state = aElement.attr('ui-sref');
  //     //console.log(state);
  //     scope.location = location;
  //     scope.$watch('location.path()', function(newPath) {
  //       console.log('xxxx');
  //       // if (path === newPath) {
  //       //   element.addClass(clazz);
  //       // } else {
  //       //   element.removeClass(clazz);
  //       // }
  //     });
  //   }
  // }
  ////////////////////////////////////////////////////////

})();