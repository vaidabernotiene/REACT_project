const express = require("express");
const router = express.Router();
const { defaultCallback } = require("../utills/dbUtills");

const { dbConnection } = require("../db");

// GET ------------------------------------------------------------
router.get("/posts", (req, res) => {
  dbConnection.execute(`SELECT * FROM posts`, (err, result) =>
    defaultCallback(err, result, res)
  );
});

// POST ------------------------------------------------------------
router.post("/posts", (req, res) => {
  const {
    body: { title, text, username },
  } = req;

  dbConnection.execute(
    "INSERT INTO posts (title, text, username) VALUES (?, ?, ?)",
    [title, text, username],
    (err, result) => defaultCallback(err, result, res)
  );
});

// EXPORTS --------------------------------------------------
module.exports = router;