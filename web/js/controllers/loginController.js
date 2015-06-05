/**
 * Created by Bojana on 5/24/2015.
 */
iktProekt.controller('loginController', function($scope, loginService, $location, $cookies){

    $scope.user = {};


    $scope.login = function()
    {
        $location.path("/admin");
        //loginService.login($scope.user).success(function(data){
        // //   $cookies.putUsertoken('usertoken',data['token']);
        //    $location.path("/admin");
        //
        //});
    }


});

