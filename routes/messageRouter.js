const { Router } = require("express");
const { messages } = require("../messages.js");

const messageRouter = Router();

messageRouter.get("/:id", (req, res) => {
  if (req.params.id >= 0 && req.params.id < messages.length) {
    res.render("open", { message: messages[req.params.id] });
  }
});

module.exports = messageRouter;
