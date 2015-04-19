var express = require('express');
var app = express();
var http = require('http').Server(app);
//var io = require('socket.io').listen(http);

app.all('*', function(req, res, next) {
  //res.header('Access-Control-Allow-Origin', '*');
	//res.header('Access-Control-Allow-Origin', 'https://sheltered-badlands-2237.herokuapp.com');
	next();
});
//app.use(express.static('/app'));
app.get('/', function(req, res){
  res.sendfile('index.html');
});
app.use("/app", express.static(__dirname + '/app'));
app.use("/lib", express.static(__dirname + '/lib'));
var port = process.env.PORT || 8080
http.listen(port, function(){
  console.log('listening on *:'+port);
});