const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.json({ msg: "The available users" }));

module.exports = router;
