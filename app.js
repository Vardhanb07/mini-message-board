const express = require("express");
const path = require("node:path");

const app = express();

const port = 8000;

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello, World!",
    user: "Charles",
    added: new Date(),
  },
];

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetPath = path.join(__dirname, "public");
app.use(express.static(assetPath));

app.get("/", (req, res) => {
  res.send("test");
});

app.get("/new", (req, res) => {
  res.send("test");
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
