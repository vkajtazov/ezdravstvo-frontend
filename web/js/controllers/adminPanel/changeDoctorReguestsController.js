/**
 * Created by Bojana on 5/25/2015.
 */
iktProekt.controller('changeDoctorRequestsController', function ($scope, mainService, $state) {

    $scope.changeDoctorRequests = [];

    mainService.getAllRequests().success(function (data) {

        angular.forEach(data, function (request) {
            if (request.status == "APPROVED")
                request.status = 'Одобрено';
            else if (request.status == "REJECTED")
                request.status = 'Одбиено';
            else if (request.status == "PENDING")
                request.status = 'Неодредено';
        });

        $scope.changeDoctorRequests = data;
    });

    $scope.approveRequest = function (request) {
        var approve = window.confirm("Дали сте сигурни дека го одобрувате барањето за промена на доктор?");
        if (approve) {
            var req = angular.copy(request);
            req.status = 1;
            mainService.postRequest(req).success(function () {
                $state.reload();
            });
        }
    }

    $scope.rejectRequest = function (request) {
        var cancel = window.confirm("Дали сте сигурни дека сакате да го одбиете барањето за промена на доктор?");
        if (cancel) {
            var req = angular.copy(request);
            req.status = 2;
            mainService.postRequest(req).success(function () {
                $state.reload();
            });
        }
    }

});
