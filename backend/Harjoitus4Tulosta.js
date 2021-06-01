const fs = require("fs");

fs.readFile("./nimet.json", (err, jsonString) => {
  if (err) {
    console.log("File read failed:", err);
    return;
  }
  console.log("File data:", jsonString);
});