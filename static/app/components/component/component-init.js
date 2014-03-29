angular.module("component", [
    'ngRoute',
    "ngResource"
])



.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/component/:someVariable/', {
        templateUrl: '/static/app/components/component/component.html',
        controller: "component-controller",

        resolve: {
            data: loadSomething()
        }
    });

    $routeProvider.when('/component/:someVariable/view', {
        templateUrl: '/static/app/components/component/component-view.html',
        controller: "component-controller",

        resolve: {
            data: loadSomething()
        }
    });
}])



var loadSomething = function() {
    return ["$q", "$route", "component-service", function($q, $route, service) {
        var deferred = $q.defer();

        var first = service.getFirstObject($route.current.params.someParam);
        var second = service.getSecondObject($route.current.params.someParam);

        $q.all([first.$promise, second.$promise]).then(function(response) {
            deferred.resolve(response);
        });

        return deferred.promise;
    }]
}
