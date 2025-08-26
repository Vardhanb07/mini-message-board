const { Router } = require("express");
const {
  showMessage,
  removeMessage,
} = require("../controllers/messageController");

const messageRouter = Router();

messageRouter.get("/:id", showMessage);

messageRouter.get("/remove/:id", removeMessage);

module.exports = messageRouter;
