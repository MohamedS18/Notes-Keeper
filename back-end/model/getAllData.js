const mongoose = require("mongoose");
const { notesSchema } = require("../database/notesSchema");
// import { notesSchema } from "../database/notesSchema";

const Notes = mongoose.model.Notes || mongoose.model("Note", notesSchema);

async function getAllData(req,res) {
  try {
    // await mongoose.connect("mongodb://localhost:27017/demo");

    // new Note({title:"welcome", description:"hi", date:new Date()});
    const data = await Notes.find({username:req.body.user}).sort({lastUpdated:-1});
    // Notes.insertOne({
    //   username: "sample",
    //   password: "sample",
    //   notes: [
    //     {
    //       title: "Hi",
    //       content: "summa",
    //       lastUpdated: new Date(),
    //     },
    //     { title: "Summa", content: "String", lastUpdated: new Date() },
    //   ],
    // });
    // console.log(data);
    //
    // if (data.length === 0) {
    //   await Notes.insertOne({
    //     title: "Welcome",
    //     content: "hi",
    //     lastUpdated: new Date(),
    //   });
    // }

    res.status(200).send(data);
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = { getAllData };
