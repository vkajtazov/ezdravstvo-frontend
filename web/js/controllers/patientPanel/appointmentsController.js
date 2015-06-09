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

        appointmentsService.find($.param({
            byDate: $scope.selectedDate
        }), function success(result) {
            $scope.allTimeslots = result;
            $scope.bookAppointmentState = true;
        });
    }
    appointmentsService.getByPatient($.param({ }),
        function success(result) {
        $scope.allAppointments = result;
    });

    $scope.bookAppointment = function () {
        appointmentsService.book($.param({
            date: $scope.selectedDate,
            time_id: $scope.newTimeslot.id
        }), function success(result) {
            console.log("SUCCESSFULLY booked appointment");
            alert("Успешно закажавте преглед!");
            $state.go('patient.appointments', {}, {reload: true});
        });

    }

    $scope.cancelAppointment = function (appointmentId) {
        var cancel = window.confirm("Дали сте сигурни дека сакате да го откажете прегледот?");
        if (cancel) {
            appointmentsService.cancel($.param({
                id: appointmentId
            }), function success(result) {
                console.log("SUCCESSFULLY canceled appointment");
                $state.go('patient.appointments', {}, {reload: true});
            });
        }
    }

    $scope.goToAddNewAppointmentPage = function () {
        $scope.addAppointmentState = true;
        $state.go('patient.appointments.newAppointment');
    }

})
;