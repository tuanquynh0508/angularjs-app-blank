(function() {
  'use strict';

  angular
    .module('resources.contact', ['ngResource'])
    .factory(['ContactFactory', '$resource', contactFactory]);

  ////////////////////////////////////////////////////////
  function contactFactory($resource) {
    /* jshint ignore:start */
    var contact = $resource('/api/sendContact.php', {},
      send: {
        method: 'POST',
        //url: 'api/sendContact.php',
        params: {
          fullname: '@fullname',
          email: '@email',
          subject: '@subject',
          message: '@message'
        }
      }
    );
    return contact;
    /* jshint ignore:end */
  }
  ////////////////////////////////////////////////////////

})();