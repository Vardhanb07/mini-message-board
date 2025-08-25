const express = require("express");
const path = require("node:path");
const app = express();
const messageRouter = require("./routes/messageRouter.js");
const messageController = require("./controllers/messageController.js");
const port = 8000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/messages", messageRouter);

const assetPath = path.join(__dirname, "public");
app.use(express.static(assetPath));

app.get("/", messageController.getMessages);

app.get("/new", (req, res) => {
  res.render("form");
});

app.use(express.urlencoded({ extended: true }));

app.post("/new", messageController.postMessages);

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
