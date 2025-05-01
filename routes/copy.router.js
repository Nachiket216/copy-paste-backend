const expresss = require("express");
const copyRouter = expresss.Router();

const { readText } = require("../controller/text.controller");
copyRouter.get("/", async (req, res) => {
  try {
    const text = await readText();
    if (text) {
      res.status(200).json({ text });
    } else {
      res
        .status(404)
        .json({ error: "text does not exists. Not found error" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to read text : ", error });
  }
});

module.exports = copyRouter;
