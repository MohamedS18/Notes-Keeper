const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const app = express();
const { getAllData } = require("../model/getAllData");
const { isExist } = require("../controller/userExist");
const { login } = require("../controller/login");
const { insertData } = require("../controller/insertData");
const { deleteData } = require("../controller/deleteData");
const { signUp } = require("../controller/signUp");
const {connectDB} = require("../database/connectDB")


const router = express.Router();

router.put("/login", login);

router.post("/signup", signUp);

router.put("/insert", insertData);

router.put("/delete", deleteData);

module.exports = { notesRoute: router };
