iktProekt.service('authenticationService', function ($cookies, enums, roleService) {


    this.setUserAuthenticated = function (data) {

        data['user'].role =  roleService.getRoleforName(data['user'].role);
        $cookies['usertoken'] = data['token'];
        $cookies['currentUser'] = data['user'];
    };

    this.getCurrentUser = function () {
        var r = $cookies['currentUser'];
        console.log(":::ROLE: "+ r.role);
        return $cookies['currentUser'];
    };

    this.isLoggedIn = function () {
        return $cookies.hasOwnProperty('usertoken') && $cookies['usertoken'] != null;
    };

});