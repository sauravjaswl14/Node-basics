const { readFile } = require("fs");

readFile("./content/first.txt", "utf-8", (err, data) => {
  if (err) {
    return;
  }
  console.log(data);
});
