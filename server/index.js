const express = require("express");
const app = express();
const http = require("http");
const server = http.Server(app);
const socket = require("socket.io");
const io = socket(server, {
  cors: { origin: "*" },
});
const PORT = 3000;

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("message", (message) => {
    console.log(message);
    io.emit("message", `${socket.id.substr(0, 2)}: ${message}`);
  });
});

server.listen(PORT, () => console.log(`listening on port ${PORT}`));
