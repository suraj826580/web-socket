const app = require("express")();
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer);

app.get("/", async (req, res) => {
  res.status(200).send({ msg: "Hello From Server" });
});

io.on("connection", (socket) => {
  console.log("Got a new Connection");
  socket.on("message", (message) => {
    message = JSON.parse(message);
    socket.emit("message", JSON.stringify(message));
  });
});

httpServer.listen(8080, () => {
  console.log("server is running on port no 8080");
});
