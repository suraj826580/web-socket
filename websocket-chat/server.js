const { WebSocketServer } = require("ws");

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (socket) => {
  console.log("Got a New Connection");
  socket.on("message", (message) => {
    // console.log(wss.clients);
    // console.log(JSON.parse(message));

    wss.clients.forEach((clients) => {
      console.log(clients.readyState);
    });
  });
});

// today commit
