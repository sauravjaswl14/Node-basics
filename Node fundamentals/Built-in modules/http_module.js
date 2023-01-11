const http = require("http");

// const server = http.createServer((req, res) => {
//   res.write("welcome to our homepage");
//   res.end();
// });

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to Our Homepage");
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
  }
  res.end(`
        <h1>oops</h1>
        <p>We can't seem to find the page you requested for</p>
        <a href="/">Go back to homepage</a>
    `);
});

server.listen(5000);
