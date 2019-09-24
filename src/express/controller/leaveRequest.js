const Leave = require("../model/leaveRequest");

async function getOneLeaveRequest(req, res) {
  const { id } = req.params;

  const leave = await Leave.findById(id);
  if (!leave) {
    return res.status(404).json("Request not found");
  }
  return res.json(leave);
}

async function getAllLeaveRequest(req, res) {
  const leave = await Leave.find();
  return res.json(leave);
}

async function AddLeaveRequest(req, res) {
  const { id, StartTime, StartDate, EndDate, isApproved } = req.body;

  const searchRequest = await Leave.findById(id);
  if (searchRequest) {
    return res.status(400).json("Request already existed");
  }
  const leave = new Leave({
    id,
    StartTime,
    StartDate,
    EndDate,
    isApproved
  });
  await leave.save();
  return res.json(leave);
}

async function ChangeLeaveRequest(req, res) {
  const { id } = req.params;
  const { isApproved } = req.body;
  const newLeave = await Leave.findByIdAndUpdate(
    id,
    { isApproved },
    { new: true }
  );
  if (!newLeave) {
    return res.status(404).json("Request not found");
  }
  return res.json(newLeave);
}

async function DeleteLeaveRequest(req, res) {
  const { id } = req.params;
  const leave = await Leave.findByIdAndDelete(id);
  if (!leave) {
    return res.status(404).json("Request not found");
  }
  return res.send("Delete succeed!");
}

module.exports = {
  getOneLeaveRequest,
  getAllLeaveRequest,
  AddLeaveRequest,
  ChangeLeaveRequest,
  DeleteLeaveRequest,
};
