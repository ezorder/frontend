// index
app.directive('homeIndex', function(){
  return {
    restrict: 'A',
    scope: {},
    templateUrl: 'app/partials/home/index/partial.html',
    controller: 'homeCtrl'
  }
});
function homeCtrl($scope, $routeParams, $location, urlService){
  var id = $routeParams.id ? $routeParams.id : null;
  $scope.urls = urlService.getUrls();
}
