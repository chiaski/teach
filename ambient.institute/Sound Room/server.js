//const http = require('http');
//const server = http.createServer(app);
//const { Server } = require("socket.io");
//const io = new Server(server);

const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http, { path: '/sounds/socket.io' });
const port = process.env.PORT || 3696;


app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/sounds/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected'); 
  
  socket.on('toggleSound', (sound, i, state) => {
    console.log('message: ' + sound + state);
    io.emit('toggleSound', sound, i, state);
  });
  
  socket.on('togglePitch', (sound, i, state) => {
    console.log('message: ' + sound + state);
    io.emit('togglePitch', sound, i, state);
  });
  
  socket.on('adjustPlayback', (sound, i, n) => {
    console.log('message: ' + sound + n);
    io.emit('adjustPlayback', sound, i, n);
  });
  
  socket.on('adjustVolume', (sound, i, n) => {
    console.log('message: ' + sound + n);
    io.emit('adjustVolume', sound, i, n);
  });
  
});

//server.listen(3000, () => {
//  console.log('listening on *:3000');
//});
//


//var listener = app.listen(process.env.PORT, function () {
//  console.log('Your app is listening on port ' + listener.address().port);
//});


http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});