let app = require('http').createServer(); 
let io = require('socket.io')(app, {path: '/socket.io'}); 
app.listen(3000); // listen on port 3000
console.log('Listening for connections on port 3000');

io.on('connection', function(socket) {
   console.log('Client connected');
   socket.emit('fromServer', {id: 'Hey there...'}); // send message fromServer to client

   socket.on('fromClient', function(data) { // listen for fromClient message
      console.log('Received ' + data.id + ' from client');
	  socket.emit('fromServer2', {id: 'How are you?'}); // send message fromServer to client
	  
   });
   

   socket.on('fromClient2', function(data) { // listen for fromClient message
      console.log('Received ' + data.id + ' from client');
   });
   
   socket.on('disconnect', function(){
	  console.log('Client Disconnected'); 
   });
});