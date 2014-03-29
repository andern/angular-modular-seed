angular.module("component").controller("component-controller",
        ["Page", "data", "$scope",
        function(Page, data, $scope)
{
    $scope.first = data[0];
    $scope.second = data[1];
    /* Some resource that you don't need to be loaded before the page is
     * rendered */
    /* $scope.third = SomeResource.query(); */
    Page.setTitle("Title: component");
}]);
