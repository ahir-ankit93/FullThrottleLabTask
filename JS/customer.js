
angular.module("myApp").
 controller("myAppCustomerCtrl",function($scope, $http) {
    $http.get("/views/data.json").then(function (item) {
         $scope.players=item.data;
    });
 })