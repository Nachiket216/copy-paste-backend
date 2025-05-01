const express = require("express");
const pasteRouter = express.Router();
const { updateText } = require("../controller/text.controller");
pasteRouter.post("/", async (req, res) => {
  try {
    const extractedText = req.body.text;
    const updatedText = updateText(extractedText);
    res.status(200).json({ message: "Text saved in Database" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update text." });
  }
});

module.exports = pasteRouter;
