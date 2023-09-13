const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
//const dotenv = require("dotenv");
const app = express();
require ("dotenv").config();


const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyparser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
   /* useCreateIndex: true,
    useNewurlParser: true,
    useunifiedTopologyL: true,
    useFindandModify: false,*/
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb connection success");
})

const studentRouter = require("./routes/Students");
// app.use(express.json());
app.use("/Student",studentRouter);

app.listen(PORT, () => {
    console.log(`server is up and running on port number: ${PORT}`)
})