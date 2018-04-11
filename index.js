(function(angular){
    angular
    .module('app',['ngRoute', 'home' , 'about'])
    /* .controller('homeController', function($scope){
        $scope.title = "I'm in home";
    })
    .controller('aboutController', function($scope){
        $scope.title = "I'm in about";
    }) */
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
        $routeProvider
        .when('/', {
            templateUrl: "../src/home/home.html"
        })
        .when("/home", {
            templateUrl: "../src/home/home.html"
        })
        .when("/about", {
            templateUrl: "../src/about/about.html"
        })
        .otherwise({redirectTo: "/"});

        $locationProvider.hashPrefix('');
        $locationProvider.html5Mode(true);
    }]);
    
    

})(angular);