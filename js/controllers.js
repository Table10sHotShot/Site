
var myAppControllers = angular.module('myApp.controllers', []);

myAppControllers.controller('indexController', function($scope, $location) {
    
    $scope.tabs = ['About me', 'Projects', 'Interesting articles'];

    $scope.setRoute = function(tab) {
        $location.url('/' + tab);
    };
});

myAppControllers.controller('aboutMeController', function($scope) {

    $scope.welcomeMessage = "This is my website, enjoy...";

    $scope.myInterval = 5000;
    
    $scope.slides = [];

    for (var i=1; i<4; i++) {
        $scope.slides.push({image: 'img/retainer' + i + '.jpg'});
    }

    $scope.setActive = function(index) {
        
        $scope.slides[index].active=true;
    }

});

myAppControllers.controller('projectController', function($scope) {
    
});
