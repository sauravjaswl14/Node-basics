const express = require("express");
const { products } = require("./data");
const app = express();

app.use("/", (req, res) => {
  res.json(products);
});

app.listen(3000, () => {
  console.log("listening on 3000");
});
