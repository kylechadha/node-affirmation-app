angular.module('melonController', [])

  // inject the Todo service factory into our controller
  .controller('mainController', function($scope, $http, Users) {
    $scope.userData = {};
    console.log('Angular is linked up!');


    // Get all users
    // ----------------------------------------------
    // ** Right now this is being returned anywhere that uses this controller ...
    // In the future will just want to restrict to the /users page --> do we need separate controllers for each page?
    // Answer: Yes! Controller for each page / section it looks like >> check how you guys did it in Tiles
    Users.get()
      .success(function(data) {
        $scope.users = data;
        console.log(data);
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });


    // Create a new user (will have to see how this reconciles with auth / passport)
    // ----------------------------------------------
    $scope.createTodo = function() {

      if (!$.isEmptyObject($scope.userData)) {

        Users.create($scope.userData)
          .success(function(data) {
            $scope.userData = {};
            // Probably won't say this ... probably have to use passport.authenticate or something
            $scope.users = data;
            console.log(data);
          })
          .error(function(data) {
            console.log('Error: ' + data);
          });

      }

    };


    // Delete a user
    // ----------------------------------------------
    $scope.deleteTodo = function(id) {

      Users.delete(id)
      .success(function(data) {
        $scope.users = data;
        console.log(data);
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });

    };

  });
