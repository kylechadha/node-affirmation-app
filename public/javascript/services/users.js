angular.module('userService', [])

  .factory('Users', function($http) {
    return {
      get : function() {
        return $http.get('/users');
      },
      create : function(todoData) {
        return $http.post('/', userData);
      },
      delete : function(id) {
        return $http.delete('/users/' + id);
      }
      // What else do we need to add here for LOGIN, LOGOUT, and PROFILE views
      // probably a getLogin that hits /login ... but then again this isn't really part of USERS ... or is it?
      // try it out and see! no biggie!
    }
  });
