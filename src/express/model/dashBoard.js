const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
      alias: "id",
      select: false
    },
    title: {
        type: String,
        require: true
      },
    start: {
      type: String,
      require: true
    },
    end: {
      type: String,
      require: true
    },
    backgroundColor:{
      type: String,
      require: true
    },
    __v: { type: Number, select: false }
  },
  {
    timestamps: true
  }
);

const model = mongoose.model("dashBoard", schema);

module.exports = model;
