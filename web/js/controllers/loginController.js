/**
 * Created by Bojana on 5/24/2015.
 */
iktProekt.controller('loginController', function ($cookies, $scope, loginService, $location, authenticationService, enums) {

    $scope.user = {};

    $scope.login = function () {

        loginService.login($scope.user).success(function (data) {
            console.log("Login service data",data);

           authenticationService.setUserAuthenticated(data);



            role = authenticationService.getCurrentUser().role ;



           switch(role) {
               case enums.Roles.ROLE_ADMIN:
                   $location.path("/admin");
                   break;
               case enums.Roles.ROLE_DOCTOR:

                   $location.path("/doctor");
                   break;

               case enums.Roles.ROLE_PATIENT:

                   $location.path("/patient");
                   break;
               default:
                   console.log("Invalid role");

           }
        }).error(function (e) {
            console.log(e);
            alert("Внесовте невалидно корисничко име или лозинка! Пробајте повторно!")
        });
    }


});

