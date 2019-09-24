const DashBoard = require("../model/dashBoard");

async function AddEvent(req, res) {
  const { id, title, start, end, backgroundColor } = req.body;

  const searchDashBoard = await DashBoard.findById(id);
  if (searchDashBoard) {
    return res.status(400).json("event already existed");
  }
  const dashBoard = new DashBoard({
    id,
    title,
    start,
    end,
    backgroundColor
  });
  await dashBoard.save();
  return res.json(dashBoard);
}

async function GetEvent(req, res) {
  const dashBoard = await DashBoard.find();
  if (!dashBoard) {
    return res.status(404).json("event not found");
  }
  return res.json(dashBoard);
}

module.exports = {
  AddEvent,
  GetEvent
};
