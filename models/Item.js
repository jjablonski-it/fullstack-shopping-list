const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true
    },
    done: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

module.exports = Item = mongoose.model("Item", itemSchema);
