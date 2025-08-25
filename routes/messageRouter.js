const { Router } = require("express");
const { showMessage } = require("../controllers/messageController");

const messageRouter = Router();

messageRouter.get("/:id", showMessage);

module.exports = messageRouter;
