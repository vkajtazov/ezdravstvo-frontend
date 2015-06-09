/**
 * Created by Bojana on 6/3/2015.
 */

iktProekt.controller('doctorPanelController', function ($scope, passdataService, roleService, $filter, appointmentsService, mainService, authenticationService, $cookies, loginService, $location, $filter, $state, diagnosisService) {


    $scope.doctor = authenticationService.getCurrentUser(); //get doctor by id from database

    $scope.count = 0;
    $scope.allAppointmentsForDoctor = [];
    $scope.allPacientsForDoctor = [];
    $scope.allMedications = [];

    $scope.perscriptions = [];

    $scope.allDiagnosisForPatitent = [];
    $scope.selectedAppointment = passdataService.getSelectedAppointment();
    $scope.selectedAppointmentState = passdataService.getSelectedAppointmentState();


    mainService.getAllAppointmentsForDoctor($scope.doctor.id).success(function (data) {
        $scope.allAppointmentsForDoctor = data;
    });

    mainService.getAllSpecializations().success(function (data) {
        $scope.allSpecializations = data;
    });


    mainService.getAllMedications().success(function (data) {
        $scope.allMedications = data;
    })

    $scope.genders = [
        {"id": "M", "name": "Masko"},
        {"id": "F", "name": "Zensko"},
    ];

    mainService.getAllPacientsForDoctor($scope.doctor.id).success(function (data) {
        $scope.allPacientsForDoctor = data;
        console.log($scope.allPacientsForDoctor);
    });

    $scope.enterDiagnosis = function (appointment) {
        passdataService.setSelectedAppointmentState(true);
        passdataService.setSelectedAppointment(appointment);
        $state.go('doctor.appointments.newDiagnosis');

    }

    $scope.cancelAppointment = function (appointmentId) {
        var cancel = window.confirm("Дали сте сигурни дека сакате да го откажете прегледот?");
        if (cancel) {
            appointmentsService.cancel($.param({
                id: appointmentId
            }), function success(result) {
                console.log("SUCCESSFULLY canceled appointment");
                $state.go('doctor.patients', {}, {reload: true});
            });
        }
    }

    //nosi na tabela so site dijagnozi na pacientot
    $scope.viewPatientDiagnosis = function (patient) {
        diagnosisService.getAllDiagnosisForPacient(patient).success(function (data) {
            console.log("GET Dijagnozi success")
            $scope.allDiagnosisOfPacient = data;
            $state.go('doctor.patients.allDiagnosisForPacient');
        });
    }


    $scope.viewDiagnosis = function (diagnosis) {
        $scope.currentDiagnosis = diagnosis;
        $scope.perscriptionsForDiagnose
        mainService.getAllPerscriptionsForDiagnose(diagnosis.id).success(function (data) {
            $scope.perscriptionsForDiagnose = data;
            $state.go('doctor.patients.diagnosisPreview');
        })

    }

    $scope.goToAddNewAppointmentPage = function () {
        $state.go('doctors.appointments.newAppointment');

    }

    $scope.goToAddNewDiagnosisPage = function () {
        $state.go('doctor.patients.allDiagnosisForPacient.newDiagnosis');
    }

    $scope.addDiagnosis = function (diagnosis, medId) {
        diagnosis.createdAt = new Date(diagnosis.createdAt);

        if ($scope.selectedAppointmentState) {
            diagnosis.patient = $scope.selectedAppointment.patient;
        }
        diagnosis.doctor = authenticationService.getCurrentUser();

        diagnosisService.addNewDiagnosis(diagnosis).success(function (data) {
            console.log("New diagnosis we added SUCCESSFULLY: ");

            angular.forEach($scope.perscriptions, function (perscription) {
                perscription.diagnose = data;
                perscription.createdAt = data.createdAt;

                mainService.addPrescription(perscription).success(function (data) {
                    console.log("Perscription ADDED SUCCESSFULLY ");
                });
            });

            alert("Успешно додадовте нова дијагноза!");
            $state.go('doctor.patients');

        });

    }

    $scope.addPerscription = function (perscription) {
        var per = angular.copy(perscription);
        $scope.perscriptions.push(per);
        console.log("Added new perscription SUCCESS");
    }

    $scope.removePerscription = function (perscription) {

        var cancel = window.confirm("Дали сте сигурни дека сакате да ја отстранете рецептата?");
        if (cancel) {
            var index = $scope.perscriptions.indexOf(perscription);
            $scope.perscriptions.splice(index, 1);
            console.log("Remove a perscription SUCCESS");
        }

    }

    $scope.updateDoctor = function (doctor) {
        mainService.updateDoctor(doctor).success(function (data) {

            console.log("UPDATE doctor SUCCESS");
            data.role = roleService.getRoleforName(data.role);
            $cookies['currentUser'] = JSON.stringify(data);
            $scope.doctor = data;
            alert("Успешно променивте податоци!");
            window.scrollTo(0, 0);
            $state.reload();
        });
    }


    $scope.goToPatients = function () {
        $state.go('doctor.patients', {}, {reload: true})
    }

});