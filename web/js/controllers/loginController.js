/**
 * Created by Bojana on 5/24/2015.
 */
iktProekt.controller('loginController', function ($scope, loginService, $location, authenticationService, enums) {

    $scope.user = {};

    $scope.login = function () {

        loginService.login($scope.user).success(function (data) {
            console.log("Login service data",data);
            authenticationService.setUserAuthenticated(data);

            role = authenticationService.getCurrentUser().role ;

           switch(role) {
               case enums.Roles.ROLE_ADMIN:
                   $location.path("/admin");
               case enums.Roles.ROLE_DOCTOR:
                   $location.path("/doctor");
               case enums.Roles.ROLE_PATIENT:
                   console.log("role: "+ role);
                   $location.path("/patient");
           }
        }).error(function (e) {
            console.log(e);
        });
    }

});

