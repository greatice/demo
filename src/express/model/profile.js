const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
      alias: "id"
    },
    name: {
      type: String,
      require: true
    },
    // Last_name: {
    //   type: String,
    //   require: true
    // }
    //   Gender: {
    //     type: String,
    //     require: true
    //   },
    //   address: {
    //     type: String,
    //     require: true
    //   },
    //   Department: {
    //     type: String,
    //     require: true
    //   },
    //   position: {
    //     type: String,
    //     require: true
    //   },
    //   Email: {
    //     type: String,
    //     require: true
    //   }
    __v: { type: Number, select: false }
  },
  {
    timestamps: true
  }
);

const model = mongoose.model("Profile", schema);

module.exports = model;
