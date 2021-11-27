// Use Express in the future
const http = require('http').createServer();
const io = require('socket.io')(http, {
  cors: { origin: "*" }
});

io.on('connection', socket => {
  console.log('A user connected');

  socket.on('message', message => {
    console.log(message);
    io.emit('message', `${socket.id.substr(0,2)}: ${message}`);
  });
});

http.listen(3000, () => console.log('listening on port http://localhost:3000'));