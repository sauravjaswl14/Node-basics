const EventEmitter = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("someEvent", function (msg) {
  console.log(msg);
});

myEmitter.emit("someEvent", "the event has been emitted");

// class Person extends EventEmitter {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const jack = new Person("jack");
// console.log(jack);
