/**
 * Created by Bojana on 6/5/2015.
 */
iktProekt.service('appointmentsService', function ($http) {


    var appointment = {};


    var doctorTocken = 'petar:9c8d48331b8b1154e34179ab7a159c1d';

    appointment.getAllAppointmentsForDoctor = function(doctorId)
    {
        return $http({

            method: "POST",
            url: ''



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