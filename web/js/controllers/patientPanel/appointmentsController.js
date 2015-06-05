iktProekt.controller('appointmentsController', function($scope, loginService, mainService, $filter, $state) {

    $scope.allAppointments = [];
    $scope.allDoctors = [];


    //returs all doctors in the system for the datatable
    mainService.getAllDoctors().success(function (data) {
        $scope.allDoctors = data;
        console.log(data);
    });

    //workaround..

    $scope.goToAddNewAppointmentPage = function()
    {
        $scope.addAppointmentState = true;
        $state.go('patient.appointments.newAppointment');
    }

});