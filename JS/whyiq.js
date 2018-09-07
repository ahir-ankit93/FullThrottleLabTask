
angular.module("myApp").
controller("myAppWhyiqCtrl",function($scope, $http) {
    $http.get("/views/data.json").then(function (item) {
        $scope.players=item.data;
    });
 })