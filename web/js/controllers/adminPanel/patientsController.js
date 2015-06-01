/**
 * Created by Bojana on 5/25/2015.
 */
iktProekt.controller('patientsController', function($scope, loginService, $location, adminService){

    $scope.allPatients = []; //all patients in system for datatable
    $scope.allDoctors = []; //all doctors in system for datatable
    $scope.genders = [
        { id: 0, name: 'Male' },
        { id: 1, name: 'Female' }
    ];
    //returns all patients in the system for the datatable
    adminService.getAllPatients().success(function(data){
        $scope.allPatients = data;
    });

    //returs all doctors in the system for the datatable
    adminService.getAllDoctors().success(function (data) {
        $scope.allDoctors = data;
    });

});
