const express = require("express");

const app = express();

// Files that are displayed
app.use(express.static(__dirname + "/public"));

app.listen(3000);
