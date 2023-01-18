const fs = require("fs");

fs.rmdir("./stuff", function () {
  console.log("Removed..");
});

fs.mkdir("../stuff", function () {
  fs.readFile("../../readMe.txt", "utf8", function (err, data) {
    if (err) throw err;
    fs.writeFile("../stuff/writeMe.txt", data, function (err, data) {
      if (err) throw err;
      console.log("file's written...");
    });
  });
});

fs.unlink("../stuff/writeMe.txt", function () {
  fs.rmdir("../stuff", function () {
    console.log("removed..");
  });
});

/*
fs.mkdirSync("stuff");
fs.rmdirSync("stuff");
fs.unlinkSync("writeMe.txt");

fs.mkdir("stuff", function () {
  fs.readFile("readMe.txt", "utf8", function (err, data) {
    fs.writeFile("./stuff/writeMe.txt", data, function (err, data) {
      if (err) throw err;
      console.log("file written....");
    });
  });
});

*/
