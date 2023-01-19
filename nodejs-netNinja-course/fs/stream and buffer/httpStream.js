const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  console.log("request made to url:", req.url);
  res.writeHead(200, { "Content-Type": "text/html" });
  let myReadStream = fs.createReadStream("./index.html", "utf8");
  myReadStream.pipe(res); //response object is a writable stream
});

server.listen(5000, () => console.log("server running...."));
