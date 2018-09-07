
angular.module("myApp").
 controller("demoController",function($scope, $location, $http){
        var loggedInUser = localStorage.getItem('loggedInUser');
        $scope.user = loggedInUser && JSON.parse(loggedInUser);
        $scope.logoutUser = function () {
            localStorage.removeItem('loggedInUser');
            $location.path('/login');
        }
        $http.get("/views/data.json").then(function (item) {
            $scope.players=item.data;
        });

 });
