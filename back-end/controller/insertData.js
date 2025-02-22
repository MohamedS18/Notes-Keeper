const mongoose = require("mongoose");
const { notesSchema } = require("../model/notesSchema");
const {logger} = require("../logs/logger")


const Notes = mongoose.model.Note || mongoose.model("Note", notesSchema);

async function insertData(req, res) {
  try {
    const { username, title, content, lastUpdated } = req.body;
    logger("PUT", username);
    const data = await Notes.updateOne(
      { username: username },
      {
        $push: {
          notes: { title, content, lastUpdated: new Date(lastUpdated) },
        },
      }
    );

    res.status(200).send({ success: true });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("error");
  }
}

module.exports = { insertData };
