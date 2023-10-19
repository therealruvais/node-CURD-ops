const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(201).send(`welcome ${name}`);
  }
  res.status(401).send("give me a valid data you retard");
});

module.exports = router;
