'use strict';

/* Controllers */
  // signin controller
app.controller('SigninFormController', ['$scope', '$http', '$state','authenticationService','roleService',
    function($scope, $http, $state, authenticationService, roleService) {
    $scope.user = {};
    $scope.authError = null;
    $scope.login = function() {
      $scope.authError = null;
      // Try to login
      $http.post('api/login', {email: $scope.user.email, password: $scope.user.password})
      .then(function(response) {
        if ( !response.data.user ) {
          $scope.authError = 'Email or Password not right';
        }else{
          $state.go('app.dashboard-v1');
            if(roleService.validateRoleAdmin(authenticationService.getCurrentUser())){
                $state.go('admin');
            }else if(roleService.validateRoleDoctor(authenticationService.getCurrentUser()))
            {
                $state.go('doctor');
            }else if(roleService.validateRolePatient(authenticationService.getCurrentUser())){
                $state.go('patient');
            }

        }
      }, function(x) {
        $scope.authError = 'Server Error';
      });
    };
  }])
;