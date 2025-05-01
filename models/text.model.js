const mongoose = require("mongoose");

const textSchema = new mongoose.Schema(
  {
    txt: {
      type: String,
      required: true,
    },
  },
  {
    collection: "texts", // Optional: ensures the collection name
    timestamps: true, // Optional: adds createdAt, updatedAt
  }
);

const Text = mongoose.model("Text", textSchema);

module.exports = Text;
