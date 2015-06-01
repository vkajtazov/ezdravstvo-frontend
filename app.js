/**
 * Created by Bojana on 5/19/2015.
 */


var iktProekt = angular.module('iktProekt', [
    'ui.bootstrap',
    'ui.router'


] );
iktProekt.config(
    [          '$stateProvider', '$urlRouterProvider',
        function ($stateProvider,   $urlRouterProvider) {

            $urlRouterProvider
                .otherwise('home');
            $stateProvider.state('home',{
                url: '/home',
                templateUrl : 'template/homePage/home.html'
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
                url: '/doctors',
                templateUrl : 'template/adminPanel/doctors.html'
            })
            $stateProvider.state('admin.doctors.newDoctor',{
                url: '/add-doctor',
                templateUrl : 'template/adminPanel/addNewDoctor.html'
            })

            $stateProvider.state('admin.patients',{
                url: '/patients',
                templateUrl : 'template/adminPanel/patients.html'
            })
            $stateProvider.state('admin.patients.newPatient',{
                url: '/add-patient',
                templateUrl : 'template/adminPanel/addNewPatient.html'
            })







        }]

);