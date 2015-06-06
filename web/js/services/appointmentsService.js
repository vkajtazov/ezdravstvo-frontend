/**
 * Created by Bojana on 6/5/2015.
 */
iktProekt.service('appointmentsService', function ($http, $cookies) {


    var appointment = {};


    var doctorTocken = $cookies['usertoken'];

    appointment.getAllAppointmentsForDoctor = function(doctorId)
    {
        return $http({

            method: "POST",
            url: '',
            headers : {
                'X-Auth-Token' : doctorTocken
            }


        });
    }


    appointment.getAllPacientsForDoctor = function(doctorId)
    {


        return $http({

            method: "GET",
            url: 'https://ezdravstvo.herokuapp.com/rest/patients/byDoctor',
            headers : {
                'X-Auth-Token' : doctorTocken
            }

        });
    }

    return appointment;

});