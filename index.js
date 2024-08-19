import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";

const corsConfig = {
  origin: "*",
  credentials: true,
};
app.options("*", cors(corsConfig));
app.use(cors(corsConfig));

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  process.exit(1);
});
