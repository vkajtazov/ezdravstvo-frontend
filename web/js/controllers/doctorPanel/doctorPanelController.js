/**
 * Created by Bojana on 6/3/2015.
 */

iktProekt.controller('doctorPanelController', function ($scope, loginService, $location, $filter, $state, appointmentsService) {


    $scope.doctor = {}; //get doctor by id from database



    $scope.allAppointmentsForDoctor = [];
    $scope.allPacientsForDoctor = [];


    $scope.allAppointmentsForDoctor = appointmentsService.getAllAppointmentsForDoctor($scope.doctor.id).success(function(){




    });

    appointmentsService.getAllPacientsForDoctor($scope.doctor.id).success(function(data)
    {
        console.log("Data", data);

        $scope.allPacientsForDoctor = data;

    });

    console.log($scope.allAppointmentsForDoctor);

    $scope.enterDiagnosis =function(appointment)
    {
            $scope.currentAppointment =appointment;
            $state.go('doctors.appointments.newDiagnosis');
    }


    $scope.goToAddNewAppointmentPage = function()
    {

        $state.go('doctors.appointments.newAppointment');
    }

});