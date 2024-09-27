const express = require("express");
const path = require("path");
var cors = require("cors");

const fs = require("fs");
function parseWatches() {
    try {
      // Read the content of watches.json
      const watchesJson = fs.readFileSync('watches.json', 'utf8');
  
      // Parse the JSON content
      const watches = JSON.parse(watchesJson);
  
      return watches;
    } catch (error) {
      console.error('Error parsing watches.json:', error.message);
      return [];
    }
  }

  const watchesList = parseWatches();
  console.log('Parsed Watches List:', watchesList);

const app = express();
app.use(express.static("public"));
app.use(cors());
app.get("/watches", function (req, res) {
    res.json(watchesList);
});
const port = process.env.PORT || 8888;
app.listen(port, () =>{
});
