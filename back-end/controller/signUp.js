const mongoose = require("mongoose");
const { notesSchema } = require("../model/notesSchema");
const { userExist } = require("../controller/userExist");
const bcrypt = require("bcryptjs");


const Notes = mongoose.model.Notes || mongoose.model("Note", notesSchema);

async function signUp(req, res) {
  try {
    const {username, password} = req.body;
    // console.log(username, password);
    const data = await Notes.findOne({ username });
    console.log(data?true:false);
    if (data) {
      res.status(200).send({ status: false });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const insert = await Notes.insertOne({
      username,
      password:hashedPassword,
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
}



module.exports = { signUp };
