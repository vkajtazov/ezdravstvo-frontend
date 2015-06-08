
iktProekt.controller('doctorReferralsController', function ($scope, mainService,$location, $filter, $state, appointmentsService) {

    $scope.allReferrals = {};
    $scope.allTimeslots = {};
    $scope.allDoctors = [];
    $scope.allPatients = [];
    $scope.newTimeslot = {};
    $scope.bookReferralState = false;
    $scope.referralDoctor = {};
    $scope.selectedPatient = {};
    $scope.selectedDate = new Date();
    $scope.diagnosis = {};


    appointmentsService.getByReferrer($.param({ }),
        function success(result) {
            $scope.allReferrals = result;
            console.log("allReferrals:");
            console.log($scope.allReferrals);
        });

    mainService.getAllPacientsForDoctor($scope.doctor.id).success(function(data)
    {
        $scope.allPatients= data;

        console.log('patients:');
        console.log($scope.allPatients);

    });

    mainService.getAllDoctors().success(function(data)
    {
        $scope.allDoctors= data;
        console.log('doctors:');
        console.log($scope.allDoctors);

    });

    $scope.searchTimeslots = function() {

        $scope.selectedDate = new Date($scope.newTimeslot.date);
        console.log("selectedDate: " +$scope.selectedDate );

        appointmentsService.find($.param({
            byDate: $scope.selectedDate,
            doctor_id: $scope.referralDoctor.id

        }), function success(result) {
            $scope.allTimeslots = result;
            $scope.bookReferralState = true;

            console.log("allTimeslots:");
            console.log($scope.allTimeslots);

        });
    }
 
    $scope.bookReferral = function () {
        console.log("selectedDate: on Book:  " +$scope.selectedDate );
        console.log("referralDoctor: ");
        console.log($scope.referralDoctor);

        appointmentsService.bookFromDoctor($.param({

            date: $scope.selectedDate,
            time_id: $scope.newTimeslot.id,
            patient_id: $scope.diagnosis.patient.id,
            doctor_id: $scope.referralDoctor.id

        }), function success(result) {
            console.log("SUCCESSFULLY booked appointment");
            console.log(result);
            $state.go('doctor.referrals', {}, {reload: true});
        });

    }

    $scope.cancelReferral = function (referralId) {

        console.log('Cancel refferal : '+referralId);
        appointmentsService.cancel($.param({
            id: referralId
        }), function success(result) {
            console.log("SUCCESSFULLY canceled referral");
            $state.go('doctor.referrals', {}, {reload: true});
        });

    }

    $scope.goToAddNewReferralPage = function () {
        $state.go('doctor.referrals.newReferral');

    }

});