const {
  getAllMessages,
  insertMessage,
  getMessage,
  deleteMessage,
} = require("../db/queries");

async function getMessages(req, res) {
  const messageData = await getAllMessages();
  res.render("index", { messages: messageData });
}

async function postMessages(req, res) {
  await insertMessage(req.body.messageUser, req.body.messageText);
  res.redirect("/");
}

async function showMessage(req, res) {
  const message = await getMessage(req.params.id);
  res.render("open", { message: message });
}

async function removeMessage(req, res) {
  await deleteMessage(req.params.id);
  res.redirect("/")
}

module.exports = {
  getMessages,
  postMessages,
  showMessage,
  removeMessage
};
