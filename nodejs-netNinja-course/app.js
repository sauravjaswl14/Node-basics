const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

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
  res.render("contact", { qs: req.query });
});

app.get("/person/:name", (req, res) => {
  const data = {
    age: 29,
    job: "ninja",
    hobbies: ["eating", "fighting", "fishing"],
  };
  res.render("profile", { person: req.params.name, data: data });
});

app.post("/contact", (req, res) => {
  let data = req.body;
  res.render("contact-sucess", { data: data });
});

app.listen(5000, () => console.log("server running...."));
