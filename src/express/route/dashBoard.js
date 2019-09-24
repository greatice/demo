const express = require("express");
const router = express.Router();

const { AddEvent, GetEvent } = require("../controller/dashBoard");

router.get("/", GetEvent);
router.post("/", AddEvent);

module.exports = router;
