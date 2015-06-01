/**
 * Created by Bojana on 5/25/2015.
 */
iktProekt.controller('doctorsController', function ($scope, loginService, $location, adminService) {


    $scope.allDoctors = []; //all doctors in system for datatable
    $scope.allHospitals = []; // all hospitals in the datatable
    $scope.allSpecializations = []; // all specializations in the datatable

    //returs all doctors in the system for the datatable
    adminService.getAllDoctors().success(function (data) {
        $scope.allDoctors = data;
    });

    //returs all hospitals in the system for the datatable
    adminService.getAllHospitals().success(function (data) {
        $scope.allHospitals = data;
    });

    //returs all specializations in the system for the datatable
    adminService.getAllSpecializations().success(function (data) {
        $scope.allSpecializations = data;
    });

});
