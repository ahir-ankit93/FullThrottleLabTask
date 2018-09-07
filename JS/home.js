app.controller("myAppHomeCtrl", function ($scope, $window, $location) {
    var storage = localStorage.getItem('users');
    $scope.users = (storage && JSON.parse(storage)) || [];

    function clearInputs() {
        $scope.txtEmail = '';
    }
    
    $scope.addEmails = function (user) {
        if (!$scope.txtEmail) {
            alert('Please enter valid Email');
            return;
        }
        if ($scope.txtEmail) {
            alert('We will shortly provide you demo Thanx!');
            clearInputs();
            return;
        }
        $scope.users.push({
            useremail: $scope.txtEmail
        });
        localStorage.setItem('users', JSON.stringify($scope.users));
        clearInputs();
    }
});
