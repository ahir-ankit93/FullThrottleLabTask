
app.controller("myAppLoginCtrl", function ($scope, $window, $location) {
    var storage = localStorage.getItem('users');
    $scope.users = (storage && JSON.parse(storage)) || [];

    $scope.removeUser = function (user) {
        var removeUser = $scope.users.indexOf(user);
        $scope.users.splice(removeUser, 1);
        localStorage.setItem("users", JSON.stringify($scope.users));
    }

    function clearInputs() {
        $scope.txtName = '';
        $scope.txtPassword = '';
    }
    
    $scope.addUsers = function (user) {
        if (!$scope.txtName) {
            alert('Please enter name');
            return;
        }
        if (!$scope.txtPassword) {
            alert('Please enter password');
            return;
        }
        var found = $scope.users.find(function(user) {
            return user.username === $scope.txtName;
        })
        if (found) {
            alert('user already exist!');
            clearInputs();
            return;
        }
        $scope.users.push({
            username: $scope.txtName,
            password: $scope.txtPassword
        });
        localStorage.setItem('users', JSON.stringify($scope.users));
        clearInputs();
    }

    $scope.loginUser = function () {
        var found = $scope.users.find(function(user) {
            return user.username === $scope.txtName && user.password === $scope.txtPassword;
        });
        if (found) {
            $location.path('/demo');
            localStorage.setItem('loggedInUser', JSON.stringify(found));
        } else {
            alert('Invalid username or password!');
            return;
        }
    }

});
