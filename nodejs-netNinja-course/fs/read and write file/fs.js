const fs = require("fs");
const path = require("path");

//Synchronous/blocking code
//let read = fs.readFileSync("readMe.txt", "utf8");

let read = fs.readFileSync(path.join(__dirname, "readMe.txt"), "utf8");

fs.writeFileSync("writeMe.txt", read);

//Asynchronous/non-blocking code
fs.readFile(path.join(__dirname, "readMe.txt"), "utf8", function (err, data) {
  if (err) throw err;
  fs.writeFile(path.join(__dirname, "writeMe.txt"), data, function (err) {
    if (err) throw err;
    console.log("file written...");
  });
});
