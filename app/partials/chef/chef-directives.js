// index 
app.directive('chefIndex', function(){
  return {
    restrict: 'A',
    scope: {},
    templateUrl: 'app/partials/chef/index/partial.html',
    controller: 'chefCtrl'
  }
});
function chefCtrl($scope, $routeParams, $location, urlService, ordersService, $interval){
  var id = $routeParams.id ? $routeParams.id : null;
  console.log($location.path());
  if($location.path() == '/Chef'){
    $scope.header = "Chef"
  } else {
    $scope.header = "Server"
  }
  $scope.localOrders = {};
  ordersService.getOrders().then(function(result){
    //console.log(result);
    $scope.orders = result;
    for(i in result){
      $scope.localOrders[result[i]._id] = [];
      for(j in result[i].order){
        $scope.localOrders[result[i]._id].push(result[i].order[j].status[0].status);
      }
      $scope.localOrders[result[i]._id]['orderDone'] = "Processing";
    }
  })
  $scope.actions = {
    setOrderItemStatus: function(id, index){
      $scope.localOrders[id][index] = "Done";
      console.log($scope.localOrders);
      for(i in $scope.localOrders[id]){
        if($scope.localOrders[id][i] == "Processing"){
          $scope.localOrders[id]['orderDone'] = 'Processing';
        } else{
          $scope.localOrders[id]['orderDone'] = 'Done';
        }
      }
      //$scope.localOrders[id][index]['done'] = true;
      //for(i in $scope.localOrders[id]){
      //  if($scope.localOrders[id][i]['done'] != true){
      //    $scope.localOrders[id]['orderDone'] = 'Complete';
      //  } else{
      //    $scope.localOrders[id]['orderDone'] = 'Incomplete';
      //  }
      //}
      //$scope.localOrders[id] = [];
      //$scope.localOrders[id][index] = 'done';
      //console.log($scope.localOrders[id][index]);
    }
  }
  $interval(function(){
    ordersService.getOrders().then(function(result){
      //console.log(result);
      $scope.orders = result;
      for(i in result){
        $scope.localOrders[result[i]._id] = [];
        for(j in result[i].order){
          $scope.localOrders[result[i]._id].push(result[i].order[j].status[0].status);
        }
        $scope.localOrders[result[i]._id]['orderDone'] = "Processing";
      }
    })
  }, 1000)
}
