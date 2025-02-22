const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const app = express();
const { getAllData } = require("./controller/getAllData");
const { connectDB } = require("./database/connectDB");

const { notesRoute } = require("./routes/notesRoute");

dotenv.config();

app.get("/", (req,res)=>{
    res.status(200).json({staus:"Successfull"});
})

app.use(connectDB);
app.use(cors({ origin: process.env.URL }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/notes", notesRoute);

module.exports = app;