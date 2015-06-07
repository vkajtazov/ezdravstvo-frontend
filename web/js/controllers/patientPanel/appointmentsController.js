iktProekt.controller('appointmentsController', function ($scope, $rootScope, authenticationService, loginService, appointmentsService, $filter, $state) {

    $scope.allAppointments = {};
    $scope.allTimeslots = {};
    $scope.allDoctors = [];
    $scope.currentUser = authenticationService.getCurrentUser();
    $scope.newTimeslot = {};
    $scope.bookAppointmentState = false;

    $scope.currentDate = new Date();

    $scope.searchTimeslots = function() {
        $scope.currentDate = new Date($scope.newTimeslot.date);
        console.log("currentDate: " +$scope.currentDate );
        appointmentsService.find($.param({
            byDate: $scope.currentDate
        }), function success(result) {
            $scope.allTimeslots = result;
            $scope.bookAppointmentState = true;
            console.log("allTimeslots:");
            console.log($scope.allTimeslots);

        });
    }
    appointmentsService.getByPatient($.param({ }),
        function success(result) {
        $scope.allAppointments = result;
        console.log("appointments:");
        console.log($scope.allAppointments);

    });

    $scope.bookAppointment = function () {
        console.log("currentDate: on Book:  " +$scope.currentDate );

        appointmentsService.book($.param({
            date: $scope.currentDate,
            time_id: $scope.newTimeslot.id
        }), function success(result) {
            console.log("SUCCESSFULLY booked appointment");
            console.log(result);
            $state.go('patient.appointments', {}, {reload: true});
        });

    }

    $scope.cancelAppointment = function (appointmentId) {
        appointmentsService.cancel($.param({
            id: appointmentId
        }), function success(result) {
            console.log("SUCCESSFULLY canceled appointment");
            $state.go('patient.appointments', {}, {reload: true});
        });

    }

    $scope.goToAddNewAppointmentPage = function () {
        $scope.addAppointmentState = true;
        $state.go('patient.appointments.newAppointment');
    }

})
;