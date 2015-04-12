// index
app.directive('ordersIndex', function(){
  return {
    restrict: 'A',
    scope: {},
    templateUrl: 'app/partials/orders/index/partial.html',
    controller: 'ordersCtrl'
  }
});
// show
app.directive('ordersShow', function(){
  return {
    restrict: 'A',
    scope: {},
    templateUrl: 'app/partials/orders/show/partial.html',
    controller: 'ordersCtrl'
  }
});
// create
app.directive('ordersNew', function(){
  return {
    restrict: 'A',
    scope: {},
    templateUrl: 'app/partials/orders/new/partial.html',
    controller: 'ordersCtrl'
  }
})
function ordersCtrl($scope, $routeParams, $location, urlService, menuService){
  var id = $routeParams.id ? $routeParams.id : null;
  console.log('ordersCtrl');
  menuService.getMenu().then(function(result){
    console.log('menuService');
    console.log(result);
    $scope.menuItems = result;
  });
  // orderService.getOrders()
  // orderService.getOrder(id)
  // orderService.createOrder()
}
