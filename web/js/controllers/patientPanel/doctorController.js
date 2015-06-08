iktProekt.controller('doctorController', function ($scope, loginService, mainService, $filter, $state, authenticationService) {
    $scope.doctor = authenticationService.getCurrentUser().primaryDoctor;

    console.log("Foktor", $scope.doctor);
    //get doctor from patient ( as a relation)
    $scope.allDoctors = [];
    $scope.allHospitals = [];
    $scope.doctorsFilter = [];
    $scope.newDoctor = {};
    $scope.currentPatient = authenticationService.getCurrentUser();
    mainService.getAllDoctors().success(function (data) {
        $scope.allDoctors = data;
    });

    mainService.getAllHospitals().success(function (data) {
        $scope.allHospitals = data;
    });


    $scope.selectHospital = function (filter) {
        $scope.doctorsFilter = filter;
    }

    $scope.changeDoctor = function () {
        console.log("--doktor: ");
        var data = {};
        data.patient = authenticationService.getCurrentUser();
        data.doctor = $scope.newDoctor;

        console.log(data);
        mainService.changeDoctor(data).success(function () {
            console.log("Doctor changed successfully");
            $scope.addDoctorState = false;
            $state.go('patient.doctor', {}, {reload: true});
        });

    }

    $scope.goToChangeDoctorPage = function () {
        $state.go('patient.changeDoctor');
    }

});