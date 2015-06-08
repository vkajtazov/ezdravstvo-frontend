iktProekt.controller('appointmentsController', function ($scope, $rootScope, authenticationService, loginService, appointmentsService, $filter, $state) {

    $scope.allAppointments = {};
    $scope.allTimeslots = {};
    $scope.allDoctors = [];
    $scope.currentUser = authenticationService.getCurrentUser();
    $scope.newTimeslot = {};
    $scope.bookAppointmentState = false;

    $scope.selectedDate = new Date();

    $scope.searchTimeslots = function() {
        $scope.selectedDate = new Date($scope.newTimeslot.date);
        console.log("selectedDate: " +$scope.selectedDate );
        appointmentsService.find($.param({
            byDate: $scope.selectedDate
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
        console.log("selectedDate: on Book:  " +$scope.selectedDate );

        appointmentsService.book($.param({
            date: $scope.selectedDate,
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