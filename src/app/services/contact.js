(function() {
  'use strict';

  angular
    .module('contact.services', ['ngResource'])
    .factory('ContactFactory', contactFactory);

  ////////////////////////////////////////////////////////
  contactFactory.$inject = ['$resource'];
  function contactFactory($resource) {
    var contact = $resource('/api/sendContact.php', null, {
      sendContact: {
        method: 'POST'//,
        //isArray:true
      }
    });
    return contact;
  }
  ////////////////////////////////////////////////////////

})();
