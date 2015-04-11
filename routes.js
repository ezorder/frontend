app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/Orders', {
      templateUrl: './app/views/orders/index.html'
    })
    .when('/Orders/Show/:id', {
      templateUrl: './app/views/orders/show.html'
    })
    .when('/Orders/New', {
      templateUrl: './app/views/orders/new.html'
    })
    .when('/Server', {
      templateUrl: './app/views/server/index.html'
    })
    .when('/Chef', {
      templateUrl: './app/views/chef/index.html'
    })
    .otherwise({redirectTo: '/404'})
})
.run(['$rootScope', '$location', '$timeout', 'urlService', function($rootScope, $location, $timeout, urlService){
  //!authService.persist() && $location.path('/Home');
  console.log($location.path());
  urlService.setUrl('server', '#/Server');
  urlService.setUrl('orders', {});
  urlService.setUrl('chef', '#/Chef');
  //stateService.setState();
  // use like $scope.state = stateService.getState(); [In Controller] state.loggedIn() {true | false} [In View]
  $rootScope.$on('$routeChangeSuccess', function(event, next, current){
    //
  })
}]); 
