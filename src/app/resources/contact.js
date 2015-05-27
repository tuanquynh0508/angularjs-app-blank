(function() {
  'use strict';

  angular
    .module('resources.contact', ['ngResource'])
    .factory(['Contact', '$resource', contact]);

  ////////////////////////////////////////////////////////
  function contact($resource) {
    var Contact = $resource('api/sendContact.php', {},
      post: {
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
    return Contact;
  }
  ////////////////////////////////////////////////////////

})();