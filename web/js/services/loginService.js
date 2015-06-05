/**
 * Created by Bojana on 5/24/2015.
 */
iktProekt.service('loginService', function($http){

        var user = {};


        user.login = function(user)
        {

            return $http({

                    method: "POST",
                    url: 'https://ezdravstvo.herokuapp.com/rest/user/authenticate',
                    data: {
                        user: user
                    }

            });




}



        return user;




});