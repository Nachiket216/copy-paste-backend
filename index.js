const { initializeDatabase } = require("./db/db.connect");

initializeDatabase();

const express = require("express");
const app = express();

const cors = require("cors");

const { copyRouter, pasteRouter } = require("./routes/index");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});

app.use("/copy", copyRouter);
app.use("/paste", pasteRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server runing on port : " + port);
});
