const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
});
io.on("connection", (socket) => {
  console.log("What is Socket");
  console.log("Socket is active to be connected");

  socket.on("chat", (payload) => {
    //listening the event which from the frontend
    console.log("what is payload", payload);

    io.emit("chat", payload); //responsing against events
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(8000, () => {
  console.log("Server is listening on port no 8000");
});
