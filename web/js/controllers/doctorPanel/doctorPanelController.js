/**
 * Created by Bojana on 6/3/2015.
 */

iktProekt.controller('doctorPanelController', function ($scope,$filter,mainService,authenticationService, $cookies, loginService, $location, $filter, $state,  diagnosisService) {


    $scope.doctor  = authenticationService.getCurrentUser(); //get doctor by id from database

    $scope.count  = 0;
    $scope.allAppointmentsForDoctor = [];
    $scope.allPacientsForDoctor = [];
    $scope.allMedications = [];

    $scope.allDiagnosisForPatitent = [];


    mainService.getAllAppointmentsForDoctor($scope.doctor.id).success(function (data) {

        $scope.allAppointmentsForDoctor  = data;
    });

    mainService.getAllSpecializations().success(function(data){
        $scope.allSpecializations = data;
    }) ;


    mainService.getAllMedications().success(function(data){
        $scope.allMedications = data;
    })

    $scope.genders = [
        {"id" : "M" , "name": "Masko"},
        {"id" : "F" , "name": "Zensko"},
    ];

        mainService.getAllPacientsForDoctor($scope.doctor.id).success(function(data)
    {
        $scope.allPacientsForDoctor = data;
        console.log($scope.allPacientsForDoctor);
    });

    $scope.enterDiagnosis =function()
    {
            $state.go('doctors.patients.newDiagnosis');
    }


    //nosi na tabela so site dijagnozi na pacientot
    $scope.viewPatientDiagnosis = function(patient)
    {
        diagnosisService.getAllDiagnosisForPacient(patient).success(function(data){
            console.log("Dijagnozi", data)
            $scope.allDiagnosisOfPacient = data;
            $state.go('doctor.patients.allDiagnosisForPacient');
        });
    }


    $scope.viewDiagnosis = function(diagnosis)
    {
        $scope.currentDiagnosis = diagnosis;
        $scope.perscriptionsForDiagnose
        mainService.getAllPerscriptionsForDiagnose(diagnosis.id).success(function(data){
            $scope.perscriptionsForDiagnose = data;
            $state.go('doctor.patients.diagnosisPreview');
        })

    }

    $scope.goToAddNewAppointmentPage = function()
    {
        $state.go('doctors.appointments.newAppointment');
    }

    $scope.goToAddNewDiagnosisPage = function(){
        $state.go('doctor.patients.allDiagnosisForPacient.newDiagnosis');
    }

    $scope.addDiagnosis = function(diagnosis, medId)
    {
        console.log(medId);
       diagnosis.createdAt = $filter('date')(diagnosis.data , "yyyy-dd-MM").toString().split("T")[0];
        delete  diagnosis['data'];


        // treba do sesija id-to
        diagnosis.doctor = {};

        diagnosis.doctor.id = $scope.doctor.id;



        $scope.data = {};

        diagnosisService.addNewDiagnosis(diagnosis).success(function(data){
            //$location.path('doctor/patients');

            console.log("Nova dijagnoza", data)
            var perscription = {
                "diagnose": {
                    "id" :  data.id
                },
                "medication": {
                    "id":medId
                },
                "description": "testttt",
                "createdAt" : $filter('date')(Date.now(), "yyyy-dd-MM").toString().split("T")[0]
            }
            console.log(perscription);
            mainService.addPrescription(perscription).success(function(data){


            console.log("Recept", data);


            });

        });







    }
    $scope.updateDoctor = function(doctor)
    {
        console.log(doctor);
        mainService.updateDoctor(doctor).success(function(data){

            console.log(data);
            $cookies['currentUser']= JSON.stringify(data);
            $scope.doctor = data;
        });
    }


    $scope.goToPatients = function()
    {
        $state.go('doctor.patients',{},{reload : true})
    }

});