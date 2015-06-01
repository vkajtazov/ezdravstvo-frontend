/**
 * Created by Bojana on 5/24/2015.
 */
iktProekt.controller('loginController', function($scope, loginService, $location){

    $scope.user = {};


    $scope.login = function()
    {

        loginService.login($scope.user).success(function(data){
            $location.path("/admin");

        });
    }


});

