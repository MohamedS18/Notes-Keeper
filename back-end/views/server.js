const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
const { getAllData } = require("../model/getAllData");
const { isExist } = require("../model/isExist");
const { isUserExist } = require("../controller/isUserExist");
const { insertData } = require("../model/insertData");
const { deleteData } = require("../model/deleteData");
const { createNewUser } = require("../model/createNewUser");

app.use(async (req, res, next) => {
  try {
    await mongoose.connect("mongodb://localhost:27017/demo");
    // console.log("database ok");
  } catch (err) {
    console.log(err.message);
  }
  next();
});
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = 3000;

app.put("/login", isUserExist);

app.post("/signup", createNewUser)

app.put("/insert", insertData);

app.put("/delete", deleteData);

app.post("/", getAllData);

// const userSchema = new mongoose.Schema({
//     name: String,
//     age: Number,
//     date: Date,
// });

// const User = mongoose.model("User", userSchema);

// app.post("/", async (req,res) =>{
//     console.log("data received")
//     console.log(req.body);
//     res.status(201).json({message:"hi"});
// })

// const user = new User();
// app.get("/", async (req, res) => {
//     try {
//         await mongoose.connect("mongodb://localhost:27017/demo");
//         console.log("Connected to MongoDB");

//         // Use the User model to create a new document

//         //
//         // await User.insertOne({name:"hi",age:10,date:new Date()})
//         await user.save();
//         // User.deleteMany({date:{$not:{$exist:false}}})
//         const d = (await User.find({}).sort({date:1}))
//         // res.send(user);

//         console.log(d);

//         //  res.write(`${typeof User.find()}`);
//         res.send("User created successfully");
//     } catch (err) {
//         console.error("Error:", err.message);
//         res.status(500).send("Internal Server Error"+err.message);
//     }
// });

app.listen(PORT, () => console.log("Server running on port " + PORT));
