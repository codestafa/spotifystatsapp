import express from "express";
import * as dotenv from "dotenv";

// Load environment variables
dotenv.config({ path: ".env.local" });
const { PORT } = process.env;
// Express app setup

export const server = express();


server.get("/", (_req, res) => {
  res.json({ messages: "test" });
});

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT} `);
});
