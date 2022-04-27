app.controller('ideasController', function($scope, $rootScope, $location, $http, $routeParams)
{
    $scope.idea = $routeParams.ideaId;
});