const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`data received by ${name} having id:${id}`);
});

customEmitter.emit("response", "john", 34);
