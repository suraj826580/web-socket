import WebSocket, { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (socket) => {
  console.log("Got a New Connection ");
  socket.onmessage = function (message) {
    socket.send(message.data);
  };
  socket.onclose = () => console.log("bhag gaya");
});
