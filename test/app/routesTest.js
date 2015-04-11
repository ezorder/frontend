describe("routesTest", function(){
  beforeEach(module('app'));
  var route, location, rootScope, httpBackend, scope;
  beforeEach(inject(
    function(_$route_, _$location_, _$rootScope_, _$httpBackend_){
      route = _$route_;
      location = _$location_;
      rootScope = _$rootScope_;
      scope = _$rootScope_.$new();
      httpBackend = _$httpBackend_;
    }
  ));
  it('should test routes', function(){
    expect(route.routes['/Orders/New'].templateUrl).toEqual('./app/views/orders/new.html');
    expect(route.routes['/Orders/Show/:id'].templateUrl).toEqual('./app/views/orders/show.html');
    expect(route.routes['/Orders'].templateUrl).toEqual('./app/views/orders/index.html');
    expect(route.routes['/Server'].templateUrl).toEqual('./app/views/server/index.html');
    expect(route.routes['/Chef'].templateUrl).toEqual('./app/views/chef/index.html');
  });
});
