
var app = angular.module("myApp", ["ngRoute"]);

app.controller("myAppCtrl", function () {

});

app.config(function($routeProvider){
    $routeProvider.when("/product",{
        templateUrl:"views/product.html",
        controller:"myAppProductCtrl"
    }).
    when("/home",{
        templateUrl:"views/home.html",
        controller:"myAppHomeCtrl"
    }).
    when("/whyiq",{
        templateUrl:"views/whyiq.html",
        controller:"myAppWhyiqCtrl"
    }).
    when("/integretion",{
        templateUrl:"views/integretion.html",
        controller:"myAppIntegretionCtrl"
    }).
    when("/customer",{
        templateUrl:"views/customer.html",
        controller:"myAppCustomerCtrl"
    }).
    when("/login",{
        templateUrl:"views/login.html",
        controller:"myAppLoginCtrl"
    }).
    when("/demo",{
        templateUrl:"views/demo.html",
        controller:"demoController"
    }).otherwise({
        redirectTo:"/home"
    })
});
