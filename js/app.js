
var myApp = angular.module('myApp', ['ui.bootstrap', 'myApp.controllers', 'ngRoute', 'ngSanitize']);

myApp.config(function($routeProvider) {

    $routeProvider.
        when('/About me', {
            controller: 'aboutMeController',
            templateUrl: 'partials/about_me.html'
        }).
        when('/Projects', {
            controller: 'projectsController',
            templateUrl: 'partials/projects.html'
        });
       

});
