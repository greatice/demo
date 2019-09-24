const Leave = require("../model/leaveRequest");

async function findLeaveRequest (req,res){
  const leave= await Leave.find({isApproved:false})
  if(!leave){
    return res.status(404).json("Request not found");
  }
  return res.json(leave);
}

 async function approveLeaveRequest (req,res){
  const leave= await Leave.findOneAndUpdate({isApproved:false}, 
    {$set:{isApproved:true}},
    { new: true }
    )
  if(!leave){
    return res.status(404).json("Request not found");
  }
  return res.json(leave);
}

async function deleteLeaveRequest(req,res){
  const leave = await Leave.findOneAndDelete({isApproved:true})
  return res.json(leave);
}

module.exports = {
  findLeaveRequest,
  approveLeaveRequest,
  deleteLeaveRequest
};
