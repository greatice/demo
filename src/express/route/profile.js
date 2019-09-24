const express = require("express");
const router = express.Router();
const {
  getOneStaffProfile,
  getAllStaffProfile,
  AddProfile,
  ChangeProfile,
  DeleteProfile
} = require("../controller/profile");

router.get("/", getAllStaffProfile);
router.get("/:id", getOneStaffProfile);
router.post("/", AddProfile);
router.put("/:id", ChangeProfile);
router.delete("/:id", DeleteProfile);

module.exports= router;