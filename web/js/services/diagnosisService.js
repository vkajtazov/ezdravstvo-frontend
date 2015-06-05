/**
 * Created by Bojana on 6/5/2015.
 */

iktProekt.service('diagnosisService', function ($http) {


    var diagnosis = {};


    diagnosis.addNewDiagnosis = function(diagnosis)
    {
        return $http({

            method: "POST",
            url: '',
            data : diagnosis



        });
    }


    return diagnosis;

});