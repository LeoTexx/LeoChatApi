import "dotenv/config";
import express from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";

import { router } from "./routes";

const app = express();
app.use(cors());

const serverHttp = http.createServer(app);
const webSocket = new Server(serverHttp, {
  cors: {
    origin: "*",
  },
});
webSocket.on("connection", (socket) =>
  console.log(`📣 User connected to socket ${socket.id}`)
);

app.use(express.json());

app.use(router);

app.get("/github", (req, res) => {
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
  );
});

app.get("/signin/callback", (req, res) => {
  const { code } = req.query;
  res.send(code);
});

export { serverHttp, webSocket };
