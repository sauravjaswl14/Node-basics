const fs = require("fs");

let readStream = fs.createReadStream("../../readMe2.txt", "utf8");
let writeStream = fs.createWriteStream("./writeMe.txt");
readStream.on("data", function (chunk) {
  console.log("new chunk received");
  writeStream.write(chunk);
});
