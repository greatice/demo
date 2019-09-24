const express = require("express");
const router = express.Router();
const profile = require("./route/profile");
const leaveRequest = require("./route/leaveRequest");
const leaveCheck = require("./route/leavecheck");
const dashBoard = require("./route/dashBoard");

router.use("/profile", profile);
router.use("/leave", leaveRequest);
router.use("/leavecheck", leaveCheck);
router.use("/dashboard", dashBoard);

module.exports = router;
