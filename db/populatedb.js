#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username TEXT,
  message TEXT,
  added DATE
);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: "postgresql://vardhanbattula:changeme@localhost:5432/mini_messages",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
