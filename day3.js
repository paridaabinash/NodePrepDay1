const express = require("express");
const app = express();
let port = 5000 || process.env.PORT;
const cors = require("cors");
app.use(cors());

const { add, substract, multiply, divide } = require("./modules");

const middleWare = (req, res, next) => {
  console.log("Global middle ware");
  next();
};
multiply(2, 3);
substract(5, 3);

app.use(middleWare);
app.get("/", (req, res) => {
  res.send("Day 3 interview preparation");
  res.end();
});
app.get("/page1", (req, res) => {
  res.send("page1");
  res.end();
});
app.listen(port, () => {
  console.log(`Server is running at port number ${port}`);
});
