/**
 * Created by Bojana on 6/3/2015.
 */

iktProekt.controller('doctorPanelController', function ($scope,$filter, loginService, $location, $filter, $state, appointmentsService, diagnosisService) {


    $scope.doctor = {}; //get doctor by id from database



    $scope.allAppointmentsForDoctor = [];
    $scope.allPacientsForDoctor = [];


    $scope.allDiagnosisForPatitent = [];


    $scope.allAppointmentsForDoctor = appointmentsService.getAllAppointmentsForDoctor($scope.doctor.id).success(function(){




    });

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

});