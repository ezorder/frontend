app.service('menuService', function(_, $http, $q){
  var t = this;
  this.getMenu = function(){
    var deferred = $q.defer();
    $http.get("./app/data/menu.json").success(function(data){
      deferred.resolve(data);
    });
    return deferred.promise;
  }
});
