const mongoose = require("mongoose");
const { notesSchema } = require("../model/notesSchema");
const bcrypt = require("bcryptjs");
const {logger} = require("../logging/logger")

const Notes = mongoose.model.Note || mongoose.model("Note", notesSchema);

async function login(req, res) {

  res.header('Access-Control-Allow-Origin', 'https://khabir-notes.vercel.app');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');

  try {
    const { username, password } = req.body;
    logger("PUT", username);
    const data = await Notes.findOne({ username });

    if (!data) {
      res.status(401).json({ status: false });
    } else {
      const isMatch = await bcrypt.compare(password, data.password);
      if (isMatch) {
        res.status(200).send({ status: true });
      } else {
        res.status(400).send({ status: false });
      }
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ status: false });
  }
}

module.exports = { login };
