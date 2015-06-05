/**
 * Created by Bojana on 5/25/2015.
 */
iktProekt.controller('patientsController', function($scope, loginService, $location, mainService, $filter, $state){

    $scope.allPatients = []; //all patients in system for datatable
    $scope.allDoctors = []; //all doctors in system for datatable
    $scope.genders = [
        { id: "M", name: 'Male' },
        { id: "F", name: 'Female' }
    ];
    //returns all patients in the system for the datatable
    mainService.getAllPatients().success(function(data){
        $scope.allPatients = data;
    });

    //returs all doctors in the system for the datatable
    mainService.getAllDoctors().success(function (data) {
        $scope.allDoctors = data;
    });



    //add new patient to the database
    $scope.addPatient = function () {
       //take only date from datetime
        $scope.patient.birthDate = $filter('date')($scope.patient.dateOfBirth , "yyyy-dd-MM").toString().split("T")[0];
        delete $scope.patient['dateOfBirth'];
        console.log($scope.patient);

        mainService.addPatient($scope.patient).success(function (data) {
            $state.go('admin.patients');
        }).error(function(response){
            console.log(response);
        });
    }

    $scope.deletePacient= function(pacientId)
    {

        mainService.deletePacient(pacientId).success(function(data){

        }).
            error(function(data, status, headers, config) {
                if(status=='500')
                {
                    alert("Pacientot ne mozhe da se izbrishe");
                    console.log("Pacientot ne mozhe da se izbrishe")
                }
                else
                {
                    console.log("Unknown error type");
                }

            });
    }

    $scope.editPacient = function (pacientId) {

        mainService.getPacientById(pacientId).success(function(data){

            $scope.patient = data;
            $scope.addPacientState = false;
            $state.go('admin.patients.editPatient');
        });


    }

    $scope.updatePatient = function()
    {
        $scope.patient.birthDate = $filter('date')($scope.patient.dateOfBirth , "yyyy-dd-MM").toString().split("T")[0];
        delete $scope.patient['dateOfBirth'];
        console.log($scope.patient);

        mainService.addPatient($scope.patient).success(function (data) {
            $state.go('admin.patients');
        }).error(function(response){
            console.log(response);
        });
    }

    //workaround..
    $scope.goToAddNewPacientPage = function()
    {
        $scope.addPacientState = true;
        $state.go('admin.patients.newPatient');
    }


});
