const express = require("express");
const path = require("node:path");
const app = express();
const messageRouter = require("./routes/messageRouter.js");
const { messages } = require("./messages.js");
const port = 8000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/messages", messageRouter);

const assetPath = path.join(__dirname, "public");
app.use(express.static(assetPath));

app.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

app.get("/new", (req, res) => {
  res.render("form");
});

app.use(express.urlencoded({ extended: true }));

app.post("/new", (req, res) => {
  messages.push({
    text: req.body.messageText,
    user: req.body.messageUser,
    added: new Date(),
  });
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
