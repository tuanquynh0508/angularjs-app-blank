(function() {
  'use strict';

  angular
    .module('resources.contact', ['ngResource'])
    .factory(['ContactFactory', '$resource', contactFactory]);

  ////////////////////////////////////////////////////////
  function contactFactory($resource) {
    var contact = $resource('/api/sendContact.php', null, {
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
    });
    return contact;
  }
  ////////////////////////////////////////////////////////

})();
