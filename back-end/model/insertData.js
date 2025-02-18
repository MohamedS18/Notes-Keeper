const mongoose = require("mongoose");
const { notesSchema } = require("../database/notesSchema");

const Notes = mongoose.model.Note || mongoose.model("Note", notesSchema);

async function insertData(req, res) {
  try {
    const { username, title, content } = req.body;
    console.log(username, title, content);
    const data = await Notes.updateOne(
      { username: username },
      { $push: { notes: { title, content } } }
    );

    console.log(data);

    // await data[0].notes.save();
  } catch (err) {
    console.log(err.message);
  }

  // console.log(data);
  // Notes.insertOne(title)
  // console.log("sso sad");
}

module.exports = { insertData };
