/**
 * Created by Bojana on 5/25/2015.
 */
iktProekt.controller('medicationsController', function ($scope, loginService, $location, mainService, $filter, $state) {

    $scope.allMedications = []; //all medications in system for datatable

    //returns all medications in the system for the datatable
    mainService.getAllMedications().success(function (data) {
        $scope.allMedications = data;
    });


    //add new Medication to the database
    $scope.addMedication = function () {

        mainService.addMedication($scope.medication).success(function (data) {
            $state.go('admin.medications', {}, {reload: true});
        }).error(function (response) {
            console.log(response);
        });
    }

    $scope.deleteMedication = function (medicationId) {

        mainService.deleteMedication(medicationId).success(function (data) {
            $state.reload();
        }).
            error(function (data, status, headers, config) {
                if (status == '500') {
                    alert("Lekot ne mozhe da se izbrishe, se koristi vo nekoj od receptite");
                    console.log("Lekot ne mozhe da se izbrishe, se koristi vo nekoj od receptite");
                }
                else {
                    console.log("Unknown error type");
                }

            });
    }

    $scope.editMedication = function (medicationId) {

        mainService.getMedicationById(medicationId).success(function (data) {

            $scope.medication = data;
            $scope.addMedicationState = false;
            $state.go('admin.medications.editMedication');
        });


    }

    $scope.updateMedication = function () {
        mainService.addMedication($scope.medication).success(function (data) {
            $state.go('admin.medications', {}, {reload: true});
        }).error(function (response) {
            console.log(response);
        });
    }


    //workaround..
    $scope.goToAddNewMedicationPage = function () {
        $scope.addMedicationState = true;
        $state.go('admin.medications.newMedication', {}, {reload: true});
    }


});
