const { Server } = require("ws");

const ws = new Server({ port: 8080 });

ws.on("connection", () => {
  console.log("New Client Connected");

  ws.on("message", (message) => {
    console.log(message);
    ws.send("Server received your message: " + message);
  });

  ws.on("close", (message) => {
    console.log("Client Discoonescted");
  });
});

console.log("WebSocket server running at ws://localhost:8080/");
