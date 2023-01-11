const express = require("express");
const app = express();

app.use(express.static("./public"));

app.all("*", (req, res) => {
  res.status(404).send("<h1>Resource not found</h1>");
});

app.listen(3000, () => {
  console.log("Listening on 3000");
});
