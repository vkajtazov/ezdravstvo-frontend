/**
 * Created by Bojana on 5/25/2015.
 */
iktProekt.controller('specializationsController', function ($scope, loginService, $location, mainService, $filter, $state) {

    $scope.allSpecializations = []; //all specializations in system for datatable

//returns all specializations in the system for the datatable
    mainService.getAllSpecializations().success(function (data) {
        $scope.allSpecializations = data;
    });


//add new Specialization to the database
    $scope.addSpecialization = function () {

        mainService.addSpecialization($scope.specialization).success(function (data) {
            $state.go('admin.specializations', {}, {reload: true});
        }).error(function (response) {
            console.log(response);
        });
    }

    $scope.deleteSpecialization = function (specializationId) {

        mainService.deleteSpecialization(specializationId).success(function (data) {
            $state.reload();
        }).
            error(function (data, status, headers, config) {
                if (status == '500') {
                    alert("Specijalizacijata ne mozhe da se izbrishe");
                    console.log("Specijalizacijata ne mozhe da se izbrishe " + data);
                }
                else {
                    console.log("Unknown error type");
                }

            });
    }

    $scope.editSpecialization = function (specializationId) {

        mainService.getSpecializationById(specializationId).success(function (data) {

            $scope.specialization = data;
            $scope.addSpecializationState = false;
            $state.go('admin.specializations.editSpecialization');
        });


    }

    $scope.updateSpecialization = function () {
        mainService.addSpecialization($scope.specialization).success(function (data) {
            $state.go('admin.specializations', {}, {reload: true});
        }).error(function (response) {
            console.log(response);
        });
    }


//workaround..
    $scope.goToAddNewSpecializationPage = function () {
        $scope.addSpecializationState = true;
        $state.go('admin.specializations.newSpecialization');
    }


});
