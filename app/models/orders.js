app.service('ordersService', function(_, $http, $q){
  var t = this;
  this.getOrders = function(){
    var deferred = $q.defer();
    $http.get('https://secret-hamlet-1804.herokuapp.com/api/order').success(function(data){
      deferred.resolve(data);
    });
    return deferred.promise;
  }
  this.createOrder = function(order){
    var deferred = $q.defer();
    $http.post('https://secret-hamlet-1804.herokuapp.com/api/order', order).success(function(data){
      //console.log(data);
      if(data.message){
        deferred.resolve(data);
      } else{
        deferred.reject("Failed");
      }
    });
    return deferred.promise;
  }
});
