const fs = require("fs");

let myReadStream = fs.createReadStream("../../readMe2.txt", "utf8");
let myWriteStream = fs.createWriteStream("./writeMe.txt");
myReadStream.pipe(myWriteStream);

//Pipes can only be applied on readable streams
