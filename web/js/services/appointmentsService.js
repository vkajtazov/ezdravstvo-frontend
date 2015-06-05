/**
 * Created by Bojana on 6/5/2015.
 */
iktProekt.service('appointmentsService', function ($http) {


    var appointment = {};


    appointment.getAllAppointmentsForDoctor = function(doctorId)
    {
        return $http({

            method: "POST",
            url: ''



        });
    }


    appointment.getAllPacientsForDoctor = function(doctorId)
    {
        //NOW RETURNS ALL NEED TO RETURN ONLY FOR THIS DOCTOR
        return $http({

            method: "GET",
            url: 'https://ezdravstvo.herokuapp.com/rest/patients'



        });
    }

    return appointment;

});