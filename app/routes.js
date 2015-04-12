app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('', {
      redirectTo: '/Home'
    })
    .when('/', {
      redirectTo: '/Home'
    })
    .when('/Home', {
       templateUrl: './app/views/home/index.html'
    })
    .when('/User/Show/:id', {
       templateUrl: './app/views/user/show.html'
    })
    .when('/User/Edit/:id', {
      templateUrl: './app/views/user/edit.html'
    })
    .when('/User/View', {
      templateUrl: './app/views/user/index.html'
    })
    .when('/User/New', {
      templateUrl: './app/views/user/new.html'
    })
    .when('/User/Delete/:id', {
      templateUrl: './app/views/user/delete.html'
    })
    .when('/Sneaker/Show/:id', {
       templateUrl: './app/views/sneaker/show.html'
    })
    .when('/Watchlist/View', {
      templateUrl: './app/views/watchlist/index.html'
    })
    .when('/404', {
      templateUrl: './app/views/404/index.html'
    })
    .when('/Account/Login', {
      templateUrl: './app/views/account/login.html'
    })
    .when('/Account/Register', {
      templateUrl: './app/views/account/register.html'
    })
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
      templateUrl: './app/views/chef/index.html'
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
