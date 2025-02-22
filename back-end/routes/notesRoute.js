const express = require("express");
const { login } = require("../controller/login");
const { insertData } = require("../controller/insertData");
const { deleteData } = require("../controller/deleteData");
const { signUp } = require("../controller/signUp");
const { getAllData } = require("../controller/getAllData");

const router = express.Router();

router.put("/login", login);

router.post("/signup", signUp);

router.put("/insert", insertData);

router.put("/delete", deleteData);

router.get("/getdata", getAllData);

module.exports = { notesRoute: router };
