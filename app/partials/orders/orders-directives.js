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
function ordersCtrl($scope, $routeParams, $location, urlService, menuService, ordersService){
  var id = $routeParams.id ? $routeParams.id : null;
  console.log('ordersCtrl');
  $scope.order = {
    order: []
  }
  menuService.getMenu().then(function(result){
    console.log('menuService');
    console.log(result);
    $scope.menuItems = result;
  });
  $scope.actions = {
    setOrderItem: function(item, quantity){
      console.log(item, quantity);
      $scope.order['tip'] = 0;
      $scope.order['paid'] = false;
      $scope.order['open'] = true;
      $scope.order['server'] = "Billy Johnson";
      $scope.order['table_number'] = 1;
      $scope.order.order.push({
        item_name: item.description,
        quantity: quantity,
        comments: "",
        price: item.price,
        status: [{status: "Processing"}],
        updates: [{change: ""}],
        type: [{type: "Meal"}]
      });
      console.log($scope.order);
    },
    placeOrder: function(){
      ordersService.createOrder($scope.order).then(function(result){
        console.log(result);
        $scope.order = {
          order: []
        }
      })
    }
  }
  // orderService.getOrders()
  // orderService.getOrder(id)
  // orderService.createOrder()
}
