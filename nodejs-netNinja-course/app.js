const express = require("express");
const app = express();

app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

// app.get("/contact", (req, res) => {
//   res.sendFile(__dirname + "/contact.html");
// });

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/person/:name", (req, res) => {
  const data = {
    age: 29,
    job: "ninja",
    hobbies: ["eating", "fighting", "fishing"],
  };
  res.render("profile", { person: req.params.name, data: data });
});

app.listen(5000, () => console.log("server running...."));
