const { WebSocketServer } = require("ws");

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (socket) => {
  console.log("socket");
});


// today commit