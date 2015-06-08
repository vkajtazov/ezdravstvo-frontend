/**
 * Created by Bojana on 5/19/2015.
 */


var iktProekt = angular.module('iktProekt', [
    'ui.bootstrap',
    'ui.router',
    'ngCookies',
    'ngResource'


]).constant('enums',
    {
      Roles: {"ROLE_ADMIN":0, "ROLE_DOCTOR":1, "ROLE_PATIENT":2}
    }
);


iktProekt.run(function ($rootScope, $location, authenticationService, roleService) {

    //// enumerate routes that don't need authentication
    var routesThatDontRequireAuth = ['/login','/home'];
    var routesForAdmin = ['/admin'];
    var routesForDoctor = ['/doctor'];
    var routesForPatient = ['/patient'];

    // check if current location matches route
    var routeClean = function (route) {
        return _.find(routesThatDontRequireAuth,
            function (noAuthRoute) {
                return route.indexOf(noAuthRoute) > -1;
            });
    };

    // check if current location matches route
    var routeDoctor = function (route) {
        return _.find(routesForDoctor,
            function (noAuthRoute) {
                return route.indexOf(noAuthRoute) > -1;
            });
    };

    // check if current location matches route
    var routePatient = function (route) {
        return _.find(routesForPatient,
            function (noAuthRoute) {
                return route.indexOf(noAuthRoute) > -1;
            });
    };

    // check if current location matches route
    var routeAdmin = function (route) {
        return _.find(routesForAdmin,
            function (noAuthRoute) {
                return route.indexOf(noAuthRoute) > -1;
            });
    };
    console.log("routePatient", routePatient);

    $rootScope.$on('$stateChangeStart', function (ev, to, toParams, from, fromParams) {


        // if route requires auth and user is not logged in
        if (!routeClean($location.url()) && !authenticationService.isLoggedIn()) {

            // redirect back to login
            ev.preventDefault();
            $location.path('/login');
        }
        else if (routeAdmin($location.url()) && !roleService.validateRoleAdmin(authenticationService.getCurrentUser())) {
            console.log("NOT ADMIN" + authenticationService.getCurrentUser());
            // redirect back to login
            ev.preventDefault();
            $location.path('/error').replace();
        }

        else if (routeDoctor($location.url()) && !roleService.validateRoleDoctor(authenticationService.getCurrentUser())) {
            console.log("NOT DOCTOR" + authenticationService.getCurrentUser());
            // redirect back to login
            ev.preventDefault();
            $location.path('/error').replace();
        }
         else if (routePatient($location.url()) && !roleService.validateRolePatient(authenticationService.getCurrentUser())) {
            console.log("NOT PATIENT" + authenticationService.getCurrentUser());
            // redirect back to login
            ev.preventDefault();
            $location.path('/error').replace();
        }

    });
});



iktProekt.config(
    [          '$stateProvider', '$urlRouterProvider',
        function ($stateProvider,   $urlRouterProvider) {

            $urlRouterProvider
                .otherwise('home');
            $stateProvider.state('home',{
                url: '/home',
                templateUrl : 'template/homePage/home.html',
                requireLogin : true

            })
            $stateProvider.state('logIn',{
                url: '/login',
                templateUrl : 'template/homePage/login.html'
            })
            $stateProvider.state('registration',{
                url: '/registration',
                templateUrl : 'template/homePage/registration.html'
            })

            $stateProvider.state('admin',{
                url: '/admin',
                templateUrl : 'template/adminPanel/home.html'
            })
            $stateProvider.state('admin.doctors',{
                url: '/list-doctors',
                templateUrl : 'template/adminPanel/doctors.html'
            })
            $stateProvider.state('admin.doctors.newDoctor',{
                url: '/add-doctor',
                templateUrl : 'template/adminPanel/addNewDoctor.html'
            })
            $stateProvider.state('admin.doctors.editDoctor',{
                url: '/edit-doctor',
                templateUrl : 'template/adminPanel/editDoctor.html'
            })

            $stateProvider.state('admin.patients',{
                url: '/list-patients',
                templateUrl : 'template/adminPanel/patients.html'
            })
            $stateProvider.state('admin.patients.newPatient',{
                url: '/add-patient',
                templateUrl : 'template/adminPanel/addNewPatient.html'
            })
            $stateProvider.state('admin.patients.editPatient',{
                url: '/edit-patient',
                templateUrl : 'template/adminPanel/editPatient.html'
            })
            $stateProvider.state('admin.hospitals', {
                url: '/hospitals',
                templateUrl : 'template/adminPanel/hospitals.html'

            })
            $stateProvider.state('admin.hospitals.newHospital', {
                url: '/add-hospital',
                templateUrl : 'template/adminPanel/addNewHospital.html'

            })
            $stateProvider.state('admin.hospitals.editHospital', {
                url: '/edit-hospital',
                templateUrl : 'template/adminPanel/editHospital.html'

            })

            $stateProvider.state('admin.medications',{
                url: '/medications',
                templateUrl : 'template/adminPanel/medications.html'
            })

            $stateProvider.state('admin.medications.newMedication',{
                url: '/add-medication',
                templateUrl : 'template/adminPanel/addNewMedication.html'
            })

            $stateProvider.state('admin.medications.editMedication', {
                url: '/edit-medication',
                templateUrl : 'template/adminPanel/editMedication.html'

            })

            $stateProvider.state('admin.specializations',{
                url: '/specializations',
                templateUrl : 'template/adminPanel/specializations.html'
            })

            $stateProvider.state('admin.specializations.newSpecialization',{
                url: '/add-specialization',
                templateUrl : 'template/adminPanel/addNewSpecialization.html'
            })

            $stateProvider.state('admin.specializations.editSpecialization', {
                url: '/edit-specialization',
                templateUrl : 'template/adminPanel/editSpecialization.html'

            })

            $stateProvider.state('admin.changeDoctorRequests', {
                url: '/requests',
                templateUrl : 'template/adminPanel/changeDoctorRequests.html'

            })


            $stateProvider.state('patient', {
                url: '/patient',
                templateUrl : 'template/patientPanel/home.html'

            })

            $stateProvider.state('patient.appointments', {
                url: '/appointments',
                templateUrl : 'template/patientPanel/appointments.html'

            })

            $stateProvider.state('patient.doctor', {
                url: '/primary-doctor',
                templateUrl : 'template/patientPanel/doctor.html'

            })


            $stateProvider.state('patient.referrals', {
                url: '/diagnosis',
                templateUrl : 'template/patientPanel/referrals.html'

            })
            $stateProvider.state('patient.referrals.preview', {
                url: '/preview',
                templateUrl : 'template/patientPanel/previewOfDiagnosis.html'

            })


            $stateProvider.state('patient.appointments.newAppointment', {
                url: '/add-appointment',
                templateUrl : 'template/patientPanel/addNewAppointment.html'
            })

            $stateProvider.state('patient.changeDoctor', {
                url: '/change-doctor',
                templateUrl : 'template/patientPanel/changeDoctor.html'
            })



            //doctors
            $stateProvider.state('doctor', {
                url: '/doctor',
                templateUrl : 'template/doctorPanel/home.html'

            })
            $stateProvider.state('doctor.info', {
                url: '/info',
                templateUrl : 'template/doctorPanel/info.html'

            })
            $stateProvider.state('doctor.patients', {
                url: '/list-patients',
                templateUrl : 'template/doctorPanel/patients.html'

            })


            $stateProvider.state('doctor.appointments', {
                url: '/appointments',
                templateUrl : 'template/doctorPanel/appointments.html'

            })

            $stateProvider.state('doctor.patients.allDiagnosisForPacient', {
                url: '/all-diagnosis',
                templateUrl : 'template/doctorPanel/allDiagnosisForPatient.html'

            })

            $stateProvider.state('doctor.patients.allDiagnosisForPacient.newDiagnosis', {
                url: '/add-diagnosis',
                templateUrl : 'template/doctorPanel/addNewDiagnosis.html'

            })

            $stateProvider.state('doctor.patients.diagnosisPreview', {
                url: '/diagnosis-preview',
                templateUrl : 'template/doctorPanel/previewOfDiagnosis.html'

            })

            $stateProvider.state('doctor.appointments.newDiagnosis', {
                url: '/add-diagnosis',
                templateUrl : 'template/doctorPanel/addNewDiagnosis.html'

            })

            $stateProvider.state('doctor.referrals', {
                url: '/referrals',
                templateUrl : 'template/doctorPanel/referrals.html'

            })

            $stateProvider.state('doctor.referrals.newReferral', {
                url: '/add-referral',
                templateUrl : 'template/doctorPanel/addNewReferrals.html'

            })


        }]

);