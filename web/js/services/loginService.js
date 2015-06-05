/**
 * Created by Bojana on 5/24/2015.
 */
iktProekt.service('loginService', function ($http) {

    var user = {};


    user.login = function (user) {
        var params = "username="+ encodeURIComponent(user.username) + "&" +
                "password="+ encodeURIComponent(user.password) + "&" +
                "rememberMe=" + false

        console.log(params);
        return $http({

            method: "POST",
            url: 'https://ezdravstvo.herokuapp.com/rest/user/authenticate',
            headers: {
                'Content-Type': "application/x-www-form-urlencoded"
            },
            data: params

        });
    }


    return user;


});