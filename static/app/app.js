var app = angular.module('appname', 
    'ngRoute',
    'component',
]);



app.config(['$routeProvider', '$locationProvider',
        function ($routeProvider, $locationProvider)
{
    $routeProvider.otherwise({redirectTo: "/404"});
    $locationProvider.html5Mode(true);
}]);



/* Service for setting the HTML title */
app.service("Page", function()
{
    var service = {
        title: null,

        setTitle: function($title) { service.title = $title; }
    };
    return service;
});
