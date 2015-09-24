var app=angular.module('app', ['ngLinkedIn']);

app.config(function ($linkedInProvider) {
    $linkedInProvider.set('appKey', '75i1jzs7we57mk');
});

app.controller('DoubleController', ['$scope', '$linkedIn', function ($scope, $linkedIn) {
    $scope.connect = function () {
        if (!$linkedIn.isAuthorized()) {
            $linkedIn.authorize();
        }
    }
}]);