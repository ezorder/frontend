app.service('ordersService', function(_, $http, $q){
  var t = this;
  this.getOrders = function(){
    var deferred = $q.defer();
    $http.get('https://secret-hamlet-1804.herokuapp.com/api/order').success(function(data){
      deferred.resolve(data);
    });
    return deferred.promise;
  }
});
