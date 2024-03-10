const { WebSocketServer } = require("ws");

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (socket) => {
  console.log("got a new connection");
  socket.on("message", (message) => {
    wss.clients.forEach((client) => {
      if (client !== socket && client.readyState) {
        client.send(JSON.stringify(message));
      }
    });
  });
});
