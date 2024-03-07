import { EventEmitter } from "events";
const suraj = new EventEmitter();
suraj.on("haan Bolo bhn k lode", () => {
  console.log("kodnjcn");
});

suraj.emit("haan Bolo bhn k lode");
