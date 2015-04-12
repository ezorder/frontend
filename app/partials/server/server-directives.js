// index 
app.directive('serverIndex', function(){
  return {
    restrict: 'A',
    scope: {},
    templateUrl: 'app/partials/server/index/partial.html',
    controller: 'serverCtrl'
  }
});
function serverCtrl($scope, $routeParams, $location, urlService){
  var id = $routeParams.id ? $routeParams.id : null;
}
