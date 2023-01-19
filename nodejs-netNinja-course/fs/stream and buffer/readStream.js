const fs = require("fs");

let readStream = fs.createReadStream("../../readMe2.txt");
readStream.on("data", function (chunk) {
  console.log("new chunk received");
  console.log(chunk);
});
