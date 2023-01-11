const path = require("path"); //we pass in the module  we would want to get

//seperator property that returns the platform specific seperator
console.log(path.sep);

//join method that joins the sequense of path segments using platform specific seperator

const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

console.log(__dirname); //--dirname is a global variable

const absolute = path.resolve(__dirname, "/content", "subfolder", "test.txt");
console.log(absolute);
