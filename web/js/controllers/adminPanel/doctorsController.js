/**
 * Created by Bojana on 5/25/2015.
 */
iktProekt.controller('doctorsController', function ($scope, loginService, $location, mainService, $filter, $state) {


    $scope.allDoctors = []; //all doctors in system for datatable
    $scope.allHospitals = []; // all hospitals in the datatable
    $scope.allSpecializations = []; // all specializations in the datatable
    $scope.genders = [
        { id: "M", name: 'Male' },
        { id: "F", name: 'Female' }
    ];

    //returs all doctors in the system for the datatable
    mainService.getAllDoctors().success(function (data) {
        $scope.allDoctors = data;
        console.log("DOctors load");
        console.log(data);
    });


    mainService.getAllHospitals().success(function (data) {
        $scope.allHospitals = data;
    });


    mainService.getAllSpecializations().success(function (data) {
        $scope.allSpecializations = data;
    });


    $scope.addDoctor = function () {
        //take only date from datetime

            $scope.doctor.birthDate = $filter('date')($scope.doctor.dateOfBirth, "yyyy-dd-MM").toString().split("T")[0];
            delete $scope.doctor['dateOfBirth'];



        mainService.addDoctor($scope.doctor).success(function (data) {


            $scope.allDoctors.push(data);
            $state.go('admin.doctors', {}, {reload: true});

        }).error(function(response){
            console.log(response);
        });
    }


    $scope.deleteDoctor = function(doctorId)
    {
        mainService.deleteDoctor(doctorId).success(function(data){
            $state.reload();
        }).
            error(function(data, status, headers, config) {
              if(status=='500')
              {
                    alert("Doktorot ne mozhe da se izbrishe bidejkji postojat pacienti na koi toj im e matichen doktor");
                    console.log("Doktorot ne mozhe da se izbrishe")
              }
                else
              {
                  console.log("Unknown error type");
              }

            });
    }

    $scope.editDoctor = function (doctorId) {

        console.log("Doktor ID", doctorId);
        mainService.getDoctorById(doctorId).success(function(data){

            $scope.doctor = data;
            $scope.addDoctorState = false;
             $state.go('admin.doctors.editDoctor');
        });


    }

    $scope.updateDoctor= function()
    {
        mainService.addDoctor($scope.doctor).success(function (data) {
           $state.go('admin.doctors', {}, {reload: true});

        }).error(function(status, headers){
            console.log(status);
        });
    }


    //workaround...
    $scope.goToAddNewDoctorPage = function()
    {

        $scope.addDoctorState = true;
        $state.go('admin.doctors.newDoctor');
    }


});
