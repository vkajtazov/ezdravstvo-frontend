/**
 * Created by Bojana on 6/5/2015.
 */

iktProekt.service('diagnosisService', function ($http, $cookies) {


    var diagnosis = {};

    var pacientTocken =  $cookies['usertoken'] ;

    diagnosis.addNewDiagnosis = function(diagnosis)
    {
        console.log("Dijagnoza", diagnosis);
        return $http({

            method: "POST",
            url: 'https://ezdravstvo.herokuapp.com/rest/diagnoses',
            data : diagnosis



        });
    }

    diagnosis.getAllDiagnosisForPacient = function(pacient)
    {

            var params = 'patient_id='+ pacient.id;
            return $http({

                method: "POST",
                url: 'https://ezdravstvo.herokuapp.com/rest/diagnoses/byPatientId',
                headers : {
                    'X-Auth-Token' : pacientTocken,
                    'Content-Type' : 'application/x-www-form-urlencoded'
                },
                data : params






            });
    }


    return diagnosis;

});