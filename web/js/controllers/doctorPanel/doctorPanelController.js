/**
 * Created by Bojana on 6/3/2015.
 */

iktProekt.controller('doctorPanelController', function ($scope,$filter,$cookies, loginService,mainService,  $location, $filter, $state, appointmentsService, diagnosisService) {


    $scope.doctor = JSON.parse($cookies['currentUser']);



    $scope.allAppointmentsForDoctor = [];
    $scope.allPacientsForDoctor = [];


    $scope.allDiagnosisForPatitent = [];


    mainService.getAllSpecializations().success(function(data){
        $scope.allSpecializations = data;
    }) ;

     appointmentsService.getAllAppointmentsForDoctor($scope.doctor.id).success(function(data){

    //TODO
    //     $scope.allAppointmentsForDoctor = data;


    });


    console.log($scope.allAppointmentsForDoctor);
    $scope.genders = [
        {"id" : "M" , "name": "Masko"},
        {"id" : "F" , "name": "Zensko"},
    ]

    appointmentsService.getAllPacientsForDoctor($scope.doctor.id).success(function(data)
    {
        $scope.allPacientsForDoctor = data;
        console.log($scope.allPacientsForDoctor);
    });




    $scope.enterDiagnosis =function()
    {
            $state.go('doctors.patients.newDiagnosis');
    }


    //nosi na tabela so site dijagnozi na pacientot
    $scope.viewPatientDiagnosis = function(patientId)
    {

        diagnosisService.getAllDiagnosisForPacient(patientId).success(function(data){
            console.log("DIJAGNOZA");
            $scope.allDiagnosisOfPacient = data;
            $state.go('doctor.patients.allDiagnosisForPacient');
        });
    }


    $scope.viewDiagnosis = function(diagnosis)
    {
        $scope.currentDiagnosis = diagnosis;
        $state.go('doctor.patients.diagnosisPreview');
    }

    $scope.goToAddNewAppointmentPage = function()
    {

        $state.go('doctors.appointments.newAppointment', {pacientId});
    }

    $scope.goToAddNewDiagnosisPage = function(){
        $state.go('doctor.patients.allDiagnosisForPacient.newDiagnosis');
    }

    $scope.addDiagnosis = function(diagnosis)
    {
        diagnosis.createdAt = $filter('date')(diagnosis.data , "yyyy-dd-MM").toString().split("T")[0];
        delete  diagnosis['data'];

        // treba do sesija id-to
        diagnosis.doctor.id = $scope.doctor.id;

        diagnosisService.addNewDiagnosis(diagnosis).success(function(){
            $location.path('doctor/patients');
            })
    }


    $scope.updateDoctor = function(doctor)
    {
            console.log(doctor);
        mainService.updateDoctor(doctor).success(function(data){

               $cookies['currentUser']= JSON.stringify(data);
        });
    }


});