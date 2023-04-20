//1
const express = require("express");

//2
const app = express();

//5
require("dotenv").config();

//6
const connectDB = require("./config/connectDB");
connectDB();

//7
app.use(express.json());

//8
app.use("/api/user", require("./routes/user"));
app.use("/api/product", require("./routes/product"));

//3
const PORT = process.env.PORT;

//4
app.listen(PORT, (err) =>
  err
    ? console.error(err)
    : console.log(`server is running on port ${PORT} ...`)
);
