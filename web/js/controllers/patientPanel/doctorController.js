iktProekt.controller('doctorController', function ($scope, loginService,  mainService, $filter, $state) {
    $scope.doctor = [];
    //get doctor from patient ( as a relation)
    $scope.allDoctors = [];
    $scope.allHospitals = [];
    $scope.doctorsFilter = [];

    mainService.getAllDoctors().success(function (data) {
        $scope.allDoctors = data;
        console.log(data);
    });

    mainService.getAllHospitals().success(function (data) {
        $scope.allHospitals = data;
        console.log(data);
    });


    $scope.selectHospital = function(filter){
        $scope.doctorsFilter = filter;
    }

    $scope.changeDoctor = function () {
        $scope.addDoctorState = false;
        $state.go('patient.doctor.changeDoctor');
    }

});