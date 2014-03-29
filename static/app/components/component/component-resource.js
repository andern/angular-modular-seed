angular.module("component").factory("AnObject",
        ["$resource", function($resource)
{
    var url ="url/to/some/rest/service/with/a/variable/:someVar";
    return $resource(url, {},
        {
            query: {method: "GET", params:{}, isArray: false}
        }
    );
}]);

angular.module("component").factory("AnotherObject",
        ["$resource", function($resource)
{
    var url ="another/url/to/some/rest/service/with/a/variable/:someVar";
    return $resource(url, {},
        {
            query: {method: "GET", params:{}, isArray: false}
        }
    );
}]);
