const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("User Router is working fine");
});

module.exports = router;
