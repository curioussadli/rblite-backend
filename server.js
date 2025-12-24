const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

// 🔥 CORS EXPLICIT (WAJIB)
app.use(cors({
  origin: "https://curioussadli.github.io"
}));

app.use(express.json());
