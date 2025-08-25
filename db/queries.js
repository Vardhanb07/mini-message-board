const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function insertMessage(username, message) {
  await pool.query(
    "INSERT INTO messages (username, message, added) VALUES ($1, $2, $3)",
    [username, message, new Date()]
  );
}

async function getMessage(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id=$1", [id]);
  return rows;
}

module.exports = {
  getAllMessages,
  insertMessage,
  getMessage,
};
