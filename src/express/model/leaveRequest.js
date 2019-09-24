const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
      alias: "id",
      select: false
    },
    StartTime: {
      type: String,
      require: true
    },
    StartDate: {
      type: String,
      require: true
    },
    EndDate: {
      type: String,
      require: true
    },
    isApproved: {
      type: Boolean,
      require: true
    },
    __v: { type: Number, select: false }
  },
  {
    timestamps: true
  }
);

const model = mongoose.model("Leave", schema);

module.exports = model;
