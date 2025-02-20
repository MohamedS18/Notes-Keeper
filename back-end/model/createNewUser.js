const mongoose = require("mongoose");
const { notesSchema } = require("../database/notesSchema");
const { isExist } = require("./isExist");

const Notes = mongoose.model.Notes || mongoose.model("Note", notesSchema);

async function createNewUser(req, res) {
  try {
    const {username, password} = req.body;
    // console.log(username, password);
    const response = await isExist(username);

    if (response) {
      res.status(200).send({ status: false });
      return;
    }
    const insert = await Notes.insertOne({
      username,
      password,
      notes: [
        {
          title: "Welcome",
          content: "Its your first Note",
          lastUpdated: new Date(),
        },
      ],
    });
    // console.log(response);
    res.status(200).send({ status: true });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ status: false });
  }
  // await mongoose.connect("mongodb://localhost:27017/demo");
}

module.exports = { createNewUser };
