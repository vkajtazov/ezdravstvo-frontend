/**
 * Created by Bojana on 6/3/2015.
 */

iktProekt.controller('hospitalsController', function ($scope, loginService, $location, mainService, $filter, $state) {


        $scope.allHospitals = [];


    mainService.getAllHospitals().success(function(data){

        $scope.allHospitals = data;

    });



    $scope.editHospital = function(hospitalId)
    {

        mainService.getHospitalById(hospitalId).success(function(data){

            $scope.hospital = data;
            $scope.addHospitalState = false;
            $state.go('admin.hospitals.editHospital');
        });

    }


    $scope.deleteHospital = function(hospitalId)
    {

        mainService.deleteHospital(hospitalId).success(function(){

            $state.reload();


        }).
            error(function(data, status, headers, config) {
                if(status=='500')
                {
                    alert("Bolnicata ne mozhe da se izbrishe");
                    console.log("Bolicata ne mozhe da se izbrishe")
                }
                else
                {
                    console.log("Unknown error type");
                }

            });
    }

    $scope.addHospital = function(hospital)
    {

        mainService.addHospital(hospital).success(function(){
            $state.go('admin.hospitals', {}, {reload: true});
        });
    }

    $scope.updateHospital= function()
    {
        mainService.addHospital($scope.hospital).success(function (data) {
            $state.go('admin.hospitals', {}, {reload: true});

        }).error(function(status, headers){
            console.log(status);
        });
    }



    $scope.goToAddNewHospitalPage = function()
    {
        $scope.addHospitalState = true;
        $state.go('admin.hospitals.newHospital', {}, {reload: true});
    }


});