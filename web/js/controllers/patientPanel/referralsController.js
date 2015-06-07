iktProekt.controller('referralsController', function($scope, loginService, mainService, $filter, authenticationService, $state) {



   mainService.getAllPacientRefferals(authenticationService.getCurrentUser()).success(function(data){

      $scope.allReferrals = data;

   });


   $scope.showDiagnosisDetails = function(referral)
   {
      $scope.currentDiagnosis =referral;
      mainService.getAllPrescriptionsForDiagnosis(referral).success(function(data){

            $scope.perscriptionsForDiagnose = data;

         $state.go('patient.referrals.preview');

      });
   }



});