const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");

const DEFAULT_DELAY = 0;
const pause = (ms = DEFAULT_DELAY) =>
  new Promise((resolve, reject) => setTimeout(() => resolve(), ms));

app.use(cors());

app.get("/", async (req, res) => {
  await pause();
  res.send('mock server');
  // res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
