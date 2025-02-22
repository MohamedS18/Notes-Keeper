const mongoose = require("mongoose");
const { notesSchema } = require("../model/notesSchema");
const bcrypt = require("bcryptjs");

const Notes = mongoose.model.Notes || mongoose.model("Note", notesSchema);

async function signUp(req, res) {
  try {
    const { username, password } = req.body;
    const data = await Notes.findOne({ username });
    if (data) {
      res.status(400).send({ status: false });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const insert = await Notes.insertOne({
      username,
      password: hashedPassword,
      notes: [
        {
          title: `Welcome ${username.split("@")[0]}`,
          content:
            "📝✨ Start capturing your thoughts, ideas, and memories—all in one place. Happy noting!",
          lastUpdated: new Date(),
        },
      ],
    });
    res.status(200).send({ status: true });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ status: false });
  }
}

module.exports = { signUp };
