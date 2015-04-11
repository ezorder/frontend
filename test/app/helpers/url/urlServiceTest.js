describe('urlServiceTest', function(){
  beforeEach(module('app'));
  var url;
  beforeEach(inject(
    function(urlService){
      url = urlService;
      urlService.setUrl('order', '#/Order');
      urlService.setUrl('server', '#/Server');
      urlService.setUrl('chef', '#/Chef');
    }
  ));
  it('should get url', function(){
    expect(url.getUrls().order).toEqual('#/Order');
    expect(url.getUrls().server).toEqual('#/Server');
    expect(url.getUrls().chef).toEqual('#/Chef');
  });
});
