const express = require("express");
const router = express.Router();
const {
  findLeaveRequest,
  approveLeaveRequest,
  deleteLeaveRequest
} = require("../controller/leavecheck");


router.get("/", findLeaveRequest);
router.put("/", approveLeaveRequest);
router.delete("/",deleteLeaveRequest);

module.exports = router;
