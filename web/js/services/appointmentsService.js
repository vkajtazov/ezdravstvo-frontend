/**
 * Created by Bojana on 6/5/2015.
 */
iktProekt.factory('appointmentsService', function($resource, $cookies) {


    var userToken = $cookies['usertoken'];

    return $resource('https://ezdravstvo.herokuapp.com/rest/bookings/:action', {}, {
        find : {
            method : 'POST',
            isArray : true,
            params : {
                'action' : 'find'
            },
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded',
                'X-Auth-Token': userToken

            }
        },
        book : {
            method : 'POST',
            params : {
                'action' : 'book'
            },
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded',
                'X-Auth-Token': userToken
            }
        },

        getByPatient : {
            method : 'GET',
            isArray: true,
            params : {
                'action' : 'byPatient'
            },
            headers : {
                'X-Auth-Token': userToken
            }
        },
        cancel : {
            method : 'POST',
            params : {
                'action' : 'cancel'
            },
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded',
                'X-Auth-Token': userToken
            }
        }
    });
});
