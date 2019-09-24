const express = require("express");
const router = express.Router();
const {
  getOneLeaveRequest,
  getAllLeaveRequest,
  AddLeaveRequest,
  ChangeLeaveRequest,
  DeleteLeaveRequest
} = require("../controller/leaveRequest");

router.get("/", getAllLeaveRequest);
router.get("/:id", getOneLeaveRequest);
router.post("/", AddLeaveRequest);
router.put("/:id", ChangeLeaveRequest);
router.delete("/:id", DeleteLeaveRequest);

module.exports = router;
