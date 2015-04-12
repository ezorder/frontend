// index 
app.directive('chefIndex', function(){
  return {
    restrict: 'A',
    scope: {},
    templateUrl: 'app/partials/chef/index/partial.html',
    controller: 'chefCtrl'
  }
});
function chefCtrl($scope, $routeParams, $location, urlService){
  var id = $routeParams.id ? $routeParams.id : null;
}
