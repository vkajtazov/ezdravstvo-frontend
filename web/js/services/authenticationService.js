iktProekt.service('authenticationService', function ($cookies, enums, roleService) {


    this.setUserAuthenticated = function (data) {

        data['user'].role =  roleService.getRoleforName(data['user'].role);
        $cookies['usertoken'] = data['token'];

        $cookies['currentUser'] = JSON.stringify(data['user']);

    };

    this.getCurrentUser = function () {


       currentUser =  (typeof $cookies['currentUser'] != 'undefined') ? JSON.parse($cookies['currentUser']) : '';
        return currentUser;
    };

    this.isLoggedIn = function () {
        return $cookies.hasOwnProperty('usertoken') && $cookies['usertoken'] != null;
    };

});