/**
 * Created by Bojana on 6/5/2015.
 */

iktProekt.service('diagnosisService', function ($http) {


    var diagnosis = {};

    var pacientTocken = "viktor:a090ab0d03dabe30f0e6b2508f8843ac";

    diagnosis.addNewDiagnosis = function(diagnosis)
    {
        console.log("Dijagnoza", diagnosis);
        return $http({

            method: "POST",
            url: 'https://ezdravstvo.herokuapp.com/rest/diagnoses',
            data : diagnosis



        });
    }

    diagnosis.getAllDiagnosisForPacient = function(pacientId)
    {

            return $http({

                method: "GET",
                url: 'https://ezdravstvo.herokuapp.com/rest/diagnoses/byPatient',
                headers : {
                    'X-Auth-Token' : pacientTocken
                }




            });
    }


    return diagnosis;

});