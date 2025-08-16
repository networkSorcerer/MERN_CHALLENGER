const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require("http"); // http 서버 필요
const WebSocket = require("ws"); // WebSocket

require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

const indexRouter = require("./routes/index");
app.use("/api", indexRouter);

const mongoURI = process.env.LOCAL_DB_ADDRESS;
mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log("mongoose connected"))
  .catch((err) => console.log("DB connection fail", err));

// 기존 Express 서버를 http 서버로 변환
const server = http.createServer(app);

// WebSocket 서버 통합
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", (message) => {
    try {
      const data = JSON.parse(message); // { user, text }
      // 모든 클라이언트에 브로드캐스트
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(data));
        }
      });
    } catch (err) {
      console.error("Invalid message format", err);
    }
  });

  ws.on("close", () => console.log("Client disconnected"));
});

// 통합 서버 실행
server.listen(5555, () => {
  console.log("Server + WebSocket running on port 5555");
});
