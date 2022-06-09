const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./db/connect");
const port = process.env.PORT || 3001;
const router = require("./routes/router");

//cors
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT");
  next();
});

//base route
app.get("/", (req, res) => {
  res.send("hello from instaclone posts server :)");
});

//router
app.use("/", router);
//start server and db
const startServer = async () => {
  try {
    await connectDB(process.env.URI);
    app.listen(port, () => console.log("Server is running "));
  } catch (error) {
    console.log(error.message);
  }
};

startServer();
