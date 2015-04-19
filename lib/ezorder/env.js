var EZORDERENV = {
  socketio: function(){
    var localScript = 'http://localhost:3000/socket.io/socket.io.js';
    var remoteScript = 'https://sheltered-badlands-2237.herokuapp.com/socket.io/socket.io.js';
    var localIO = 'http://localhost:3000';
    var remoteIO = 'https://sheltered-badlands-2237.herokuapp.com';
    return {
      src: (location.host.search('localhost')>=0) ? localScript : remoteScript,
      client: (location.host.search('localhost')>=0) ? localIO : remoteIO
    }
  },
  api: function(){
    var localConn = 'http://localhost:5000/';
    var remoteConn = 'https://secret-hamlet-1804.herokuapp.com/';
    return {
      url: (location.host.search('localhost')>=0) ? localConn : remoteConn
    }
  }
}
//console.log(location.host, EZORDERENV.socketio().src);
var ezOrderIOScript = document.createElement('script');
ezOrderIOScript.src = EZORDERENV.socketio().src;
document.getElementsByTagName('head')[0].appendChild(ezOrderIOScript);
