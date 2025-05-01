const mongoose = require("mongoose");
const Text = require("../models/text.model");

const updateText = async (text) => {
  try {
    const txt = await Text.findByIdAndUpdate(
      "6813535b08f6ffb94c4dcffd",
      {
        txt: text,
      },
      { new: true }
    );
    console.log("Text Saved");
    return txt;
  } catch (error) {
    console.log("Error while upadating Text :", error);
  } finally {
    // mongoose.disconnect();
  }
};

async function readText() {
  try {
    const text = await Text.findById("6813535b08f6ffb94c4dcffd");
    console.log(text);
    return text;
  } catch (error) {
    throw error;
  }
}

module.exports = { updateText, readText };
