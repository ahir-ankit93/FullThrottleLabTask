
 angular.module("myApp").
 controller("myAppProductCtrl",function($scope, $http) {
    $http.get("/views/data.json").then(function (item) {
        $scope.players=item.data;
    });
 })
 