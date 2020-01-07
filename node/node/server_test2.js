const express = require("express");

const app = express();

// app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/:id/:name/:age", (req, res) => {
  console.log(req.params.id);
  console.log(req.params.name);
  res.status(404).send("Not found");
});

app.post("/", (req, res) => {
  res.send("I heard you");
});

app.post("/user/miguel-osuna", (req, res) => {
  const user = {
    name: "Miguel",
    age: 22,
    isStudent: false
  };

  res.send(user);
});

app.listen(3000);
