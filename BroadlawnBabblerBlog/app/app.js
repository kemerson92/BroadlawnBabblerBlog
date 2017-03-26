(function () {
    'use strict';

    angular.module('app', ['ngRoute'])
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $routeProvider

            // route for the root page
            .when('/', {
                templateUrl: 'app/views/home.html'
            })

            // route for the home page
            .when('/home', {
                templateUrl: 'app/views/home.html'
            })

            // route for the babbles page
            .when('/babbles', {
                templateUrl: 'app/views/babbles.html',
                controller: 'babblesController'
            })

            // route for the babblers page
            .when('/babblers', {
                templateUrl: 'app/views/babblers.html'
            })

            // route for the about page
            .when('/about', {
                templateUrl: 'app/views/about.html'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl: 'app/views/contact.html'
            })

             // route for the privacy page
            .when('/privacy', {
                templateUrl: 'app/views/privacy.html'
            })

            .otherwise({
                redirectTo: '/home'
            });

            // use the HTML5 History API
            $locationProvider.html5Mode(true);
        }]);

})();